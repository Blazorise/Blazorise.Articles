---
title: Announcing Blazorise 2.3 - Jadro
description: Blazorise 2.3, codenamed Jadro, is named after one of the most powerful rivers in Croatia, originating beneath the highest mountain in Croatia.
permalink: /news/release-notes/230
canonical: /news/release-notes/230
image-url: img/v230.jpg
image-title: Announcing Blazorise 2.3 - Jadro
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-07-14
read-time: 12 min
pinned: true
---

# Blazorise 2.3 - Release Notes



## Key Blazorise 2.3 Highlights

Here are some of the most notable additions and updates:

- **Gantt Year View**: Added support for weekly timelines.

## Upgrading from 2.2.x to 2.3

Upgrading your application is simple:

Update all **Blazorise.*** package references to **2.3**.

```cs
<PackageVersion Include="Blazorise" Version="2.2.*" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.2.*" />
```

Change to:

```cs
<PackageVersion Include="Blazorise" Version="2.3.0" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.3.0" />
```

## New Features & Enhancements

### Gantt Year View Improvements

The **Gantt Year View** now supports **weekly timelines**, making it easier to plan and review projects at a finer level of detail across an entire year.

By default, the Year view continues to display **monthly columns**, preserving the existing behavior. When more detailed planning is needed, you can switch to **weekly columns** by setting the new `TimelineScale` parameter to `Week`.

This provides a more granular view of long-running projects while keeping the familiar Year view layout, making it easier to visualize schedules, milestones, and task progress throughout the year.

## Final Notes


## Goodbye
