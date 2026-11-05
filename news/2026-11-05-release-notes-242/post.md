---
title: Blazorise 2.4.2 - DataGrid Virtualization Fixes and .NET 11 RC3 Support
description: Blazorise 2.4.2 fixes long-standing virtualized DataGrid row height issues, adds .NET 11 RC3 support, restores DatePicker ordinal suffixes, and improves SVG Charts spacing.
permalink: /news/release-notes/242
canonical: /news/release-notes/242
image-url: img/v242.jpg
image-title: Blazorise 2.4.2 - DataGrid Virtualization Fixes and .NET 11 RC3 Support
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-11-05
read-time: 3 min
---

# Blazorise 2.4.2 - DataGrid Virtualization Fixes and .NET 11 RC3 Support

Blazorise **2.4.2** is another maintenance update for the 2.4 release, with fixes for DataGrid virtualization, DatePicker formatting, Tabs, and Tailwind components, along with several improvements to SVG Charts.

One of the main fixes resolves a long-standing issue with row heights when scrolling through a virtualized DataGrid. This release also updates Blazorise to **.NET 11 RC3**, restores ordinal suffix formatting in DatePicker, and improves how SVG Charts arrange labels, legends, and tooltips.

## Highlights

### More Stable DataGrid Virtualization

We finally fixed a long-standing issue affecting row heights in **virtualized DataGrid**.

When scrolling through a grid that loads data on demand, rows could temporarily appear at a different height while the data was loading. Once loading finished, they would change back to their expected height. This caused visible jumps during scrolling, especially when applications used custom row heights.

In **2.4.2**, we improved row height calculations and the way virtualized rows are handled during loading. Rows now keep more consistent heights as data changes, making scrolling smoother and more predictable.

We also fixed multiple row selection when a DataGrid does not use a `DataGridMultiSelectColumn`. Row clicks and Shift-click selection now work correctly without requiring a checkbox column.

### .NET 11 RC3 Support

Blazorise **2.4.2** includes support for **.NET 11 Release Candidate 3**.

We updated the .NET 11 references, package versions, and build configuration to RC3 so developers testing their applications on the latest .NET preview can continue using Blazorise.

### DatePicker Ordinal Suffix Formatting

DatePicker now supports ordinal day suffixes again, such as **1st**, **2nd**, **3rd**, and **4th**.

This behavior was previously available through the `J` format token in the Flatpickr library. When we removed Flatpickr and moved to our native DatePicker implementation, that formatting option was no longer supported.

Rather than reusing a Flatpickr-specific token, we introduced a new **`{part:ordinal}`** format specifier. This restores the feature while keeping the format compatible with our own DatePicker implementation.

### SVG Charts Layout and Spacing Improvements

We improved how **SVG Charts** calculate the space needed for axis labels, titles, legends, and tooltips.

Charts now take label text, font size, and rotation into account when calculating their layout. This helps prevent overlapping or clipped text while avoiding unnecessary empty space. Tooltips can also grow to fit their content, and new options make it easier to customize axis titles and legend labels.

Some SVG Charts parameters now use option objects instead of plain strings. These types support implicit conversion from strings in C#, but Razor does not always apply that conversion to a plain component attribute.

For example, an axis title previously written as:

```razor
<SvgChartValueAxis Id="revenue" Title="Revenue" />
```

may now need to use an explicit Razor expression:

```razor
<SvgChartValueAxis Id="revenue" Title='@("Revenue")' />
```

If you read the axis title from C#, use `Title?.Text` instead of treating `Title` as a string. The axis label `Offset` property is also now nullable, so code reading its value should handle `null`.

Automatic tooltip sizing is enabled by default, with configured `Width` and `Height` values acting as minimum sizes. Set `AutoSize` to `false` if you need fixed tooltip dimensions. The automatic spacing changes may also slightly change how existing charts look.

These type changes require dependent assemblies to be rebuilt after updating.

---

Blazorise 2.4.2 also fixes a Tabs render loop involving `AuthorizeView`, improves the Tailwind ColorPicker layout and flex utilities, and updates our end-to-end tests to better reflect real user interactions.

## Full Changelog

All changes included in **2.4.2**:

- [#6879](https://github.com/Megabit/Blazorise/pull/6879) Tests: make MemoInput and drag-and-drop E2E tests follow real user interactions
- [#5720](https://github.com/Megabit/Blazorise/issues/5720) Inconsistent row heights during data loading in virtualized DataGrid
- [#6881](https://github.com/Megabit/Blazorise/pull/6881) Build: update .NET 11 references to RC3
- [#6883](https://github.com/Megabit/Blazorise/pull/6883) Tailwind: fix missing flex utilities for CSS
- [#6885](https://github.com/Megabit/Blazorise/pull/6885) Tailwind: fix ColorPicker swatch and input height
- [#6888](https://github.com/Megabit/Blazorise/pull/6888) DataGrid: fix multiple selection without checkbox column
- [#6894](https://github.com/Megabit/Blazorise/pull/6894) SVG Charts: improve spacing for axis labels, legends, and tooltips
- [#6895](https://github.com/Megabit/Blazorise/pull/6895) Tabs: fix render loop with AuthorizeView
- [#6893](https://github.com/Megabit/Blazorise/issues/6893) DatePicker: ordinal suffix formatting support

## Upgrading

Blazorise **2.4.2** is a recommended update for applications already running Blazorise 2.4.

Update your Blazorise NuGet packages to version **2.4.2**. Most applications can upgrade without other changes, but **SVG Charts users should check axis title parameters and nullable label offsets** as described above, and rebuild projects that depend on the changed option types.

If you find a regression or unexpected behavior after upgrading, please report it through our GitHub issue tracker.

## Thank you & commercial support

Thank you to everyone who reported issues, tested the fixes, and helped us improve the framework. In particular, resolving the long-standing DataGrid virtualization issue is a good example of how reports from real applications help us find and fix problems over time.

For commercial licensing and support:  
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps us continue developing and maintaining Blazorise.