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