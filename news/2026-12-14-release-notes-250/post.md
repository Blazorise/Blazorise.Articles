---
title: Announcing Blazorise 2.5 - Bura
description: Blazorise 2.5 focuses on improving existing components, replacing older dependencies, refreshing UI providers, and making everyday interactions more reliable.
permalink: /news/release-notes/250
canonical: /news/release-notes/250
image-url: img/v250.jpg
image-title: Announcing Blazorise 2.5 - Bura
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-12-14
read-time: 12 min
pinned: true
---

# Blazorise 2.5 - Release Notes

Some text here

{% youtube lN_MSyrq6-U %}

## Key Blazorise 2.5 Highlights

Here are the changes that best represent this release:

- **Theming**: heme Sharing Across Render Modes

## Upgrading from 2.4.x to 2.5

Update all **Blazorise.*** package references to **2.5**.

```cs
<PackageVersion Include="Blazorise" Version="2.4.*" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.4.*" />
```

Change them to:

```cs
<PackageVersion Include="Blazorise" Version="2.5.0" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.5.0" />
```

### Theme Sharing Across Render Modes

Managing themes in Blazor Web Apps is now easier, especially when working with different render modes.

Previously, applications often needed to wrap each interactive root in a separate `ThemeProvider` to make theme settings available. With the new `AddBlazoriseTheme` registration, themes can now be shared across render mode boundaries, reducing setup and keeping the appearance consistent throughout the application.

`ThemeProvider` can also use the registered theme without requiring an explicit `Theme` parameter. When theme settings change, calling `ThemeHasChanged()` updates subscribed components automatically.

This makes it easier to manage application-wide themes without repeating configuration across different parts of your Blazor application.

### FilePicker File Binding Improvements

FilePicker now supports two-way file binding through `@bind-Files`, making it easier to manage attachments in forms where users need to return and continue working later.

Previously, FilePicker was mainly focused on selecting new files. Now applications can also preload existing attachments, so users can reopen a form and see files they previously added. The bound list stays in sync as files are selected, removed, or cleared.

Preloaded files can contain just metadata for files already stored on the server, or include their content through `Data` or `StreamFactory`. This also makes it possible to restore locally cached files and upload them later, which is useful for drafts and workflows where users don't submit everything at once.

For larger files, `StreamFactory` allows content to be read in chunks and provides a fresh stream for each upload attempt, without keeping the entire file in memory.

Applications remain responsible for storing and restoring files, but FilePicker now handles the UI and binding needed to make these workflows much easier to build.

### DataGrid Loading Improvements

**DataGrid** now gives you more control over how loading is displayed, making it easier to keep the interface clear while data is being fetched or refreshed.

With the new `LoadingDisplayMode` parameter, you can choose between three behaviors. **Overlay** keeps existing rows and pagination visible behind a translucent loading layer, **Replace** displays loading content instead of the rows, and **None** disables the loading indicator entirely.

Both Overlay and Replace automatically show a compact, localized spinner when no custom `LoadingTemplate` is provided. If you already use a custom loading template, DataGrid now centers it automatically.

The default behavior remains unchanged, so existing applications continue to work as before. Updated documentation and examples show how to use the new loading options.

### DataGrid Named Column Aggregates

**DataGrid** now supports aggregates for calculated columns, making it easier to display totals and summaries even when a column isn't directly bound to a data field.

Previously, aggregates relied on field names, which made it difficult to summarize calculated columns or show different aggregates for columns using the same field.

With the new `Name` parameter on columns and `ColumnName` on aggregates, you can now target a specific column directly. This allows you to display different summaries for the same underlying data or calculate totals for columns that use custom templates and calculated values.

Named columns take priority when matching aggregates, while existing field-based aggregates continue to work as before. No changes are required for applications using the current approach.

### DataGrid Accessibility Improvements

**DataGrid** is now easier to use with a keyboard or screen reader, with improvements to sorting, pagination, and visual feedback across supported UI providers.

Users can now **sort columns and navigate between pages using the keyboard**, without relying on a mouse. Screen readers also receive clearer information about the current sort direction and pagination controls, making it easier to understand and navigate the data.

We improved hover and focus states so users can more easily see which elements they're interacting with. Page selectors now include localized labels, making pagination more accessible across different languages.

Alongside these changes, we fixed pager alignment and refined pagination styling in **FluentUI2** and **AntDesign**, keeping the experience more consistent across providers.

### Bar Theming Improvements

Customizing Bar colors is now more flexible, with new theming support for both horizontal and vertical navigation.

Previously, Bar theming was mainly focused on vertical layouts. With the new `ThemeBarOptions.ColorScope` option, you can choose whether custom colors apply to horizontal bars, vertical bars, or both. This makes it easier to keep navigation consistent across top menus, sidebars, and other application layouts.

Theming now covers backgrounds, hover and active states, brand elements, and dropdown menus. The `ThemeContrast` option also lets you choose between light and dark color palettes, helping maintain readable navigation across different themes.

We also improved Material Bar theming in both orientations and fixed smaller visual issues in AntDesign and Material, including hover underline positioning and sidebar badge alignment.

### DragHandle Component

The new `DragHandle` component gives users a dedicated area for dragging items, making drag-and-drop interfaces easier to use when items contain buttons, inputs, or other interactive elements.

Previously, making an entire item draggable could interfere with normal interactions, especially when users wanted to select text, click a button, or edit a field. With `DragHandle`, dragging starts only from the designated handle, leaving the rest of the item fully interactive.

The drag cursor also appears only when hovering over an enabled handle, making it clearer where users can start dragging. Existing draggable items without handles continue to work as before.

This is especially useful for **sortable lists, cards, and form builders**, where dragging and interacting with item content need to work together.