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

As development progressed, it became clear that the report designer required several advanced UI capabilities that didn't yet exist in Blazorise. Rather than implementing them only for Reporting, we decided to build them as reusable components that could benefit the entire framework. This work resulted in `DockLayout`, `ContextMenu`, `PropertyGrid`, and `Blazorise.Pdf`, all of which can now be used independently.

The Reporting extension now provides a declarative, band-based reporting system with support for headers, footers, detail and group bands, tables, images, shapes, subreports, expressions, aggregates, and multiple data sources including objects, `DataSet`, `DataTable`, CSV, and SQL.

The built-in designer supports drag-and-drop editing, rulers, grid snapping, alignment tools, undo/redo, keyboard shortcuts, property editing, and report serialization. Reports can be previewed as HTML or PDF, and rendering has been optimized for larger reports through targeted refreshes, cached pagination, and reduced processing overhead.

Throughout development we also spent considerable time refining the overall experience. The designer now preserves its state more reliably while switching between Design and Preview, asynchronous operations are more robust, accessibility and localization have been improved, and the public APIs were polished to better match the rest of Blazorise.

#### DockLayout

One of the first supporting components created during Reporting development was **DockLayout**.

The report designer required an IDE-style workspace with movable and dockable panels, so instead of building that functionality specifically for Reporting, we turned it into a standalone component.

DockLayout supports resizable panes, horizontal and vertical splits, tabbed layouts, drag-and-drop docking, auto-hide panels, pinning, flyout panes, and layout persistence. During development we also refined pane management, layout persistence, accessibility, localization, and rendering performance, making the component more reliable for real-world applications.

#### ContextMenu

The report designer also needed a flexible context menu system, which led to the new **ContextMenu** component.

What started as an internal requirement quickly became a fully featured menu component supporting nested menus, groups, headers, checkable items, toolbar layouts, and programmatic control. Along the way we refined keyboard navigation, accessibility, focus handling, lifecycle events, and provider styling so it behaves consistently with the rest of Blazorise.

### PropertyGrid

The Reporting designer also needed a flexible way to edit properties, which led to the new **PropertyGrid** component.

Instead of building a property editor exclusively for Reporting, we created a reusable PropertyGrid that can be used across any Blazorise application. It supports both **manual** and **schema-driven** configuration, making it suitable for everything from simple settings panels to complex object editors.

PropertyGrid includes typed editors, grouping, alphabetical sorting, search, descriptions, contextual help, actions, templates, constrained scrolling, and accessibility support. Each Blazorise UI provider implements its own styling to ensure the component integrates naturally with the active design system.

Reporting now uses `PropertyGridView` instead of its original internal property editor. Property schemas are cached and only rebuilt when necessary, improving interaction performance while preserving scroll position during editing.

#### PDF

Reporting also required reliable document generation, which resulted in the new **Blazorise.Pdf** extension.

The library provides a declarative API for creating PDF documents directly from Blazor... We also invested time in making PDF generation more reliable, with better diagnostics, cancellation support, safer resource loading, and a more consistent API.

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

### Resizer (New)

The new **`Resizer`** component provides a simple way to add **resizable boundaries** to existing elements without requiring a predefined layout or container.

It supports both **pointer and keyboard interaction**, configurable minimum and maximum size constraints, external resize targets, CSS custom properties, and coordinated resizing of elements on both sides of the boundary. You can also customize the resize handle's position, thickness, and appearance, while listening for resize events to react to size changes in your application.

An optional provider-specific gutter can also be displayed to give users a more visible resize handle when needed.

### Custom CSS Colors

Blazorise components now support **custom CSS colors**, making it easier to use your own design system alongside the built-in theme colors.

Properties such as **`Color`**, **`TextColor`**, **`Background`**, and **`BorderColor`** now accept standard CSS color values, including hexadecimal colors, `rgb()`, `rgba()`, `hsl()`, and CSS variables. You can assign colors directly as strings or create them using the new `CssColor` helpers.

This support is available consistently across standard Blazorise components, border utilities, and **SVG Charts**, while existing contextual theme colors continue to work exactly as before.

### DatePicker and TimePicker

One of the biggest improvements in this release is a complete rewrite of **DatePicker** and **TimePicker**.

For many years these components relied on the **Flatpickr** JavaScript library. While it served us well, it gradually became harder to maintain and extend as the rest of Blazorise continued to evolve. Rather than continuing to depend on an external library, we decided to replace it with a **first-party implementation built with Blazor and C#**.

The new implementation preserves the existing public APIs, making migration straightforward while giving us full control over future development. It also introduces several new capabilities, including improved keyboard navigation, better accessibility, adaptive popup positioning, enhanced month and week navigation, and context-aware actions such as **"This month"** and **"This week"**.

Owning the entire implementation means we can continue improving DatePicker and TimePicker without being limited by an external dependency, making these components a stronger foundation for future releases.

Explore the available options and examples in the [DatePicker documentation](docs/components/date-picker) and [TimePicker documentation](docs/components/time-picker).

### CodeEditor (New)

The original goal behind **CodeEditor** wasn't just to build another source code editor. We wanted a component that could also be used for **domain-specific editors**, configuration files, scripting languages, formulas, and other application-specific editing scenarios.

Instead of imposing language rules or editor behavior, CodeEditor provides the infrastructure while leaving the editing experience under your control. Applications can define their own syntax, completion, formatting, validation, and diagnostics through strongly typed APIs.

The component includes two-way binding, configurable languages and themes, code completion, snippet insertion, formatting, keyboard shortcuts, selection management, and programmatic control. It also supports **immediate, deferred, and debounced** value updates, allowing you to choose the editing experience that best fits your application.

Multiple editor instances can run independently on the same page, while pending changes are safely preserved during focus changes or component disposal.

Explore the available options and examples in the [CodeEditor documentation](docs/extensions/code-editor).

## Final Notes


## Goodbye
