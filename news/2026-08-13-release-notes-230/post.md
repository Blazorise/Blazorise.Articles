---
title: Announcing Blazorise 2.3 - Jadro
description: Blazorise 2.3 introduces Reporting, CodeEditor, first-party DatePicker and TimePicker components, and several new reusable UI building blocks.
permalink: /news/release-notes/230
canonical: /news/release-notes/230
image-url: img/v230.jpg
image-title: Announcing Blazorise 2.3 - Jadro
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-07-14
read-time: 10 min
pinned: true
---

# Blazorise 2.3 - Release Notes

Blazorise 2.3, codenamed **Jadro**, is named after the Jadro River in Solin, Croatia.

This release started with a simple idea: *build a Reporting solution for Blazorise*. Once work began, it quickly became clear that a report designer needed several things that did not yet exist in the framework. Instead of building them only for Reporting, we turned them into reusable components that everyone can use.

That became the main story of Blazorise 2.3. Reporting is the largest addition, but the work behind it also gave us DockLayout, ContextMenu, PropertyGrid, and PDF generation. The release also introduces CodeEditor and Resizer, replaces the Flatpickr-based DatePicker and TimePicker with our own Blazor and C# implementation, and improves Gantt, Scheduler, PdfViewer, and styling.

## Key Blazorise 2.3 Highlights

Here are some of the most important additions and updates:

- **Reporting**: Create and design business reports, connect them to different data sources, and preview them as HTML or PDF.
- **Reusable Reporting Components**: DockLayout, ContextMenu, PropertyGrid, and Blazorise.Pdf are available as standalone components.
- **CodeEditor**: Build source-code and application-specific editors with completion, validation, diagnostics, and formatting.
- **DatePicker and TimePicker**: Rebuilt with Blazor and C#, removing the Flatpickr dependency while keeping the existing public APIs.
- **Gantt and Scheduler**: Weekly Gantt timelines, milestones, custom Scheduler fields, and custom appointment editors.
- **Layout and Styling**: A new Resizer component, shorter CSS value syntax, and support for custom CSS colors.

## Upgrading from 2.2.x to 2.3

Update all **Blazorise.*** package references to **2.3**.

```cs
<PackageVersion Include="Blazorise" Version="2.2.*" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.2.*" />
```

Change them to:

```cs
<PackageVersion Include="Blazorise" Version="2.3.0" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.3.0" />
```

## Reporting and the Components It Needed

Reporting is one of the largest features we have built for Blazorise. The goal was to provide a reporting system that felt like part of the framework, with a visual designer and enough flexibility for common business reports.

Reports use a familiar band-based model and can work with application objects, tabular data, CSV files, and SQL sources. The expression system covers formulas, totals, grouping, and formatting, while reports can be previewed as HTML or PDF.

The designer focuses on the tasks users expect from a visual reporting tool. You can drag fields and report elements onto the page, move and resize them, edit their properties, align items, and undo changes. Report definitions and designer state can also be saved and loaded.

A large amount of work went into the parts that are less visible but important in real applications. The designer keeps its layout and editing state when switching between Design and Preview, longer operations can be cancelled, older preview results cannot replace newer ones, and larger reports refresh more efficiently. Accessibility, localization, theming, and error handling were also brought in line with the rest of Blazorise.

### DockLayout

The first missing piece was the designer workspace. Reporting needed panels that users could move, resize, group into tabs, hide, and restore.

That work became **DockLayout**, a standalone component for building IDE-style and user-configurable layouts. Applications can create horizontal and vertical splits, dock panes by dragging them, and save the layout so it can be restored later.

DockLayout is used by the Reporting designer, but it can also be used for dashboards, admin tools, editors, and other applications that need a flexible workspace.

### ContextMenu

The designer also needed actions close to the object being edited, which led to the new **ContextMenu** component.

ContextMenu covers the common menu cases, including nested items, checked items, groups, keyboard navigation, and opening from either a target element or application code. Focus handling, accessibility, and menu positioning are built in, so it behaves like a complete Blazorise component rather than a Reporting-only helper.

### PropertyGrid

Once a report element was selected, users needed a clear way to inspect and change its settings. That became the new **PropertyGrid** component.

PropertyGrid can be defined manually or generated from a schema. It provides typed editors, grouping, search, descriptions, templates, and actions without forcing applications to build a separate form for every object type.

Reporting uses PropertyGrid for its designer, but the component can also be used for settings pages, configuration tools, admin screens, and other object-editing scenarios.

### PDF Generation

Reporting also needed PDF preview and export, which led to the new **Blazorise.Pdf** extension.

PDF documents can be created with Razor components or fluent builders. The API covers the main building blocks needed for business documents, including text, images, shapes, and tables, with support for Unicode and custom fonts.

The generator also includes cancellation, diagnostics, resource limits, and safer loading of remote images and fonts. Reporting uses it for preview and download, but it can be used independently anywhere an application needs to create PDF files.

