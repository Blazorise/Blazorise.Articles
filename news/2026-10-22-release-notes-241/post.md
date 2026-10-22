---
title: Blazorise 2.4.1 - Tooltip Fixes, DataGrid Improvements, and Better Documentation
description: Blazorise 2.4.1 fixes issues with the new Tooltip, improves DataGrid scrolling and filtering, and makes component documentation easier to read and use.
permalink: /news/release-notes/241
canonical: /news/release-notes/241
image-url: img/v241.jpg
image-title: Blazorise 2.4.1 - Tooltip Fixes, DataGrid Improvements, and Better Documentation
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-10-22
read-time: 3 min
---

# Blazorise 2.4.1 - Tooltip Fixes, DataGrid Improvements, and Better Documentation

Blazorise **2.4.1** is the first maintenance update for the 2.4 release, with fixes for the new Tooltip, improvements to DataGrid, and updates to our documentation.

The new Tooltip introduced in 2.4 brought a few issues that only became clear after developers started using it in their applications. This release addresses those reports, along with several older DataGrid problems and fixes for Autocomplete, DatePicker, MemoEdit, and styling across providers.

## Highlights

### Fixes for the New Tooltip

In Blazorise 2.4, we replaced the previous Tooltip implementation with a new native component. Removing the old dependency gave us more control over Tooltip behavior, but the change also introduced a few regressions.

In **2.4.1**, we fixed `ShowDelay` not being respected, Tooltip affecting the layout of a `Field`, and tooltips appearing behind other page elements. We also corrected the default text alignment so tooltip content is no longer unexpectedly centered.

These fixes make the new Tooltip more reliable in existing layouts and help restore behavior developers were familiar with before upgrading to 2.4.

### Better DataGrid Scrolling and Filtering

We fixed a long-standing issue with **DataGrid `ScrollToRow`** when virtualization was enabled. Previously, scrolling to rows with higher indexes could fail because those rows had not yet been rendered. `ScrollToRow` now works more reliably with virtualized data, making it easier to navigate large grids from code.

We also improved paging when filtering reduces the number of available results. If the current page is no longer valid after a filter is applied, DataGrid now adjusts the page instead of leaving the user on an empty result.

Another fix addresses errors related to loading the DataGrid JavaScript module in certain situations.

### Documentation That's Easier to Follow

We've been working on making the Blazorise documentation clearer, especially for components that use several nested elements.

**41 component documentation pages** now have consistent structure diagrams showing how their components fit together. These diagrams make it easier to understand parent-child relationships without having to work through deeply nested lists.

We also replaced the table of contents with native Blazor components, automated version badges, and improved code examples to make them easier to read and copy into your own projects.

The goal is simple: make it easier to find what you need, understand how a component is built, and start using it.

---

Blazorise 2.4.1 also includes fixes for Autocomplete selection when both value and text are bound, DatePicker caret handling, MemoEdit text change events, FluentUI2 buttons, theme input outlines, and chart timeline labels.

## Full Changelog

All changes included in **2.4.1**:

- [#6853](https://github.com/Megabit/Blazorise/pull/6853) FluentUI2: fix the button with icon
- [#6851](https://github.com/Megabit/Blazorise/issues/6851) Fix colliding values on chart timelines
- [#6855](https://github.com/Megabit/Blazorise/pull/6855) DatePicker: preserve caret when typing over an autofilled year
- [#6856](https://github.com/Megabit/Blazorise/pull/6856) Docs: standardize component structure diagrams across documentation
- [#6858](https://github.com/Megabit/Blazorise/pull/6858) Autocomplete: fix selection when value and text are both bound
- [#4642](https://github.com/Megabit/Blazorise/issues/4642) MemoEdit: call TextChanged when Enter or Tab is pressed with ReplaceTab enabled
- [#6864](https://github.com/Megabit/Blazorise/issues/6864) Tooltip ShowDelay not working
- [#6862](https://github.com/Megabit/Blazorise/issues/6862) Tooltip changes Field layout
- [#6863](https://github.com/Megabit/Blazorise/issues/6863) Tooltip not always displayed on top
- [#6866](https://github.com/Megabit/Blazorise/pull/6866) Docs: automate version badges, add native TOC, and improve examples
- [#6867](https://github.com/Megabit/Blazorise/issues/6867) Tooltip text alignment incorrectly centered by default
- [#6637](https://github.com/Megabit/Blazorise/issues/6637) DataGrid: failed to fetch dynamically imported module
- [#6871](https://github.com/Megabit/Blazorise/pull/6871) Validation: remove unused revalidation path
- [#4281](https://github.com/Megabit/Blazorise/issues/4281) DataGrid: automatically adjust page after filtering reduces result count
- [#4879](https://github.com/Megabit/Blazorise/issues/4879) DataGrid: fix ScrollToRow with high indexes in Virtualize mode
- [#4811](https://github.com/Megabit/Blazorise/issues/4811) ThemeInputOptions: make CheckColor affect the input outline

## Upgrading

Blazorise **2.4.1** is a recommended maintenance update for applications running Blazorise 2.4.

Update your Blazorise NuGet packages to version **2.4.1**. No breaking API changes or additional migration steps are expected for applications already using 2.4.

If you find a problem after upgrading, please report it through our [GitHub issue tracker](https://github.com/Megabit/Blazorise/issues).

## Thank you & commercial support

Thank you to everyone who reported issues after the 2.4 release. Your feedback helps us find problems and improve Blazorise in the smaller updates between feature releases.

For commercial licensing and support:  
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps us continue developing and maintaining Blazorise.