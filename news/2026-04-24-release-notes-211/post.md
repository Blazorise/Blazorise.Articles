---
title: Blazorise 2.1.1 - Stability Update and Package Maintenance
description: Blazorise 2.1.1 resolves a critical Bootstrap upgrade issue, updates dependencies, and introduces synchronized charts along with several fixes.
permalink: /news/release-notes/211
canonical: /news/release-notes/211
image-url: img/v211.jpg
image-title: Blazorise 2.1.1 - Stability Update and Package Maintenance
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-04-24
read-time: 2 min
---

# Blazorise 2.1.1 - Stability Update and Package Maintenance

Blazorise **2.1.1** is a follow-up patch release focused on stability and maintenance after the 2.1 launch.

This update resolves a critical issue affecting Bootstrap users, refreshes internal dependencies, and includes several fixes across components and providers.

## Highlights

### Fix for Bootstrap 2.0 → 2.1 Upgrade Issue

A critical issue was identified where upgrading **Blazorise.Bootstrap5** from version 2.0 to 2.1 could cause the build process to hang. This release resolves the problem and ensures a smooth upgrade path for existing applications.

### Dependency and Package Updates

All internal packages and dependencies have been updated to their latest stable versions. These updates improve compatibility, reduce potential issues, and keep the framework aligned with the latest ecosystem changes.

### Synchronized Charts

This release also introduces support for **synchronized zoom charts**, allowing multiple charts to share interactions such as hover, zoom, and selection states. This enables more advanced data visualization scenarios.

---

Blazorise 2.1.1 also includes fixes across DataGrid, Tooltip, RadioGroup, and multiple UI providers, improving overall reliability.

## Full Changelog

All changes included in **2.1.1**:

- [#6532](https://github.com/Megabit/Blazorise/issues/6532) RadioGroup not behaving as expected with FluentUI
- [#6007](https://github.com/Megabit/Blazorise/issues/6007) Tooltip dynamic text
- [#6536](https://github.com/Megabit/Blazorise/issues/6536) Bootstrap5 upgrade from 2.0 to 2.1 causes build to hang
- [#6078](https://github.com/Megabit/Blazorise/issues/6078) Synchronized charts
- [#6543](https://github.com/Megabit/Blazorise/pull/6543) Maintenance: update packages to latest versions
- [#6544](https://github.com/Megabit/Blazorise/issues/6544) DataGrid Columns Select Column Multiple example causes exception
- [#6550](https://github.com/Megabit/Blazorise/issues/6550) FluentUI card header rounded corners overridden in dark mode
- [#6554](https://github.com/Megabit/Blazorise/issues/6554) Material3 Outline button hover effect missing
- [#6552](https://github.com/Megabit/Blazorise/issues/6552) FluentUI2 float utilities not working

## Upgrading

Blazorise **2.1.1** is a safe update for all **2.1.x** applications.

If you are upgrading from **2.0.x**, make sure to use this version to avoid the Bootstrap build issue.

Simply update your NuGet packages to version **2.1.1**. No additional migration steps are required.

## Thank you & commercial support

Thank you to everyone who reported issues and helped improve the framework. Each update helps make Blazorise more stable and reliable for production use.

For commercial licensing and support:  
https://blazorise.com/pricing

Your support helps ensure the continued evolution of Blazorise.