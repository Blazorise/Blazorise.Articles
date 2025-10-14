---
title: "Building a Dynamic Blog System with Blazorise"
description: "A deep dive into creating a runtime Markdown-based blog system for Blazorise, powered by GitHub and Markdig."
permalink: "/blog/blazorise-blog-system"
image-url: "images/cover.jpg"
image-title: "Blazorise Blog System Architecture"
author-name: "John Developer"
author-image: "/images/authors/mladen.jpg"
posted-on: "2025-10-14"
read-time: "12 min"
---

# Building a Dynamic Blog System with Blazorise

Welcome to this long-form walkthrough where we build a **runtime Markdown-driven blog system** for the Blazorise documentation site.  
The goal is to load blog posts from a separate **GitHub repository**, render them dynamically at runtime, and **cache** them using ETags for performance.

---

## Why We Needed a Runtime Blog System

Originally, all blog pages were compiled manually from `.razor` files, which was:

- **Hard to update** — every post required a new PR and build.
- **Not scalable** — contributors couldn’t easily submit articles.
- **Slow to deploy** — new posts meant new site releases.

So we wanted something simpler — just push a `.md` file to GitHub, and the site updates automatically.

> “When your documentation site becomes your blog engine,  
>  your build pipeline should not stand in the way of creativity.”  
>  — _Someone wise_

---

## Architecture Overview

### Components Involved

1. **`GithubBlogProvider`** – Reads `.md` files from GitHub at runtime.  
2. **`BlogAstWalker`** – Parses Markdown AST via **Markdig** and builds `RenderFragment`.  
3. **`BlogRuntimeSink`** – Translates Markdown blocks into Blazorise components.  
4. **`MemoryCache` + ETag** – Ensures posts are cached locally.  
5. **`Blog.razor` / `BlogPost.razor`** – Display pages with full Blazorise styling.

Here’s the basic flow:

```text
GitHub Repo (Markdown + Images)
          ↓
   GithubBlogProvider
          ↓
     Markdig Parser
          ↓
   BlogAstWalker + Sink
          ↓
     Blazor RenderFragment
          ↓
        Blazorise UI
```

---

## Example Directory Structure

```
posts/
├── 2025-10-14-blazorise-blog-system.md
├── 2025-09-20-introducing-dark-mode.md
└── images/
    ├── cover.jpg
    ├── diagram-architecture.png
    └── code-sample.png
```

Each post lives inside the `posts/` folder, with its **own `images/` subfolder**.  
Your runtime engine rewrites all relative image links to point to:

```
https://raw.githubusercontent.com/<Owner>/<Repo>/<Branch>/posts/<slug>/images/<file>
```

---

## Example: Paragraphs, Images, and Links

Here’s a screenshot of the architecture:

![Architecture Diagram](images/diagram-architecture.png)

And here’s a small **modal image**:

![Sample UI](images/code-sample.png "Blazorise UI in action")

Want to learn more about Blazorise?  
Check out the [official website](https://blazorise.com) for components, demos, and templates.

---

## Quotes and Callouts

> “Writing blogs in Markdown is liberating — no HTML, no razor clutter,  
>  just pure content.”  
>  — *Blazor Enthusiast*

---

## Lists and Nested Lists

### Unordered:

- Easy to write
- Works well with Markdown
- Converts into `<BlogPageList>`

### Ordered:

1. First, clone the repo.
2. Add your `.md` file in `/posts`.
3. Commit and push.
4. Done — your article will appear automatically.

### Nested:

- Feature highlights:
  - ✅ Caching with ETags
  - ⚡ No recompilation required
  - 🧱 Uses native Blazor components

---

## Code Blocks

### C#

```csharp
@code {
    protected override async Task OnInitializedAsync()
    {
        var posts = await Blog.GetListAsync();
        Console.WriteLine($"Loaded {posts.Count} posts from GitHub!");
    }
}
```

### HTML

```html
<BlogPageParagraph>
    <strong>Hello World!</strong>
    This paragraph was rendered directly from Markdown.
</BlogPageParagraph>
```

### Bash

```bash
# Clone the documentation repo
git clone https://github.com/Blazorise/Blazorise.Docs.git

# Run the dev server
dotnet watch run --project ./Blazorise.Docs.Server
```

---

## Inline Formatting Tests

We support **bold**, *italic*, `inline code`, and `<tag>` highlighting.

_This sentence has **bold inside italic** formatting_.

---

## Multi-line Quote with Code

> In Blazor, everything is a component — even Markdown.
>
> ```csharp
> builder.OpenComponent(0, typeof(Heading));
> builder.AddAttribute(1, "Size", HeadingSize.Is2);
> builder.AddContent(2, "Runtime Blog Rendering");
> builder.CloseComponent();
> ```

---

## Final Thoughts

This new runtime system brings several benefits:

- Articles are **decoupled** from builds.  
- You can **host posts in another repository** (even private, with a GitHub token).  
- Markdig ensures **consistent Markdown parsing**.  
- Blazorise components make posts **visually consistent** with the rest of the docs.

> ✅ **No rebuilds. No redeploys. Just push Markdown.**

---

## About the Author

![John Developer](images/author-photo.png "John Developer - Senior Engineer")

**John Developer** is a senior software engineer and open-source contributor.  
He loves building Blazor components, writing clean C#, and crafting documentation that *feels alive*.

---

## Related Posts

- [Introducing Dark Mode in Blazorise](/blog/introducing-dark-mode)
- [How Blazorise Simplifies UI Development](/blog/simplifies-ui)
- [Migrating from Razor Pages to Blazor](/blog/migrating-to-blazor)

---

Thanks for reading! 🚀  
If you enjoyed this post, consider starring the [Blazorise GitHub repository](https://github.com/Megabit/Blazorise) and following our progress on the next big release.
