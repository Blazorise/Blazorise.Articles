---
title: Blazorise 2.1.2 - Accessibility and Scheduler Improvements
description: Blazorise 2.1.2 improves MessageService behavior, fixes Scheduler month view rendering, and resolves multiple issues across providers and components.
permalink: /news/release-notes/212
canonical: /news/release-notes/212
image-url: img/v212.jpg
image-title: Blazorise 2.1.2 - Accessibility and Scheduler Improvements
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-05-06
read-time: 2 min
---

# Blazorise 2.1.2 - Accessibility and Scheduler Improvements

Blazorise **2.1.2** continues the 2.1 release cycle with improvements focused on accessibility, component behavior, and UI consistency across multiple providers.

This update resolves several issues affecting MessageService dialogs, Scheduler rendering, validation behavior, and layout interactions.

## Highlights

### MessageService Flicker and Accessibility Improvements

Several improvements were made to the **MessageService** modal dialogs in this release.

A flickering issue that could occur when opening dialogs from inside a **DataGrid** has been resolved, resulting in smoother and more predictable modal rendering behavior during interactive workflows.

This release also includes a refactor of the internal **FocusTrap** implementation used by modal dialogs. The updated behavior improves keyboard navigation, focus management, and Escape key handling, making dialogs more accessible and more reliable for keyboard-only users and assistive technologies.

These improvements provide a more consistent and accessible experience when working with modal-based interactions.

### Scheduler Multi-Day Appointment Fix

The **Scheduler month view** has been improved with proper support for appointments spanning multiple days.

This release adds the missing multi-day span rendering in month view, ensuring appointments are displayed correctly across all affected days. In addition, several drag-and-drop interaction issues were fixed to improve scheduling behavior and overall usability when moving appointments between dates.

---

Blazorise 2.1.2 also includes multiple fixes for validation, keyboard navigation, layout rendering, and provider-specific styling issues across Bootstrap5, Material3, and FluentUI.

## Full Changelog

All changes included in **2.1.2**:

- [#6557](https://github.com/Megabit/Blazorise/issues/6557) Material3 Image Fluid not working
- [#6559](https://github.com/Megabit/Blazorise/issues/6559) Bootstrap5 Alert BackgroundLevel not working
- [#6555](https://github.com/Megabit/Blazorise/issues/6555) Material3 overriding sidebar variables doesn't work
- [#6563](https://github.com/Megabit/Blazorise/issues/6563) Bar: fix keyboard navigation with shift+tab
- [#6568](https://github.com/Megabit/Blazorise/issues/6568) Validation RadioGroup doesn't work as expected
- [#6571](https://github.com/Megabit/Blazorise/issues/6571) RadioGroup Buttons="true" validation always shows error
- [#6575](https://github.com/Megabit/Blazorise/issues/6575) MessageService modal dialogs lack keyboard accessibility
- [#6579](https://github.com/Megabit/Blazorise/issues/6579) MessageService flicker issue
- [#6577](https://github.com/Megabit/Blazorise/issues/6577) FieldHelp missing from fields with validation
- [#6578](https://github.com/Megabit/Blazorise/issues/6578) Autocomplete inside DataGrid EditTemplate does not show dropdown
- [#6583](https://github.com/Megabit/Blazorise/issues/6583) Button and Dropdown button height off by 2px
- [#6574](https://github.com/Megabit/Blazorise/issues/6574) SideMenu collapsed layout and submenu popup issues
- [#6585](https://github.com/Megabit/Blazorise/issues/6585) Scheduler month view drops appointments spanning multiple days

## Upgrading

Blazorise **2.1.2** is a safe update for all **2.1.x** applications.

Simply update your NuGet packages to version **2.1.2**. No migration steps or breaking changes are required.

## Thank you & commercial support

Thank you to everyone who reported issues and provided feedback. These updates help improve the reliability, accessibility, and consistency of the framework across real-world applications.

For commercial licensing and support:  
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps ensure the continued evolution of Blazorise for modern .NET applications.