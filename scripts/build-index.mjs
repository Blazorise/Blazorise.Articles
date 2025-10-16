import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fg from 'fast-glob';
import matter from 'gray-matter';
import zlib from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Repo root
const ROOT = path.resolve(__dirname, '..');
const RUNTIME_DIR = path.join(ROOT, 'runtime');
fs.mkdirSync(RUNTIME_DIR, { recursive: true });

/**
 * Normalize YAML values: keep unquoted feel in JSON,
 * but do not transform content (consumer decides).
 */
function cleanStr(v) {
  if (v === undefined || v === null) return undefined;
  if (typeof v !== 'string') return String(v);
  return v.trim();
}

function slugFromPermalink(permalink) {
  if (!permalink) return '';
  return String(permalink).replace(/\/+$/, '').split('/').filter(Boolean).pop() || '';
}

function rootFromPath(p) {
  // e.g., blog/2021-02-01-foo/post.md => blog
  const seg = p.split(/[\\/]/)[0];
  return seg || 'blog';
}

function relDir(p) {
  // blog/2021-02-01-foo/post.md => blog/2021-02-01-foo
  return p.replace(/\/?post\.md$/i, '');
}

function buildImageUrl(rootDir, fmImageUrl) {
  if (!fmImageUrl) return undefined;
  const filename = path.posix.basename(fmImageUrl);
  return `img/${filename}`;
}

function readFrontMatter(mdPath) {
  const raw = fs.readFileSync(mdPath, 'utf8');
  const parsed = matter(raw);
  const fm = parsed.data || {};
  const body = parsed.content || '';

  const permalink = cleanStr(fm['permalink']);
  const title = cleanStr(fm['title']) || slugFromPermalink(permalink);
  const imageUrl = buildImageUrl(path.posix.dirname(mdPath), cleanStr(fm['image-url']));

  return {
    fm: {
      title,
      description: cleanStr(fm['description']),
      permalink: permalink,
      canonical: cleanStr(fm['canonical']) || permalink,
      imageUrl: imageUrl,
      imageTitle: cleanStr(fm['image-title']) || title,
      authorName: cleanStr(fm['author-name']),
      authorImage: cleanStr(fm['author-image']),
      category: cleanStr(fm['category']),
      postedOn: cleanStr(fm['posted-on']),
      readTime: cleanStr(fm['read-time']),
    },
    body
  };
}

function compactIndexItem(mdRelPath, fm) {
  const root = rootFromPath(mdRelPath); // blog | news
  const relativeDir = relDir(mdRelPath);
  const slug = slugFromPermalink(fm.permalink);

  return {
    // minimal data to render list pages without fetching posts
    root,                // "blog" | "news"
    dir: relativeDir,    // e.g., "blog/2021-05-15-foo"
    slug,                // e.g., "foo"
    permalink: fm.permalink,
    title: fm.title,
    summary: fm.description,
    postedOn: fm.postedOn,
    category: fm.category || null,
    imageUrl: fm.imageUrl || null,
    authorName: fm.authorName || null,
    authorImage: fm.authorImage || null,
    readTime: fm.readTime || null,
  };
}

function makeIndex(items) {
  // Sort: newest first, then title
  return items
    .sort((a, b) => {
      const ad = a.postedOn || '';
      const bd = b.postedOn || '';
      if (ad !== bd) return ad < bd ? 1 : -1;
      const at = (a.title || '').toLowerCase();
      const bt = (b.title || '').toLowerCase();
      return at.localeCompare(bt);
    });
}

async function zipPosts(mdFiles, outZip) {
  // Simple zip via system 'zip' (present on ubuntu runners) for reliability.
  // If you prefer pure JS, replace with 'yazl' or 'archiver'.
  const { execSync } = await import('node:child_process');
  const tmpList = path.join(RUNTIME_DIR, 'posts_list.txt');
  fs.writeFileSync(tmpList, mdFiles.join('\n'), 'utf8');
  try {
    execSync(`zip -@ -q ${outZip}`, { input: fs.readFileSync(tmpList), cwd: ROOT });
  } finally {
    fs.rmSync(tmpList, { force: true });
  }
}

async function run() {
  // Find all post.md under blog/** and news/**
  const mdFiles = await fg(['blog/**/post.md', 'news/**/post.md'], {
    cwd: ROOT,
    dot: false,
    onlyFiles: true
  });

  const items = [];
  for (const rel of mdFiles) {
    const abs = path.join(ROOT, rel);
    const { fm } = readFrontMatter(abs);

    // Skip items with no permalink/title
    if (!fm.permalink || !fm.title) continue;

    items.push(compactIndexItem(rel.replaceAll('\\','/'), fm));
  }

  const index = makeIndex(items);

  const sha = (process.env.GITHUB_SHA || '').slice(0, 12);
  const now = new Date().toISOString();

  const indexPath = path.join(RUNTIME_DIR, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify({
    version: 1,
    generatedAt: now,
    commit: sha,
    count: index.length,
    items: index
  }, null, 2), 'utf8');

  fs.writeFileSync(path.join(RUNTIME_DIR, 'version.json'), JSON.stringify({
    commit: sha,
    generatedAt: now
  }, null, 2), 'utf8');

  // Optional: bundle raw posts for super-fast detail pages
  const zipPath = path.join(RUNTIME_DIR, 'posts.zip');
  await zipPosts(mdFiles, zipPath);

  console.log(`Wrote: ${path.relative(ROOT, indexPath)} (${index.length} items)`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
