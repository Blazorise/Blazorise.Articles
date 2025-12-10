---
title: Blazorise 1.8.8 - Component Reliability Update
description: Blazorise 1.8.8 delivers important reliability fixes for RichTextEdit, Autocomplete, TreeView, and DataGrid, improving consistency across core interactive components.
permalink: /news/release-notes/188
canonical: /news/release-notes/188
image-url: img/v188.png
image-title: Blazorise 1.8.8 - Component Reliability Update
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-11-28
read-time: 2 min
---

# Blazorise 1.8.8 - Component Reliability Update

Blazorise **1.8.8** focuses on improving the stability of several frequently used components. This release addresses keyboard behavior, selection consistency, binding issues, and event‑bubble correctness across RichTextEdit, Autocomplete, TreeView, and DataGrid.

These fixes were driven directly by real-world usage reports and continue our effort to make the 1.8.x branch rock‑solid for all production environments.

---

## Highlights of 1.8.8

### RichTextEdit: Multiple Editor Keyboard Navigation Fixed

A long-standing issue where **multiple RichTextEdit instances** on the same page caused **broken or inconsistent keyboard navigation** has been resolved. Editors now behave independently and maintain correct focus and caret behavior.

### TreeView: ExpandedNodes Binding Restored

TreeView's `ExpandedNodes` parameter was not updating after first render, preventing proper synchronization with external model state. This release restores correct two‑way coordination between UI tree state and the underlying data model.

### DataGrid: SelectedRows Correctly Updated When Items Are Removed

Removing items from the data source did not update `SelectedRows`, leading to stale or invalid selections. The internal selection tracking system has been corrected to always reflect the current item set.

---

## Full changelog

All fixes included in **1.8.8**:

- [#6285](https://github.com/Megabit/Blazorise/issues/6285) RichTextEdit: multiple editors keyboard navigation issue
- [#6302](https://github.com/Megabit/Blazorise/issues/6302) Autocomplete MultiSelect with ReadData not updating selected value
- [#6151](https://github.com/Megabit/Blazorise/issues/6151) TreeView: `ExpandedNodes` binding not updating after first render
- [#6308](https://github.com/Megabit/Blazorise/issues/6308) DataGrid: `SelectedRows` not updated when source items removed
- [#6306](https://github.com/Megabit/Blazorise/pull/6306) Autocomplete: bubble `SearchKeyDown` without `SelectedValuesChanged`

---

## Upgrading

Blazorise **1.8.8** is a safe drop‑in update for all **1.8.x** users.

No breaking changes, only stability improvements across core components.

---

## Thank you & commercial support

Each release, big or small, helps keep Blazorise stable, modern, and production-ready.  
Your bug reports, suggestions, and commercial support make these updates possible.

Explore our commercial licensing options here: [Blazorise Commercial](https://blazorise.com/commercial "Link to Blazorise Commercial").  
Your contribution ensures the continued evolution of Blazorise for professional use.