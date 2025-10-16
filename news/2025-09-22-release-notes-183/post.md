---
title: Blazorise 1.8.3 – Maintenance Release
description: Blazorise 1.8.3 is a focused maintenance update. It fixes the license banner condition, improves DataGrid padding, and resolves an inline edit bug-making Blazorise smoother and more reliable.
permalink: /news/release-notes/183
canonical: /news/release-notes/183
image-url: img/v183.png
image-title: Blazorise 1.8.3 – Maintenance Release
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-09-22
read-time: 2 min
---

# Blazorise 1.8.3 – Maintenance Release

Blazorise 1.8.3 is now available! While this is primarily a maintenance release, we went beyond small fixes to ensure a smoother experience for production apps. Alongside targeted DataGrid improvements, we've corrected a license banner condition issue-keeping Blazorise stable and professional for both community and commercial users.

## What's New in 1.8.3

Key fixes and enhancements included in this release:

### Fixed License Banner

We corrected the condition for displaying the license banner, ensuring it only appears when it is supposed to.

In previous builds, the banner could occasionally display under incorrect circumstances, which created confusion for both community and commercial users. With this fix, the banner logic now accurately reflects licensing status, providing a cleaner and more professional presentation in production environments.

### DataGrid Improvements

We adjusted the paddings on edit fields to provide a cleaner and more consistent layout throughout the DataGrid component.

In addition, a bug in inline edit mode that caused an empty line to appear in the table has been fixed, ensuring a smoother and more reliable editing experience.

## Full changelog

Everything that went into 1.8.3:

- [#6221](https://github.com/Megabit/Blazorise/pull/6221): Maintainance: fix the condition to show banner
- [#6226](https://github.com/Megabit/Blazorise/issues/6226): DataGrid: fix paddings on edit fields
- [#6156](https://github.com/Megabit/Blazorise/issues/6156): [Bug]: DataGrid Inline edit mode creates empty line in table

## Upgrading

This update is fully compatible within the 1.8.x series. No breaking changes are expected, but review the fixes above if you depend on specific DataGrid behavior or license banner conditions.

## Thank you & commercial support

Blazorise grows through the support of our community and commercial partners. If you rely on Blazorise, consider our commercial licenses, they support ongoing development and provide benefits like priority support and premium themes.

Explore licensing options here: Blazorise Commercial. Your support directly fuels Blazorise's future.
