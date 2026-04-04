---
title: Blazorise 2.0.4 - Usability and Stability Improvements
description: Blazorise 2.0.4 brings improvements to DataGrid keyboard navigation, fixes Select value handling, and resolves multiple issues across components and providers.
permalink: /news/release-notes/204
canonical: /news/release-notes/204
image-url: img/v204.jpg
image-title: Blazorise 2.0.4 - Usability and Stability Improvements
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-04-03
read-time: 2 min
---

# Blazorise 2.0.4 - Usability and Stability Improvements

Blazorise **2.0.4** continues the 2.0 release cycle with a focus on usability improvements and bug fixes across multiple components.

This update improves keyboard interaction, resolves edge cases in form components, and fixes several issues across FluentUI, Bootstrap, and core components.

## Highlights

### Improved DataGrid Keyboard Navigation

Navigation within the **DataGrid** has been improved by enhancing support for **arrow key movement**. This makes it easier to move between cells and rows using only the keyboard, improving overall usability and accessibility when working with large datasets.

### Select ValueChanged Fix for Nullable Values

A fix has been implemented for `Select<TValue>` where `ValueChanged` was not triggered when selecting an item with a `null` value. This affected scenarios using nullable types and could lead to inconsistent state handling.

With this update, selection changes are now correctly propagated, ensuring predictable behavior in forms and data-binding scenarios.

---

Blazorise 2.0.4 also includes multiple fixes across Autocomplete, DatePicker, charts, tables, and provider-specific components, improving overall reliability.

## Full Changelog

All changes included in **2.0.4**:

- [#6470](https://github.com/Megabit/Blazorise/issues/6470) Autocomplete - NullReferenceException with Fluent Validation
- [#6469](https://github.com/Megabit/Blazorise/issues/6469) Autocomplete not focusing the next element
- [#6482](https://github.com/Megabit/Blazorise/issues/6482) FluentUI bar items contain underlined space on hover
- [#6486](https://github.com/Megabit/Blazorise/issues/6486) FluentUI2 and Bootstrap5 icon sizes not working
- [#6478](https://github.com/Megabit/Blazorise/issues/6478) Table with FixedColumns and FixedHeader not fixing column headers
- [#6490](https://github.com/Megabit/Blazorise/pull/6490) DataGrid: improve navigation with arrow keys
- [#6491](https://github.com/Megabit/Blazorise/issues/6491) JS Exception on navigation away from a Line chart
- [#6456](https://github.com/Megabit/Blazorise/issues/6456) Select<TValue> does not fire ValueChanged when selecting null value
- [#6495](https://github.com/Megabit/Blazorise/issues/6495) FluentUI2 Slider broken with comma-based cultures
- [#6501](https://github.com/Megabit/Blazorise/issues/6501) DatePicker Today not working
- [#6506](https://github.com/Megabit/Blazorise/issues/6506) OnCellStyling not working for Background

## Upgrading

Blazorise **2.0.4** is a safe upgrade for all **2.0.x** applications.

Simply update your NuGet packages to version **2.0.4**. No breaking changes or migration steps are required.

## Thank you & commercial support

Blazorise continues to grow thanks to community contributions and customer support. The introduction of the Gantt component highlights how collaboration and custom development efforts can benefit the entire ecosystem.

If your organization needs custom components or features, explore the [Blazorise Custom Work program](custom-work "Link to Blazorise Custom Work").

For commercial licensing and continued support of the project [Blazorise Commercial](pricing "Link to Blazorise Commercial").

Your support helps ensure the continued evolution of Blazorise for modern .NET applications.