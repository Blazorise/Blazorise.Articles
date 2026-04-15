---
title: Migrating Material and AntDesign Provider Assets in Blazorise 2.1
description: Migration notes for the Blazorise 2.1 Material 3 and AntDesign v6 provider asset, icon package, and styling changes.
permalink: /news/migration/210
canonical: /news/migration/210
image-url: img/v210-migration.jpg
image-title: Migrating Material and AntDesign Provider Assets in Blazorise 2.1
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-04-15
read-time: 5 min
---

# Migrating Material and AntDesign Provider Assets in Blazorise 2.1

This guide will help you smoothly transition your Blazorise app to version 2.1, focusing on updates to the Material and AntDesign providers. We’ll walk through what’s changed, what you need to check, and how to update your assets, icons, and styles with minimal headaches.

Most users won’t notice major changes, but if your app still relies on old provider files, icons, or custom CSS that digs into provider internals, you’ll need to make some updates. For most projects, the Blazorise APIs themselves haven’t changed, so you shouldn’t run into major breakage.

## Recommended Upgrade Path

The recommended way to update an application to Blazorise 2.1 is to use **Blazorise.Migrator** first. The migrator handles the common mechanical updates and helps reduce the amount of manual work needed during the upgrade.

After running the migrator, use the notes below to review provider assets, icon setup, and any custom CSS that depends on old Material or AntDesign internals.

## Summary

You should double-check your app if you use any of the following:

- Old Material framework CSS or JavaScript files.
- jQuery, Popper, or Bootstrap JavaScript references that were included only for the old Material provider.
- External Ant Design v4 CDN stylesheets.
- FontAwesome as the AntDesign provider icon setup.
- Custom CSS targeting old Material, Bootstrap-based Material, Daemonite, Ant Design v4, or icon-package internals.

## Material 3 Provider Migration

The Material provider has moved to a Material 3 based implementation.

Remove old Material framework CSS references that were used only for the previous provider implementation, such as:

```html
<link href="css/material.min.css" rel="stylesheet">
<link href="css/material/material.min.css" rel="stylesheet">
```

Also remove old Material framework JavaScript references that were used only for the previous provider implementation, such as:

```html
<script src="js/material.min.js"></script>
<script src="js/material/material.min.js"></script>
```

This also applies to other local Material framework CSS or JavaScript files that were used only for the old provider.

If your app included jQuery, Popper, or Bootstrap JavaScript only for the old Material provider, review whether those references are still needed. Do not remove them if your application still depends on them independently.

Keep or add the current Material provider assets:

```html
<link href="_content/Blazorise/blazorise.css?v=2.1.0.0" rel="stylesheet" />
<link href="_content/Blazorise.Material/blazorise.material.css?v=2.1.0.0" rel="stylesheet" />
<link href="_content/Blazorise.Icons.Material/blazorise.icons.material.css?v=2.1.0.0" rel="stylesheet" />

<script src="_content/Blazorise.Material/blazorise.material.js?v=2.1.0.0"></script>
<script src="_framework/blazor.web.js"></script>
```

The Material provider script should be loaded before the Blazor framework script.

The Google Material Icons stylesheet is required only when using `Blazorise.Icons.Material`. Roboto, or any other font, is now an application styling choice rather than a provider requirement.

Custom CSS targeting old Material, Bootstrap-based Material, Daemonite, or local Material framework selectors may need review. For Material 3 custom styling, prefer CSS variables loaded after the provider CSS.

Common Material tokens include:

```css
:root {
  --mui-primary: #6750a4;
  --mui-on-primary: #ffffff;
  --mui-primary-container: #eaddff;
  --mui-on-primary-container: #21005d;
  --mui-surface: #fffbfe;
  --mui-on-surface: #1c1b1f;
  --mui-outline: #79747e;
  --mui-spacing: 0.25rem;
  --mui-font-family: Roboto, Arial, sans-serif;
}
```

## AntDesign v6 Provider Migration

The AntDesign provider has moved to Ant Design v6 styling.

Stop referencing external Ant Design v4 CDN stylesheets for the provider, such as:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.24.15/antd.min.css" />
```

Replace those external `antd/antd.min.css` references with the bundled provider stylesheet:

```html
<link href="_content/Blazorise.AntDesign/antd.css?v=2.1.0.0" rel="stylesheet" />
```

Keep or add the current AntDesign provider assets:

```html
<link href="_content/Blazorise/blazorise.css?v=2.1.0.0" rel="stylesheet" />
<link href="_content/Blazorise.AntDesign/antd.css?v=2.1.0.0" rel="stylesheet" />
<link href="_content/Blazorise.AntDesign/blazorise.antdesign.css?v=2.1.0.0" rel="stylesheet" />
```

AntDesign provider scripts are normally loaded dynamically when related components need them. For PWA or offline scenarios, preload the provider scripts with `type="module"`:

```html
<script type="module" src="_content/Blazorise.AntDesign/bar.js?v=2.1.0.0"></script>
<script type="module" src="_content/Blazorise.AntDesign/modal.js?v=2.1.0.0"></script>
<script type="module" src="_content/Blazorise.AntDesign/segmented.js?v=2.1.0.0"></script>
<script type="module" src="_content/Blazorise.AntDesign/tooltip.js?v=2.1.0.0"></script>
<script type="module" src="_content/Blazorise.AntDesign/wave.js?v=2.1.0.0"></script>
```

Custom CSS targeting Ant Design v4 selectors, v4 DOM assumptions, or old v4 token names may need review. Prefer current `--ant-*` tokens and stable provider hooks for custom styling.

## AntDesign Icon Package Migration

The AntDesign setup now has a native AntDesign icon package.

Recommended package:

```text
Blazorise.Icons.AntDesign
```

Recommended icon stylesheet:

```html
<link href="_content/Blazorise.Icons.AntDesign/blazorise.icons.antdesign.css?v=2.1.0.0" rel="stylesheet" />
```

Recommended namespace and service registration:

```csharp
using Blazorise.Icons.AntDesign;

