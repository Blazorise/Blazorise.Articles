---
title: Blazorise 2.2.1 - Accessibility and DataGrid Improvements
description: Blazorise 2.2.1 improves MessageService accessibility, resolves DataGrid rapid editing issues, and includes fixes across charts, navigation, providers, and components.
permalink: /news/release-notes/221
canonical: /news/release-notes/221
image-url: img/v221.jpg
image-title: Blazorise 2.2.1 - Accessibility and DataGrid Improvements
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-06-16
read-time: 2 min
---

# Blazorise 2.2.1 - Accessibility and DataGrid Improvements

Blazorise **2.2.1** is the first maintenance release following the 2.2 launch, focused on accessibility improvements, DataGrid reliability, and overall component stability across providers.

This update addresses several issues reported by the community while continuing to improve usability and consistency throughout the framework.

## Highlights

### MessageService Accessibility and Reliability Improvements

An issue affecting the chaining of multiple message dialogs within the same asynchronous flow has been resolved, ensuring dialogs open and close in the correct order without unexpected behavior. We also fixed several animation state issues that could result in inconsistent dialog transitions.

In addition, the internal **FocusTrap** implementation has been improved to provide more reliable keyboard navigation, maintain focus within active dialogs, and support dismissal using the Escape key. Together, these changes improve both accessibility and overall dialog reliability.

### DataGrid Batch and Rapid Editing Improvements

The **DataGrid** editing experience has been refined for both **Batch Editing** and **Rapid Editing** scenarios.

This release improves cell editing behavior and the way edited values are tracked and saved, resulting in a more predictable editing workflow. Users can now move through editable cells more reliably while ensuring changes are correctly preserved and committed during editing operations.

### Charts.Svg Automatic Axis Label Thinning

The **Charts.Svg** component now supports automatic axis-label thinning, similar to the behavior available in the Chart.js-based chart components.

When large numbers of labels are displayed, the chart can automatically reduce the number of visible axis labels, improving readability without requiring manual configuration.

---

Blazorise 2.2.1 also includes fixes for navigation components, ColorPicker updates, Tailwind styling behavior, MCP connectivity, and several provider-specific rendering issues.

## Full Changelog

All changes included in **2.2.1**:

- [#6620](https://github.com/Megabit/Blazorise/issues/6620) Bar: hide vertical scrollbar while allowing to scroll
- [#6618](https://github.com/Megabit/Blazorise/issues/6618) Blazorise.Tailwind applies global typography to the bare p selector, overriding host styles
- [#6621](https://github.com/Megabit/Blazorise/issues/6621) Claude fails to connect to Blazorise MCP
- [#6626](https://github.com/Megabit/Blazorise/issues/6626) MessageService modal dialogs lack keyboard accessibility: no focus trap and no Escape key dismiss
- [#6628](https://github.com/Megabit/Blazorise/issues/6628) BarDropdown: fix the closing of current dropdown menu
- [#6625](https://github.com/Megabit/Blazorise/issues/6625) DataGrid Batch and Rapid Editing - bug
- [#6616](https://github.com/Megabit/Blazorise/issues/6616) Cursor on mouse hover over tab incorrect after update to 2.2
- [#6615](https://github.com/Megabit/Blazorise/issues/6615) Textcolor on buttons changed to black in 2.2
- [#6633](https://github.com/Megabit/Blazorise/issues/6633) ColorPicker: fix update of Value parameter
- [#6622](https://github.com/Megabit/Blazorise/issues/6622) Charts.Svg - Automatic axis-label thinning (auto-skip / max-ticks) like the Chart.js-based Blazorise.Charts

## Upgrading

Blazorise **2.2.1** is a safe update for all **2.2.x** applications.

Simply update your NuGet packages to version **2.2.1**. No migration steps or breaking changes are required.

## Thank you & commercial support

Thank you to everyone who reported issues and provided feedback. These maintenance releases help improve accessibility, reliability, and overall user experience across the framework.

For commercial licensing and support:  
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps ensure the continued evolution of Blazorise for modern .NET applications.