---
title: Blazorise 1.8.7 – Stability & Long‑Awaited Fixes
description: Blazorise 1.8.7 delivers several important bug fixes, including a long‑standing virtualization navigation issue, improved validation behavior, and multiple component refinements.
permalink: /news/release-notes/187
canonical: /news/release-notes/187
image-url: img/v187.png
image-title: Blazorise 1.8.7 – Stability & Long‑Awaited Fixes
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-11-20
read-time: 2 min
---

# Blazorise 1.8.7 – Stability & Long‑Awaited Fixes

Blazorise **1.8.7** focuses on stability, resolving several long‑reported issues affecting validation, keyboard behavior, and component consistency. This release continues refining the 1.8.x branch with targeted improvements requested by the community.

## Highlights of 1.8.7

### Autocomplete: Improved Nested Menu Behavior

Autocomplete now correctly keeps its parent dropdown open while interacting with suggestions. Previously, using Autocomplete inside dropdown-based UI, such as a DataGrid filter menu, would cause the parent dropdown to close unexpectedly as soon as users typed or selected an item. This fix ensures smooth, uninterrupted interaction when Autocomplete is nested inside other menus.

### Long‑Standing Virtualization Navigation Bug Fixed

One of the most reported and persistent issues, keyboard navigation in virtualized lists, is finally resolved (**[#5197](https://github.com/Megabit/Blazorise/issues/5197)**).

The fix ensures that **ArrowUp**, **ArrowDown**, **PageUp**, and **PageDown** now work reliably even when virtualization is enabled.

This issue existed for a long time due to the complexity of synchronizing virtualized DOM regions with keyboard navigation state. With 1.8.7, this behavior is now consistent, predictable, and fully aligned with user expectations.

## Full changelog

Everything included in **1.8.7**:

- [#6270](https://github.com/Megabit/Blazorise/issues/6270): [Bug]: Errormessage in JavaScript of `table.js`
- [#6274](https://github.com/Megabit/Blazorise/issues/6274): Autocomplete: prevent closing nested parent menu
- [#6276](https://github.com/Megabit/Blazorise/issues/6276): Docs: only one horizontal field in a row
- [#6277](https://github.com/Megabit/Blazorise/issues/6277): Make Select work as `AddonType.End`
- [#5693](https://github.com/Megabit/Blazorise/issues/5693): [Bug]: Validation on RadioGroup is not red
- [#5197](https://github.com/Megabit/Blazorise/issues/5197): [Bug]: Arrow navigation not working properly with virtualization (long-standing issue finally resolved)

## Upgrading

Blazorise **1.8.7** is a safe, drop‑in update for all **1.8.x** projects.

No breaking changes are introduced, and all fixes are fully backward compatible.

## Thank you & commercial support

Each release, big or small, helps keep Blazorise stable, modern, and production-ready.  
Your bug reports, suggestions, and commercial support make these updates possible.

Explore our commercial licensing options here: [Blazorise Commercial](https://blazorise.com/commercial "Link to Blazorise Commercial").  
Your contribution ensures the continued evolution of Blazorise for professional use.