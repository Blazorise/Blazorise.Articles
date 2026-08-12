# 📰 Blazorise.Articles

This repository contains all **blog** and **news** posts published on the [Blazorise website](https://blazorise.com).

It’s designed to make writing, reviewing, and publishing new content **fast, simple, and collaborative** — all through Markdown files.

---

## ✨ Overview

The Blazorise Blog and News sections are fully powered by Markdown.

Every post (whether a blog or a news update) lives as a simple `.md` file inside one of the two folders:

```
/blog
/news
```

Each post is stored in its own subfolder, named by date and slug, for example:

```
blog/
 └── 2025-10-17-blazorise-blog-reimagined/
     ├── post.md
     └── img/
         └── blazorise-blog-reimagined.png
```

---

## 🧱 Front Matter Format

Each post starts with a YAML front matter section that defines the post’s metadata.

```yaml
---
title: Blazorise Blog Reimagined – A Fresh Start for Our Stories
description: We rebuilt our entire blog and news platform from scratch! Learn how the new system makes it easier for everyone to write, share, and collaborate on Blazorise stories and updates.
permalink: /blog/blazorise-blog-reimagined
canonical: /blog/blazorise-blog-reimagined
image-url: img/blazorise-blog-reimagined.png
image-title: Blazorise Blog Reimagined
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: Announcements
posted-on: 2025-10-17
read-time: 4 min
pinned: true
video: GC5E8ie2pdM
---
```

### 🧩 Front Matter Fields

| Field | Description |
|-------|--------------|
| **title** | Post title displayed on the website |
| **description** | Short description for SEO and previews |
| **permalink** | Unique URL path to the post |
| **canonical** | Canonical URL (usually same as permalink) |
| **image-url** | Path to the post’s header image, usually `img/...` |
| **image-title** | Alt/title text for the image |
| **author-name** | Name of the author |
| **author-image** | Author avatar path (from `/assets/img/authors/`) |
| **category** | Category name (e.g. “How To Guides”, “Announcements”) |
| **posted-on** | Date of publication in `yyyy-MM-dd` format |
| **read-time** | Estimated read time (e.g. `5 min`) |
| **pinned** | (Optional) If `true`, the post is featured at the top |
| **video** | (Optional) YouTube video ID (for example, `GC5E8ie2pdM`) |

---

## 🖋️ Writing a Post

1. **Create a new folder** under either `/blog` or `/news`
   Name it using the date and a short slug:
   ```
   2025-10-17-my-awesome-post
   ```

2. **Add your post.md** file with YAML front matter and Markdown content.

3. **Add any images** inside an `img` subfolder next to your Markdown file:
   ```
   img/my-post-image.png
   ```

4. **Use relative paths** for images inside Markdown:
   ```markdown
   ![My Post Image](img/my-post-image.png)
   ```

5. **Create a Pull Request** to propose your post.
   The Blazorise team will review, approve, and merge it — triggering the publishing workflow.

---

## ⚙️ Publishing Workflow

When a new post is merged into the `main` branch:

1. A GitHub Action automatically runs.
2. It parses all Markdown posts and metadata.
3. It builds optimized bundles:
   - `index.json` → summary info for all posts
   - `posts.zip` → full Markdown content
   - `version.json` → current build version
4. The Blazorise Docs site automatically refreshes to display the new content.

---

## 🧑‍💻 Contributing Guidelines

- Keep tone consistent with existing articles — friendly and informative.
- Use **plain Markdown** whenever possible (avoid inline HTML unless necessary).
- Optimize images for web (prefer ≤ 200 KB).
- Run spell check before committing.
- Follow the filename convention:
  ```
  yyyy-MM-dd-post-title
  ```

---

## 💬 Example

Here’s a minimal example post:

```markdown
---
title: Introducing the New Blazorise Scheduler
description: A look at our new Scheduler component and what makes it special.
permalink: /blog/introducing-blazorise-scheduler
canonical: /blog/introducing-blazorise-scheduler
image-url: img/blazorise-scheduler.png
image-title: Introducing the New Blazorise Scheduler
author-name: Jane Doe
author-image: /assets/img/authors/jane.png
category: Components
posted-on: 2025-11-05
read-time: 3 min
---

# Introducing the New Blazorise Scheduler

We’re excited to announce the **Blazorise Scheduler**, a fully featured scheduling component for .NET developers...
```

---

## ❤️ Join the Conversation

We love hearing your stories, tutorials, and insights!

If you’ve built something cool with Blazorise or have tips to share, open a PR and contribute your post.

Together, we make Blazorise better — one post at a time.

---

**📫 Questions or feedback?**

Feel free to reach out on [Discord](https://discord.gg/cVmq8xBSnG), [GitHub Discussions](https://github.com/Megabit/Blazorise/discussions), or [Twitter](https://twitter.com/blazorise).
