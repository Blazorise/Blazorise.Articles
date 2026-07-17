---
title: Blazorise 2.2.2 - Svg Charts Improvements and Component Fixes
description: Blazorise 2.2.2 brings major improvements to the new Svg Charts component along with fixes for Autocomplete, Scheduler, DataGrid, Dropdowns, Carousel, and more.
permalink: /news/release-notes/222
canonical: /news/release-notes/222
image-url: img/v222.jpg
image-title: Blazorise 2.2.2 - Svg Charts Improvements and Component Fixes
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-07-17
read-time: 2 min
---

# Blazorise 2.2.2 - Svg Charts Improvements and Component Fixes

Blazorise **2.2.2** is a maintenance release that brings improvements across several components, with many updates focused on the new **Svg Charts** library.

This update fixes issues reported by the community, improves component behavior, and continues to make Svg Charts more complete and easier to use.

## Highlights

### Svg Charts Improvements

This release includes several improvements for **Blazorise Svg Charts**.

Since its release in **2.2**, Svg Charts has quickly become one of the most popular new components in Blazorise. The amount of feedback and feature requests we've received shows that many developers have already started using it in their applications.

Version **2.2.2** improves chart legends, label rendering, option handling, bar and column charts, and time axis behavior. It also adds support for chart labels and improves legend wrapping and alignment, making charts easier to read in more scenarios.

### Improvements Across Components

This release also includes fixes for several core components.

Autocomplete now handles clearing null values more consistently and keeps the selected text synchronized with the dropdown. Scheduler correctly hides week numbers when configured, DataGrid calculates template column spans correctly when hidden columns are used, and fixes were made for nested dropdowns, DatePicker inside modals, Carousel, FilePicker, and several provider-specific components.

---

Blazorise 2.2.2 improves the framework across many components while continuing to add new features and fixes to Svg Charts based on community feedback.

## Full Changelog

All changes included in **2.2.2**:

- [#5957](https://github.com/Megabit/Blazorise/issues/5957) Remove min width from FilePicker list
- [#6638](https://github.com/Megabit/Blazorise/issues/6638) Dropdown suggestions overlapping when filtering
- [#6643](https://github.com/Megabit/Blazorise/pull/6643) Autocomplete: fix null value clearing and selected text dropdown sync
- [#6647](https://github.com/Megabit/Blazorise/issues/6647) Scheduler MonthView ShowWeekNumbers property not working
- [#6649](https://github.com/Megabit/Blazorise/pull/6649) Bar: fix items alignment for Bootstrap 5 provider
- [#6644](https://github.com/Megabit/Blazorise/issues/6644) DataGrid EmptyTemplate and FilterEmptyTemplate incorrect colspan
- [#6635](https://github.com/Megabit/Blazorise/issues/6635) Nested dropdown menus displayed in the wrong position
- [#6667](https://github.com/Megabit/Blazorise/issues/6667) SvgChartLegend not horizontally centered
- [#6670](https://github.com/Megabit/Blazorise/pull/6670) Material: fix DatePicker popup clipping inside Modal
- [#6671](https://github.com/Megabit/Blazorise/issues/6671) Carousel SelectedSlide property shouldn't be required
- [#6673](https://github.com/Megabit/Blazorise/issues/6673) Column/bar baseline ignores axis minimum
- [#6674](https://github.com/Megabit/Blazorise/issues/6674) SvgChartLegend wrapping improvements
- [#6678](https://github.com/Megabit/Blazorise/pull/6678) Charts.Svg: fix component option precedence
- [#6683](https://github.com/Megabit/Blazorise/issues/6683) SVGChart Labels
- [#6681](https://github.com/Megabit/Blazorise/issues/6681) SvgChartTimeAxis respects local time zones
- [#6687](https://github.com/Megabit/Blazorise/pull/6687) FluentUI Icons: add opt-in SVG sprite rendering
- [#6688](https://github.com/Megabit/Blazorise/pull/6688) Documentation: make multi-code examples copy-paste ready

## Upgrading

Blazorise **2.2.2** is a safe update for all **2.2.x** applications.

Simply update your NuGet packages to version **2.2.2**. No migration steps or breaking changes are required.

## Thank you & commercial support

Thank you to everyone who reported issues, suggested improvements, and helped shape the rapid evolution of Blazorise. Your feedback continues to make every release more stable and more capable.

For commercial licensing and support:  
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps ensure the continued evolution of Blazorise for modern .NET applications.