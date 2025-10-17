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
---

# Blazorise Blog Reimagined – A Fresh Start for Our Stories

We're thrilled to introduce our **brand-new Blazorise Blog and News system**, rebuilt entirely from the ground up!

This isn't just a facelift. It's a smarter, faster, and more open way to share everything about Blazorise: releases, guides, tips, and all the creative things our community is building.

---

## Why start over?

The old blog served us well, but over time it started to show its age.

Previously, our posts were **Razor/Blazor pages inside the main app**. That meant content lived alongside code, which made writing and maintaining posts harder than it needed to be. Even a tiny change like fixing a typo required a **full application rebuild and republish**. It slowed us down, discouraged quick updates, and made contributions from others more complicated than they should be.

We wanted something that felt as smooth and fast as Blazor itself, so we did what Blazor developers do best: **we rebuilt it!**

Now the blog and news sections are powered by a smart build system that bundles everything; metadata, Markdown, and images into compact, optimized files. When the site starts up, it loads everything in memory instantly. No more coupling content edits to app deployments.

---

## How it works (in a nutshell)

We've set up a GitHub Action that:

- Reads all blog and news posts directly from our [articles repository](https://github.com/Blazorise/Blazorise.Articles)
- Parses the YAML front-matter (title, author, dates, etc.)
- Packages everything into two lightweight files `index.json` and `posts.zip`
- Publishes them automatically every time a new article is merged

The Blazorise Docs app now loads these bundles just once, caches them, and instantly renders pages.

It's simple, fast, and refreshes itself only when a new version is pushed.

---

## Easier for everyone

Here's the best part, anyone can publish a post with just a simple Markdown file.

No need for a CMS, no complex setup, and no developer-only barriers. Just open your favorite text editor, drop a new '.md' file into the blog or news folder, and push it to GitHub. That's it.

We've designed the new system to make sharing your Blazorise journey effortless. Whether you're showing off your first DataGrid, solving an interesting UI challenge, or just sharing a small win, we want writing to feel natural and fun.

Because at the end of the day, creating content should feel as smooth and enjoyable as building with Blazorise itself. Fast, expressive, and beautiful.

---

## What's next?

We're planning a few more goodies:

- Author pages with contributor profiles
- Tag filtering and content search
- Comment and feedback options (because we love hearing from you!)

But for now, enjoy exploring the new Blazorise Blog and News!

We can't wait to see what you write next.

---

Thank you to everyone in our amazing community who makes Blazorise better every day. ❤️

Let's keep learning, sharing, and building together!
