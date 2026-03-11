---
title: Blazorise 2.0.2 - Accessibility and Stability Improvements
description: Blazorise 2.0.2 focuses on critical stability fixes, improved accessibility, better keyboard navigation, and several DataGrid and Tailwind theming corrections.
permalink: /news/release-notes/202
canonical: /news/release-notes/202
image-url: img/v202.jpg
image-title: Blazorise 2.0.2 - Accessibility and Stability Improvements
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-03-06
read-time: 2 min
---

# Blazorise 2.0.2 - Accessibility and Stability Improvements

Blazorise **2.0.2** continues the stabilization of the 2.0 platform with a strong focus on reliability, accessibility, and smoother component interaction across the framework. Following the initial 2.0 release and the first stabilization patch, this update addresses several issues reported by the community while improving usability across key UI components.

This release places special attention on **accessibility and keyboard navigation**, particularly within dropdown and menu components. These improvements ensure that users navigating applications with keyboards or assistive technologies experience more predictable and standards‑compliant behavior. Several ARIA attribute fixes and navigation improvements help bring menu components closer to full accessibility compliance.

## Highlights

### Critical Fix for InsufficientExecutionStackException

One of the most important fixes in this release addresses an issue that could trigger **InsufficientExecutionStackException** in certain scenarios. This issue had the potential to escalate into memory-related exceptions during complex rendering flows. Version 2.0.2 resolves this problem and introduces safeguards that prevent recursive execution paths from exhausting the stack, improving the overall stability of applications built with Blazorise.

### Accessibility and Keyboard Navigation Improvements

Accessibility continues to be a core priority for the framework. In this release, multiple improvements were made to **dropdown menus, navigation components, and menu structures** to enhance keyboard navigation and ARIA support. These updates improve usability for keyboard-only users and assistive technologies while also aligning component behavior with modern accessibility expectations.

Additional fixes improve the handling of `aria-current` attributes in navigation bars and refine keyboard interactions inside dropdown components, creating a more consistent navigation experience across the framework.

---

Blazorise 2.0.2 also includes several fixes affecting DataGrid filtering templates, multi-select behavior, file picker integration, and Tailwind visual rendering, ensuring components behave correctly across different styling providers.

## Full Changelog

All fixes included in **2.0.2**:

- [#6427](https://github.com/Megabit/Blazorise/issues/6427) Blazorise InsufficientExecutionStackException
- [#6430](https://github.com/Megabit/Blazorise/issues/6430) Problem with NumericPicker and DatePicker used in DataGrid FilterTemplate
- [#6432](https://github.com/Megabit/Blazorise/issues/6432) BarDropdown: fix accessibility with keyboard navigation
- [#6434](https://github.com/Megabit/Blazorise/issues/6434) Nav Bar Does Not Set aria-current attribute
- [#6436](https://github.com/Megabit/Blazorise/issues/6436) FilePicker invalid fileInput.js error
- [#6438](https://github.com/Megabit/Blazorise/issues/6438) DataGridMultiSelectColumn - Checkbox click does nothing
- [#6442](https://github.com/Megabit/Blazorise/issues/6442) Accessibility improvements on menu components
- [#6445](https://github.com/Megabit/Blazorise/issues/6445) Button effect in Tailwind theming not working
- [#6444](https://github.com/Megabit/Blazorise/issues/6444) DataGrid Pager not showing properly for Tailwind

## Upgrading

Blazorise **2.0.2** is a safe and straightforward upgrade for all **2.0.x** applications.

Simply update your NuGet packages to version **2.0.2**. No breaking changes or migration steps are required.

## Thank you & commercial support

Every patch release helps make Blazorise stronger, more stable, and more production‑ready. Community feedback, issue reports, and contributions are essential to maintaining the quality of the framework.

If your organization relies on Blazorise for professional or enterprise applications, consider supporting its continued development through a commercial license.

Explore our commercial licensing options here:  
[Blazorise Commercial](https://blazorise.com/pricing "Link to Blazorise Commercial")

Your support helps ensure the continued evolution of Blazorise for developers and teams building modern .NET applications.