### PdfViewer Continuous Scrolling

To make longer reports and documents easier to read, `PdfViewer` now has a continuous scrolling mode.

Set `Mode="PdfViewerMode.Continuous"` to show all pages in one vertical view. Page tracking and toolbar navigation stay synchronized as the user scrolls.

The Reporting work also led to smaller improvements in the Blazorise core, including a lighter base class for styled components and better support for global pointer interactions. These changes are mostly internal, but they help the new components follow the same rules as the rest of the framework.

## CodeEditor

The goal behind **CodeEditor** was not only to edit common programming languages. We also wanted it to work for configuration files, formulas, scripts, and languages defined by the application itself.

CodeEditor provides the editor while leaving language rules under application control. Applications can add their own completion, diagnostics, formatting, validation, snippets, and syntax rules through strongly typed APIs.

It also supports different value update modes, so changes can be applied immediately, after editing, or with a delay. Multiple editors can run independently on the same page, and pending changes are kept when focus moves or the component is removed.

Explore the available options and examples in the [CodeEditor documentation](docs/extensions/code-editor).

## DatePicker and TimePicker

Another large part of this release is the complete rewrite of **DatePicker** and **TimePicker**.

For years, both components relied on the Flatpickr JavaScript library. It served us well, but it became harder to maintain and limited how much control we had over fixes and new features. We decided to replace it with our own implementation built with Blazor and C#.

The rewrite keeps the existing public APIs and the behavior applications already depend on. At the same time, it gives us direct control over keyboard navigation, accessibility, popup placement, month and week navigation, and provider styling.

The most important benefit is long-term ownership. We can now improve these components without waiting for changes in an external library or working around its limits.

Explore the available options and examples in the [DatePicker documentation](docs/components/date-picker) and [TimePicker documentation](docs/components/time-picker).

## Planning and Scheduling

We also returned to Gantt and Scheduler, with changes focused on planning detail and application-specific data.

### Gantt Improvements

The **Gantt Year View** can now use weekly columns when a month-based view is too broad. The existing monthly scale remains the default, while `TimelineScale="GanttYearViewTimelineScale.Week"` shows one column per week across the year.

Gantt also supports **milestones** for important dates such as releases, approvals, and deadlines. They can be placed at exact dates and times, styled or templated, and included when the visible timeline range is calculated.

### Scheduler Improvements

Scheduler appointments often contain more than the built-in title, dates, and description. The Add/Edit Appointment dialog can now include editors for custom model fields through `SchedulerColumns` and `SchedulerColumn`.

Applications can also replace the editor used for a built-in field while keeping the Scheduler's normal validation, state handling, and save flow. Custom appointment templates and improved background styling make it possible to show those values directly in the calendar.

## Layout and Styling

The remaining changes focus on smaller building blocks that make layouts and styling easier to control.

### Resizer

The new **Resizer** component adds a resizable boundary to an existing panel, sidebar, or other element without requiring a full docking layout.

It works with pointer and keyboard input, can resize one or both sides of a boundary, and supports size limits, external targets, custom thickness, and resize events. The handle can stay transparent or show a provider-specific gutter when a visible grip is needed.

### Fluent CSS Value Shorthands

CSS values can now be written with shorter numeric extension methods:

```razor
<Div Width="20.Rem().Min(12).Max(30)"
     Height="@(Height.Calc( "100vh - 4rem" ))"
     Gap="1.Rem()"
     TextSize="1.25.Rem()" />
```

Existing forms such as `Width.Rem(8)` and `Gap.Rem(1)` remain supported, so applications can adopt the shorter syntax gradually.

### Custom CSS Colors

`Color`, `TextColor`, `Background`, and `BorderColor` now accept custom CSS values in addition to the existing theme colors.

This includes common CSS color formats and CSS variables, either passed as strings or created with the new `CssColor` helpers. The same color values work across regular components, border utilities, and SVG Charts.

## Final Notes

Blazorise 2.3 started with Reporting, but it became much more than one new extension.

Reporting needed a workspace, so we built DockLayout. It needed object editing, so PropertyGrid became a standalone component. It needed actions close to the selected item, so ContextMenu moved into the core. It needed document output, so PDF generation became its own extension.

That same approach continued across the release. We replaced a dependency we no longer wanted to rely on, added new building blocks, and improved existing components based on problems found in real applications.

Many of these changes came from community feedback, customer projects, support requests, and our own work with Blazorise. Thank you to everyone who reported issues, suggested features, tested previews, and contributed to the project.

If you need help integrating Blazorise into your application or need a custom component for your project, visit our [custom development services](https://blazorise.com/custom-work).

We hope Blazorise 2.3 gives you more ways to build reporting tools, editors, planning systems, and business applications. Thank you for continuing to use and support Blazorise.
