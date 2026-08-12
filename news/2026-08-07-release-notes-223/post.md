---
title: Blazorise 2.2.3 - Validation, Autocomplete, and Svg Charts Improvements
description: Blazorise 2.2.3 fixes validation on disabled fields, improves Autocomplete keyboard selection, and includes fixes for DatePicker, Svg Charts, and documentation.
permalink: /news/release-notes/223
canonical: /news/release-notes/223
image-url: img/v223.jpg
image-title: Blazorise 2.2.3 - Validation, Autocomplete, and Svg Charts Improvements
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-08-07
read-time: 2 min
---

# Blazorise 2.2.3 - Validation, Autocomplete, and Svg Charts Improvements

Blazorise **2.2.3** is a smaller maintenance release with fixes and improvements across validation, Autocomplete, DatePicker, Svg Charts, and documentation.

This release fixes validation behavior for disabled fields and improves keyboard selection in Autocomplete. It also includes another improvement for Svg Charts, based on feedback from developers using the new charting component.

## Highlights

### Validation on Disabled Fields

Validation behavior has been fixed for disabled fields.

Disabled fields should not take part in validation while they cannot be edited by the user. This update makes validation behave correctly in these cases and avoids showing validation errors for disabled inputs.

### Autocomplete Keyboard Selection

Autocomplete now handles keyboard selection better when checkboxes are used.

When pressing Enter, Autocomplete will select the item when there is a unique match, making keyboard interaction more predictable and easier to use.

### SvgLineSeries Opacity

**Svg Charts** continues to receive smaller improvements based on feedback from developers.

`SvgLineSeries` now supports opacity, giving developers more control over how line series are displayed and making it easier to work with charts that contain multiple overlapping series.

---

Blazorise 2.2.3 also fixes a DatePicker rendering issue and horizontal scrolling in documentation code examples.

## Full Changelog

All changes included in **2.2.3**:

- [#6666](https://github.com/Megabit/Blazorise/issues/6666) DatePicker malformed
- [#6679](https://github.com/Megabit/Blazorise/issues/6679) Documentation Code Display Horizontal Scrolling Issue
- [#6694](https://github.com/Megabit/Blazorise/issues/6694) Proposition to add opacity to SvgLineSeries
- [#6701](https://github.com/Megabit/Blazorise/issues/6701) Validation on disabled fields
- [#6716](https://github.com/Megabit/Blazorise/pull/6716) Autocomplete: select unique checkbox matches on Enter

## Upgrading

Blazorise **2.2.3** is a safe update for all **2.2.x** applications.

Simply update your NuGet packages to version **2.2.3**. No migration steps or breaking changes are required.

## Thank you & commercial support

Thank you to everyone who reported issues and contributed fixes. Community feedback helps us find problems and improve Blazorise with each release.

For commercial licensing and support:  
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps ensure the continued development of Blazorise.