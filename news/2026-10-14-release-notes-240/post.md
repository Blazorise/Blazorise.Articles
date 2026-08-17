---
title: Announcing Blazorise 2.4 - Jadro
description: Blazorise 2.4 introduces Reporting, CodeEditor, first-party DatePicker and TimePicker components, and several new reusable UI building blocks.
permalink: /news/release-notes/230
canonical: /news/release-notes/230
image-url: img/v230.jpg
image-title: Announcing Blazorise 2.4 - Jadro
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-07-14
read-time: 10 min
pinned: true
---

Blazorise 2.4 is codenamed **Jadro**, ...

## Key Blazorise 2.4 Highlights

Here are some of the most important additions and updates:

- **Tooltip**: Rebuilt in Blazor and C#, removing the Tippy.js dependency.

## Upgrading from 2.3.x to 2.4

Update all **Blazorise.*** package references to **2.4**.

```cs
<PackageVersion Include="Blazorise" Version="2.3.*" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.3.*" />
```

Change them to:

```cs
<PackageVersion Include="Blazorise" Version="2.4.0" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.4.0" />
```

### Tooltip Improvements

**Tooltip** is now fully Blazor-native and no longer depends on **Tippy.js**, continuing our work to remove external JavaScript dependencies where we can provide the same functionality directly in Blazorise.

A new `TooltipContent` fragment also makes tooltips much more flexible. Instead of being limited to simple text, tooltips can now contain rich content built with Blazorise components, typography, and utilities. The existing `Text` parameter remains available when only simple content is needed.

External triggers, themes, delays, interactive content, inline detection, and provider-specific styling continue to work as expected. The `AppendTo` parameter remains for compatibility, but is now obsolete and has no effect.

With the implementation now under our control, Tooltip can continue to improve without relying on an external library.