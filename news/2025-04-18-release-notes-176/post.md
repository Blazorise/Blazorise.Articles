---
title: 🐣 Blazorise 1.7.6 – Maintenance Release
description: We're excited to roll out Blazorise 1.7.6 just in time for the Easter holidays! This maintenance release brings a range of stability fixes, quality-of-life improvements, and some meaningful updates to the documentation experience.
permalink: /news/release-notes/176
canonical: /news/release-notes/176
image-url: img/v176.png
image-title: 🐣 Blazorise 1.7.6 – Maintenance Release
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-04-18
read-time: 3 min
---

# 🐣 Blazorise 1.7.6 – Maintenance Release

We're excited to roll out **Blazorise 1.7.6** just in time for the Easter holidays! This maintenance release brings a range of stability fixes, quality-of-life improvements, and some meaningful updates to the documentation experience. Whether you're planning to take a well-deserved break or push through some last-minute feature updates, this release is here to make things smoother.

## Key Highlights in 1.7.6

### DataGrid: Missing Columns on Null First Row

We fixed a frustrating bug where DataGrid wouldn't generate columns if the first row in the data source contained null values. The improved logic now evaluates the full data set, ensuring reliable and complete column rendering.

### Chart: Crash with Zoom Plugin

Using the Chart component with the zoom plugin could previously result in runtime exceptions. That issue has been resolved, making zooming safe and functional again across all chart types.

## FileEdit: AOT Compilation Fix

A critical fix addresses a `NotSupportedException` thrown by FileEdit when used in AOT (Ahead-of-Time) compiled environments. It now works properly under AOT, making it safe to use in trimmed and precompiled deployments.

We encourage you to update to version 1.7.6 to benefit from these fixes and improvements. As always, please report any issues or provide feedback to help us continue improving.

## Documentation Improvements

We've made a big push to improve documentation usability and search functionality. The component search on the documentation site now returns richer and more relevant results, including:

Component names

Parameters and attributes

Methods and event handlers

These updates make it easier to find exactly what you need, whether you're browsing by keyword or looking up how a specific feature works.

## Changelog

- [#5998](https://github.com/Megabit/Blazorise/pull/5998): Autocomplete: add cursor pointer to checkbox
- [#4317](https://github.com/Megabit/Blazorise/issues/4317): Chart does not always render after async ajax call
- [#6006](https://github.com/Megabit/Blazorise/issues/6006): [Bug]: Exception in chart with zoom plugin
- [#6004](https://github.com/Megabit/Blazorise/issues/6004): [Bug]: cropper - Nullable object must have a value
- [#6000](https://github.com/Megabit/Blazorise/issues/): [Bug]: DataGrid dynamic data does not create a column on null values in the first row
- [#6022](https://github.com/Megabit/Blazorise/issues/6022): [Bug]: carousel pagination is broken
- [#5612](https://github.com/Megabit/Blazorise/issues/5612): Add FilterTemplate examples to the DataGrid Docs
- [#5976](https://github.com/Megabit/Blazorise/issues/5976): Regression: CellsEditableOnNewCommand and CellsEditableOnEditCommand Ignored in DataGridEditMode.Popup
- [#6025](https://github.com/Megabit/Blazorise/issues/6025): [Bug]: unable to search for filePicker component in documentation website
- [#6029](https://github.com/Megabit/Blazorise/issues/6029): [Bug]: FileEdit Throws System.NotSupportedException: ConstructorContainsNullParameterNames when AOT compiled
- [#6038](https://github.com/Megabit/Blazorise/issues/6038): [Bug]: code block not visible on Validations page global options localization
- [#6047](https://github.com/Megabit/Blazorise/issues/6047): [Bug]: RequiredIndicator does not reflect the underlying boolean flag
- [#6040](https://github.com/Megabit/Blazorise/pull/6040): Docs: Adds components parameters to the search results
- [#6018](https://github.com/Megabit/Blazorise/issues/6018): Docs: invalid examples for icons installation
- [#5994](https://github.com/Megabit/Blazorise/issues/5994): Cropper: update references to use latest 2.0 version
- [#6068](https://github.com/Megabit/Blazorise/issues/6068): Notification Service
- [#6056](https://github.com/Megabit/Blazorise/issues/6056): [Bug]: some font awesome icons are being generated with wrong css
- [#6077](https://github.com/Megabit/Blazorise/issues/6077): Icons: add csx build scripts

Enjoy the holidays and happy coding! 🐰🌷

## Feedback

Your feedback is essential to us, and we appreciate your continued support and contributions to Blazorise. If you have any questions, suggestions, or feedback, please feel free to reach out to us on.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise **1.6.x** releases. We encourage all users to upgrade to **1.7.6**.

If you experience any unexpected behavior change in your projects after upgrading to 1.7.6, please file an issue on GitHub.

## Commercial Support

Blazorise is an open-source project that thrives on community contributions and support. To sustain ongoing development and improvements, we offer **commercial licenses** that provide additional benefits while ensuring the project's long-term success.

With a commercial license, you gain access to **premium forum support, private repositories, and exclusive community-licensed themes**. Your support directly contributes to the enhancement of Blazorise and ensures its continuous growth.

To explore commercial licensing options, visit our website at Blazorise Commercial.
