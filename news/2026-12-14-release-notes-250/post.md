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