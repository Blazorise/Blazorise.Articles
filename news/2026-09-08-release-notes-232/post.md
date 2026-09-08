---
title: Blazorise 2.3.2 - Performance and Stability Improvements
description: Blazorise 2.3.2 improves Graph performance with large datasets, speeds up Autocomplete keyboard navigation, improves SVG Charts, and fixes DatePicker and FluentUI issues.
permalink: /news/release-notes/232
canonical: /news/release-notes/232
image-url: img/v232.jpg
image-title: Blazorise 2.3.2 - Performance and Stability Improvements
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-09-08
read-time: 2 min
---

# Blazorise 2.3.2 - Performance and Stability Improvements

Blazorise **2.3.2** is our second maintenance update for the 2.3 release, with a major performance improvement for SVG Charts and fixes across Autocomplete, DatePicker, TimePicker, FluentUI, and testing.

The biggest change is in **SVG Charts**, where rendering large datasets is now more than **10x faster** in our tests. A chart that previously took around 3 to 4 seconds to render in Blazor WebAssembly can now render in roughly 200 to 300 ms.

This release also makes Autocomplete keyboard navigation faster, improves SVG Charts axis ranges and labels, and fixes a DatePicker and TimePicker regression introduced in 2.3.0.

## Highlights

### Major SVG Charts Performance Improvements

**SVG Charts** received a major performance update in Blazorise 2.3.2, especially when rendering charts with a large number of data points.

We reworked parts of the rendering process and reduced the amount of work Blazor needs to perform when building the SVG output. In our tests, this resulted in **more than a 10x improvement in rendering performance**.

A chart that previously took around **3 to 4 seconds** to render now takes approximately **200 to 300 ms**. These numbers are from **Blazor WebAssembly**, where all of the rendering work happens directly in the browser.

This makes a big difference for dashboards and other applications that need to display larger datasets, especially when charts are updated frequently.

We also improved how SVG Charts calculate axis ranges and format axis labels. The updated logic produces better ranges and cleaner labels across different datasets, while avoiding unnecessary values and formatting issues.

Together, these changes make SVG Charts much faster with larger datasets and improve the final chart output at the same time.

### Faster Autocomplete Keyboard Navigation

**Autocomplete** could feel slow when navigating with the keyboard if items used custom content or more complex templates.

We optimized how Autocomplete handles these updates, removing the delay when moving between suggestions. Keyboard navigation now responds almost instantly, even when rendering custom content for each item.

This makes Autocomplete feel much faster and smoother in more complex use cases.

### SVG Charts Axis and Layout Improvements

**SVG Charts** also received several improvements to axis labels and chart layout.

We added new **font options for axis labels**, making it easier to control their appearance and match charts with the rest of your application.

We also updated the documentation and examples to show how charts can be rendered **without the default margins**. This allows the chart to use all available space, which is especially useful for dashboards and other layouts where every bit of space matters.

Together with the major rendering performance improvements in this release, these changes make SVG Charts faster and easier to customize.

---

Blazorise 2.3.2 also fixes component height differences in the Fluent provider when using dark mode and improves JSInterop configuration in Blazorise.Tests.

## Full Changelog

All changes included in **2.3.2**:

* [#6766](https://github.com/Megabit/Blazorise/issues/6766) Blazorise.Tests JSInterop not configured for Tooltip
* [#6770](https://github.com/Megabit/Blazorise/issues/6770) Large quantities of datapoints slows down the Graph visualization
* [#6772](https://github.com/Megabit/Blazorise/issues/6772) Autocomplete keyboard navigation feels slow
* [#6763](https://github.com/Megabit/Blazorise/issues/6763) SVG Charts: improve axis range and label formatting
* [#6782](https://github.com/Megabit/Blazorise/issues/6782) Component height varies in Fluent provider in dark mode
* [#6781](https://github.com/Megabit/Blazorise/issues/6781) DatePicker/TimePicker silently ignore a Value assigned after an await in OnInitializedAsync

## Upgrading

Blazorise **2.3.2** is a maintenance release and a recommended update for applications running Blazorise 2.3.

Simply update your Blazorise NuGet packages to version **2.3.2**. No migration steps or breaking changes are required.

If you find a regression or unexpected behavior after upgrading, please report it through our GitHub issue tracker.

## Thank you & commercial support

Thank you to everyone who reported issues and helped us track down these problems. Feedback from applications using Blazorise in production helps us improve each maintenance release.

For commercial licensing and support:
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps us continue developing and maintaining Blazorise.