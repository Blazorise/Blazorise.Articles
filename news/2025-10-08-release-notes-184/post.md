---
title: Blazorise 1.8.4 – Maintenance Release
description: Blazorise 1.8.4 focuses on stability and polish: major Autocomplete fixes (checkbox blur, overlay, alignment), improved cancellation-token handling for fast typing, a corrected IsEmail validation rule, plus DataGrid localization and Batch Edit fixes.
permalink: /news/release-notes/184
canonical: /news/release-notes/184
image-url: img/v184.png
image-title: Blazorise 1.8.4 – Maintenance Release
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-10-08
read-time: 2 min
---

# Blazorise 1.8.4 – Maintenance Release

Blazorise **1.8.4** is a focused stability update. It addresses several community-reported issues to make everyday UX smoother, especially around **Autocomplete** and **Validation**, while adding small but meaningful improvements to **DataGrid**. If you're on the 1.8.x line, this release should feel like an easy drop-in with immediate quality-of-life benefits.

## What's New in 1.8.4

Key fixes and enhancements included in this release:

### Autocomplete (Checkbox mode): reliable closing, no ghost overlay, correct alignment

We resolved a group of UI issues where the Autocomplete dropdown in **Checkbox** mode would not close on blur, could leave a “ghost” overlay on the page, or appear slightly misaligned. The control now properly respects focus transitions, cleans up overlays, and positions the dropdown consistently across themes and providers. This noticeably improves multi-select workflows and keyboard navigation.

### Autocomplete: faster, safer typing with robust cancellation

Rapid typing previously risked overlapping lookups and out-of-order results. We now **properly handle cancellation tokens** for in-flight operations, ensuring stale requests are cancelled promptly. The result is a more responsive feel, fewer redundant lookups, and consistent, predictable suggestion lists, no flicker, no stale data.

### ValidationRule.IsEmail: accepts valid emails again

The **IsEmail** validation rule was rejecting some valid addresses. We updated the logic to correctly accept common real-world formats (e.g., subdomains, “+” tags, and longer TLDs). Forms depending on email validation should now pass as expected without custom workarounds.

## Full changelog

Everything that went into 1.8.4:

- [#6224](https://github.com/Megabit/Blazorise/issues/6224): [Bug]: Autocomplete (Checkbox mode) not closing on focus out (blur) + ghost dropdown overlay + misaligned dropdown
- [#6229](https://github.com/Megabit/Blazorise/pull/6229): Autocomplete: properly handle cancellation tokens when typing fast
- [#6232](https://github.com/Megabit/Blazorise/issues/6232): Issue with ValidationRule.IsEmail rejecting valid email addresses
- [#6233](https://github.com/Megabit/Blazorise/issues/6233): [Bug]: DataGrid with BatchEdit, clicking “Cancel Changes” as the very first action throws an exception.
- [#6231](https://github.com/Megabit/Blazorise/issues/6231): [Bug]: Missing localization for Columns text in Datagrid when ShowColumnChooser set
- [#6195](https://github.com/Megabit/Blazorise/issues/6195): Default DataGrid Filter Icon was changed

## Upgrading

This update is fully compatible within the **1.8.x** series, no breaking changes expected. We recommend upgrading to pick up the Autocomplete and validation fixes, as well as the DataGrid refinements (localization and default filter icon). If you rely on screenshot/visual diff tests, note the default filter icon change.

## Thank you & commercial support

Blazorise grows through the support of our community and commercial partners. If you find value in these maintenance releases, consider supporting ongoing development—your contributions help us deliver fixes and improvements faster.

Explore licensing options here: Blazorise Commercial. Your support directly fuels Blazorise’s future.
