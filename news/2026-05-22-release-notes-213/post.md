---
title: Blazorise 2.1.3 - DatePicker Range Improvements
description: Blazorise 2.1.3 improves DatePicker range behavior and includes accessibility and validation fixes across multiple components.
permalink: /news/release-notes/213
canonical: /news/release-notes/213
image-url: img/v213.jpg
image-title: Blazorise 2.1.3 - DatePicker Range Improvements
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-05-22
read-time: 2 min
---

# Blazorise 2.1.3 - DatePicker Range Improvements

Blazorise **2.1.3** is a small maintenance release focused on improving DatePicker behavior, accessibility, and validation consistency across components.

This update resolves several issues affecting range selection, dropdown accessibility, Safari navigation behavior, and validation integration.

## Highlights

### Improved DatePicker Range Selection

The **DatePicker** range mode has been improved to properly visualize and support single-day selection.

Previously, selecting only one day while using range mode did not display correctly. With this update, single-date ranges are now fully supported and visualized correctly, making range mode more flexible for scheduling and filtering scenarios.

### Accessibility Improvements for Dropdown Components

Additional accessibility improvements were made to dropdown components by adding missing `aria-haspopup` and `aria-expanded` attributes to `BarDropdownToggle`.

These updates improve compatibility with assistive technologies and help ensure better keyboard navigation behavior.

---

Blazorise 2.1.3 also includes fixes for Safari navigation behavior and validation handling for Switch components with add-ons.

## Full Changelog

All changes included in **2.1.3**:

- [#6592](https://github.com/Megabit/Blazorise/issues/6592) Date Picker Range doesn't visualize single date
- [#6596](https://github.com/Megabit/Blazorise/issues/6596) Clicking BarDropDownItem To on Safari Mac not working
- [#6599](https://github.com/Megabit/Blazorise/issues/6599) BarDropdownToggle missing aria-haspopup and aria-expanded attributes
- [#6604](https://github.com/Megabit/Blazorise/issues/6604) Problem with validation Switch with add-on

## Upgrading

Blazorise **2.1.3** is a safe update for all **2.1.x** applications.

Simply update your NuGet packages to version **2.1.3**. No migration steps or breaking changes are required.

## Thank you & commercial support

Thank you to everyone who reported issues and helped improve the framework. These smaller maintenance updates continue to improve usability, accessibility, and overall reliability across Blazorise components.

For commercial licensing and support:  
https://blazorise.com/pricing

Your support helps ensure the continued evolution of Blazorise for modern .NET applications.