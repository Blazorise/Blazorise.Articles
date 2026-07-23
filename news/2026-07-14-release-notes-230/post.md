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

## New Features

### Reporting

Reporting is one of the largest additions to Blazorise. The original goal was to build a reporting solution that felt like a natural part of the framework, with a visual designer, flexible layouts, and support for common business reporting scenarios.

As development progressed, it became clear that the report designer required several advanced UI capabilities that didn't yet exist in Blazorise. Rather than implementing them only for Reporting, we decided to build them as reusable components that could benefit the entire framework.

The Reporting extension now provides a declarative, band-based reporting system with support for headers, footers, detail and group bands, tables, images, shapes, subreports, expressions, aggregates, and multiple data sources including objects, `DataSet`, `DataTable`, CSV, and SQL.

The built-in designer supports drag-and-drop editing, rulers, grid snapping, alignment tools, undo/redo, keyboard shortcuts, property editing, and report serialization. Reports can be previewed as HTML or PDF, and rendering has been optimized for larger reports through targeted refreshes, cached pagination, and reduced processing overhead.

#### DockLayout

One of the first supporting components created during Reporting development was **DockLayout**.

The report designer required an IDE-style workspace with movable and dockable panels, so instead of building that functionality specifically for Reporting, we turned it into a standalone component.

DockLayout supports resizable panes, horizontal and vertical splits, tabbed layouts, drag-and-drop docking, auto-hide panels, pinning, flyout panes, and layout persistence. Although it powers the Reporting designer, it can also be used independently in applications that require complex, customizable workspaces.

#### ContextMenu

The report designer also needed a flexible context menu system, which led to the new **ContextMenu** component.

What started as an internal requirement quickly became a fully featured menu component supporting nested menus, groups, headers, checkable items, toolbar layouts, programmatic control, lifecycle events, and automatic positioning. Like DockLayout, it is available as a standalone component for any Blazorise application.

#### PDF Generation

Reporting also required reliable document generation, which resulted in the new **Blazorise.Pdf** extension.

The library provides a declarative API for creating PDF documents directly from Blazor, with support for pages, text, images, tables, shapes, custom fonts, margins, borders, colors, and Unicode text. Reports use this PDF generator for export and preview, with generated documents displayed through the existing **PdfViewer** component.

#### Core Improvements

Building Reporting also led to several improvements in the Blazorise core.

A new lightweight `BaseStyledComponent` was introduced to simplify component development, document observation was extended to better support global pointer interactions, and new provider styling was added for Reporting, DockLayout, and ContextMenu. Although these changes are mostly internal, they provide a stronger foundation for future components.

## Enhancements

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

### Fluent CSS Value Shorthands

Working with CSS values in C# is now more concise thanks to new **Fluent CSS value shorthands**.

Instead of using helper methods such as `Width.Rem(8)` or `Gap.Rem(1)`, you can now write values more naturally using extension methods like `8.Rem()`, `50.Percent()`, or `1.25.Rem()`. The existing APIs remain fully supported, so you can adopt the new syntax at your own pace.

```razor
<Div Width="8.Rem()"
     Height="50.Percent()"
     Gap="1.Rem()"
     TextSize="1.25.Rem()" />
```

Sizing values can also be extended with **`Min`** and **`Max`** constraints, making it easy to express responsive sizing in a fluent way.

```razor
<Div Width="20.Rem().Min(12).Max(30)" />
```

In addition, sizing builders now support **percentage-based** and **calculated (`calc`)** values, providing greater flexibility when defining layouts directly in C#.

```razor
<Div Width="Width.Percent(50)"
     Height="@(Height.Calc("100vh - 4rem"))" />
```

### ResizeHandle (New)

A new **`ResizeHandle`** component makes it easy to add **resizable layouts** to panels, sidebars, `Bar` components, and other UI elements.

The component supports both **pointer and keyboard interaction**, along with configurable minimum and maximum size constraints, external resize targets, CSS custom properties, and coordinated resizing of elements on both sides of the handle. This makes it simple to build flexible, user-adjustable layouts without implementing custom resize logic.

By default, resize handles are transparent, but you can optionally display a provider-specific gutter and grip using `ShowGutter`.

```razor
<ResizeHandle ShowGutter />
```

This provides a consistent and reusable way to add resizing behavior across your Blazorise applications.

## Final Notes


## Goodbye
