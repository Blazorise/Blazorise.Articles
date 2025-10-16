---
title: 🐣 Blazorise 1.7.7 – Maintenance Release
description: We're happy to announce the release of Blazorise 1.7.7, a maintenance update that brings important bug fixes and enhancements to ensure a smoother and more stable experience for developers using Blazorise.
permalink: /news/release-notes/177
canonical: /news/release-notes/177
image-url: img/v177.png
image-title: 🐣 Blazorise 1.7.7 – Maintenance Release
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-04-18
read-time: 3 min
---

# 🐣 Blazorise 1.7.7 – Maintenance Release

We're happy to announce the release of Blazorise 1.7.7, a maintenance update that brings important bug fixes and enhancements to ensure a smoother and more stable experience for developers using Blazorise.

While this is a smaller release focused primarily on maintenance, it includes several impactful improvements across components like Video, DataGrid, Check, Autocomplete, and more.

## Key Highlights in 1.7.7

### Video: Bundle JS and CSS as a Single File

Blazorise Video now supports bundling its JavaScript and CSS files into a single file. This enhancement reduces the number of HTTP requests and simplifies deployment. It's especially useful for scenarios where minimizing asset requests is critical.

### DataGrid: Fix OldItem in RowUpdated Callback

We've fixed a long-standing issue where the OldItem in the RowUpdated event was not correctly populated. This fix helps developers compare the updated values with the original ones more reliably.

## DataGrid: Numeric Filters Now Work with 0 in Non-Nullable Types

A bug where numeric filters didn't work correctly when filtering for 0 values in non-nullable fields has been resolved. Now you can expect accurate filtering behavior across all numeric types.

We encourage you to update to version 1.7.7 to benefit from these fixes and improvements. As always, please report any issues or provide feedback to help us continue improving.

## Full Changelog

- [#6069](https://github.com/Megabit/Blazorise/issues/6069): [Bug]: Layout Functionality + Documentation
- [#6079](https://github.com/Megabit/Blazorise/issues/6079): [Bug]: Should add data-popper-reference-hidden when dropdown is invisible
- [#3162](https://github.com/Megabit/Blazorise/issues/3162): bootstrap 5 + badge/icon
- [#6101](https://github.com/Megabit/Blazorise/issues/6101): DataGrid: fix the OldItem for RowUpdated callback
- [#5955](https://github.com/Megabit/Blazorise/issues/5955): Check: readonly should prevent the state change
- [#6099](https://github.com/Megabit/Blazorise/issues/6099): ToastProvider: propagate Class and Style to Toaster
- [#5909](https://github.com/Megabit/Blazorise/issues/5909): [Bug]: Autocomplete mulitiple selection mode disabled/enabled rendering issue
- [#5935](https://github.com/Megabit/Blazorise/issues/5935): DatePicker: update of Max value
- [#5852](https://github.com/Megabit/Blazorise/issues/5852): QRCode: adding the option to generate text
- [#6117](https://github.com/Megabit/Blazorise/issues/6117): [Bug]: ThemeGenerator produces invalid css for ButtonOptions.DisabledOpacity
- [#6120](https://github.com/Megabit/Blazorise/issues/6120): Docs: fix generator
- [#6127](https://github.com/Megabit/Blazorise/issues/6127): [Bug]: Checked Checkboxes in Material do not follow Theme colors
- [#6121](https://github.com/Megabit/Blazorise/issues/6121): [Bug]: DataGrid numeric filters do not filter using 0 for non-nullable types
- [#6123](https://github.com/Megabit/Blazorise/pull/6123): Autocomplete: autogenerate ElementId if null
- [#6124](https://github.com/Megabit/Blazorise/pull/6124): Video: bundle JS and CSS files as single file

## Feedback

Your feedback is essential to us, and we appreciate your continued support and contributions to Blazorise. If you have any questions, suggestions, or feedback, please feel free to reach out to us on.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise 1.6.x releases. We encourage all users to upgrade to 1.7.7.

If you experience any unexpected behavior change in your projects after upgrading to 1.7.7, please file an issue on GitHub.

## Commercial Support

Blazorise is an open-source project that thrives on community contributions and support. To sustain ongoing development and improvements, we offer commercial licenses that provide additional benefits while ensuring the project's long-term success.

With a commercial license, you gain access to premium forum support, private repositories, and exclusive community-licensed themes. Your support directly contributes to the enhancement of Blazorise and ensures its continuous growth.

To explore commercial licensing options, visit our website at Blazorise Commercial.
