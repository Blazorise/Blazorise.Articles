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

### Gantt Milestones

The **Gantt** component now supports **milestones**, making it easier to highlight important dates and events alongside your project timeline.

Milestones can be placed at **exact dates and times**, customized through templates and styling, and optionally included when automatically calculating the visible timeline range. This makes it simple to call out key project events such as releases, deadlines, approvals, or other important checkpoints without representing them as regular tasks.

### Scheduler Custom Fields

The **Scheduler** now offers much greater flexibility when customizing the **Add/Edit Appointment** dialog.

Using the new **`SchedulerColumns`** and **`SchedulerColumn`** components, you can add editors for your own appointment model properties, making it easy to capture application-specific information such as colors, categories, locations, or any other custom fields. These values are automatically loaded and saved as part of the standard scheduler editing workflow.

Built-in appointment fields such as **Title**, **Start**, **End**, **AllDay**, **Description**, and **RecurrenceRule** can also be replaced with your own editor templates. This allows you to fully customize the editing experience while continuing to use the Scheduler's built-in state management, validation, and save logic.

In addition, Scheduler appointments now support **custom display templates** and improved styling, making it possible to visually reflect custom properties such as appointment colors directly within the calendar.

### PdfViewer Continuous Scrolling

**PdfViewer** now supports **continuous scrolling**, allowing documents to be viewed as a single vertically scrollable document instead of one page at a time.

By setting `Mode="PdfViewerMode.Continuous"`, users can scroll naturally through all pages while the viewer keeps the current page, toolbar navigation, and page tracking synchronized. This provides a more familiar reading experience for longer documents while preserving the existing navigation features.

## Final Notes


## Goodbye