builder.Services
    .AddBlazorise()
    .AddAntDesignProviders()
    .AddAntDesignIcons();
```

Existing AntDesign apps that followed older guidance may still use FontAwesome:

```text
Blazorise.Icons.FontAwesome
```

```html
<link href="_content/Blazorise.Icons.FontAwesome/v6/css/all.min.css?v=2.1.0.0" rel="stylesheet">
```

```csharp
using Blazorise.Icons.FontAwesome;

builder.Services
    .AddBlazorise()
    .AddAntDesignProviders()
    .AddFontAwesomeIcons();
```

Replace the FontAwesome setup with the AntDesign icon setup when you want the current provider-default AntDesign look.

Important: if your app explicitly uses FontAwesome-specific APIs such as `FontAwesomeIcons.*` or custom FontAwesome class names, do not blindly remove FontAwesome. Either keep FontAwesome intentionally or manually migrate those icon usages to `AntDesignIcons.*`.

Custom icon CSS targeting FontAwesome classes may also need review when switching to AntDesign icons.

## Static File Before/After Examples

Material before:

```html
<link href="css/material/material.min.css" rel="stylesheet">
<script src="js/material.min.js"></script>
```

Material after:

```html
<link href="_content/Blazorise/blazorise.css?v=2.1.0.0" rel="stylesheet" />
<link href="_content/Blazorise.Material/blazorise.material.css?v=2.1.0.0" rel="stylesheet" />
<link href="_content/Blazorise.Icons.Material/blazorise.icons.material.css?v=2.1.0.0" rel="stylesheet" />
<script src="_content/Blazorise.Material/blazorise.material.js?v=2.1.0.0"></script>
```

AntDesign before:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.24.15/antd.min.css" />
<link href="_content/Blazorise.Icons.FontAwesome/v6/css/all.min.css?v=2.1.0.0" rel="stylesheet">
```

AntDesign after:

```html
<link href="_content/Blazorise.AntDesign/antd.css?v=2.1.0.0" rel="stylesheet" />
<link href="_content/Blazorise.Icons.AntDesign/blazorise.icons.antdesign.css?v=2.1.0.0" rel="stylesheet" />
<link href="_content/Blazorise/blazorise.css?v=2.1.0.0" rel="stylesheet" />
<link href="_content/Blazorise.AntDesign/blazorise.antdesign.css?v=2.1.0.0" rel="stylesheet" />
```

AntDesign service registration before:

```csharp
using Blazorise.Icons.FontAwesome;

builder.Services
    .AddBlazorise()
    .AddAntDesignProviders()
    .AddFontAwesomeIcons();
```

AntDesign service registration after:

```csharp
using Blazorise.Icons.AntDesign;

builder.Services
    .AddBlazorise()
    .AddAntDesignProviders()
    .AddAntDesignIcons();
```

## Manual Review Checklist

Review your application for:

- Old Material CSS references such as `css/material.min.css`, `css/material/material.min.css`, or other local Material framework CSS files used only for the old provider.
- Old Material JavaScript references such as `js/material.min.js`, `js/material/material.min.js`, or other local Material framework JavaScript files used only for the old provider.
- jQuery, Popper, or Bootstrap JavaScript references that were included only for the old Material provider.
- Custom CSS targeting old Material, Bootstrap-based Material, Daemonite, or local Material framework selectors.
- Material custom styling that should move to Material 3 CSS variables loaded after the provider CSS.
- External Ant Design v4 CDN stylesheet references such as `antd.min.css`.
- Custom CSS targeting Ant Design v4 selectors, v4 DOM assumptions, or old v4 token names.
- Custom styling that can move to current `--ant-*` tokens or stable provider hooks.
- AntDesign icon setup still using FontAwesome when the desired look is the current AntDesign provider default.
- Explicit FontAwesome usage such as `FontAwesomeIcons.*` or custom FontAwesome class names before removing FontAwesome.
- Custom icon CSS targeting FontAwesome classes before switching to AntDesign icons.
- PWA or offline scenarios that need AntDesign provider scripts preloaded with `type="module"`.
