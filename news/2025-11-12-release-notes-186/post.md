---
title: Blazorise 1.8.6 – .NET 10 Ready
description: Blazorise 1.8.6 adds official support for .NET 10 and delivers multiple DataGrid and FilePicker stability fixes, ensuring a smooth transition for developers upgrading to the latest .NET platform.
permalink: /news/release-notes/186
canonical: /news/release-notes/186
image-url: img/v186.png
image-title: Blazorise 1.8.6 – .NET 10 Ready
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-11-12
read-time: 2 min
---

# Blazorise 1.8.6 – .NET 10 Ready

Blazorise **1.8.6** marks an important step forward with **official support for .NET 10**, alongside several **stability improvements** across popular components such as **DataGrid**, **FilePicker**, and **Collapse**. This release ensures a seamless upgrade path for developers adopting the newly released .NET platform.

## .NET 10 Support

With .NET 10 now officially released, Blazorise 1.8.6 is fully compatible and tested with the new runtime and SDK. This means you can confidently update your projects and take advantage of the latest **C# 14** language features, **JIT and AOT performance optimizations**, and **modernized Blazor hosting models** without breaking existing Blazorise-based applications.

### Important for Blazor Server users

If you're upgrading a **Blazor Server** app to **.NET 10**, you may need to explicitly enable the **static web assets** feature by adding the following line to your `.csproj` file:

```xml
<PropertyGroup>
  <RequiresAspNetWebAssets>true</RequiresAspNetWebAssets>
</PropertyGroup>
```

This ensures that Blazorise's embedded resources (styles, scripts, and icons) are correctly served by the new .NET 10 SDK build system.
Without this property, your app might fail to load static assets, leading to missing styles or scripts at runtime.

This upgrade also ensures smoother long-term support and alignment with future **.NET 10 LTS** tooling and IDE improvements.

## DataGrid Improvements

The **DataGrid** component continues to receive attention in this release, focusing on stability and rendering correctness:

- Fixed issues where **DataGridMultiSelectColumn** and fixed headers misbehaved when using `FixedColumnsPositionSync`.
- Addressed a problem causing **light color themes** not to apply properly to rows.
- Corrected **OnPageSizeChanged** and **OnPageChanged** events to properly dispose of `CancellationTokenSource`.
- Improved interactivity where **buttons inside DataGrid** could be unresponsive or flicker briefly on initial load.

These fixes collectively enhance DataGrid responsiveness, resource management, and consistent styling, especially in complex or dynamic layouts.

## FilePicker Fix

Resolved an issue where the **FilePicker** component could throw a `System.NotSupportedException` during initialization due to null parameter names in constructors. This fix restores predictable behavior across all supported browsers and hosting models.

## Documentation and Maintenance Updates

We've clarified documentation for the **Collapse** component, detailing the required wrapper structure for consistent animations and layout transitions.

The **DataGrid** documentation has also been updated:  
- The `CellNavigable` property has been replaced with `NavigationMode="DataGridNavigationMode.Cell"` for a clearer and more extensible navigation model.

In addition, we've added a new documentation section highlighting **workarounds for conflicting components**, helping developers resolve edge cases more efficiently.

## Full changelog

Everything that went into 1.8.6:

- [#6255](https://github.com/Megabit/Blazorise/issues/6255): [Bug]: Clarify Collapse component content wrapper requirements in documentation
- [#6033](https://github.com/Megabit/Blazorise/issues/6033): [Bug]: FilePicker - Error: System.NotSupportedException
- [#6091](https://github.com/Megabit/Blazorise/issues/6091): Docs: DataGrid `CellNavigable` replaced with `NavigationMode="DataGridNavigationMode.Cell"`
- [#6153](https://github.com/Megabit/Blazorise/issues/6153): [Bug]: DataGrid `OnPageSizeChanged` and `OnPageChanged` not disposing `CancellationTokenSource`
- [#5939](https://github.com/Megabit/Blazorise/issues/5939): [Bug]: DataGrid row doesn't apply light colors
- [#5914](https://github.com/Megabit/Blazorise/issues/5914): [Bug]: DataGridMultiSelectColumn and fixed columns issues
- [#5638](https://github.com/Megabit/Blazorise/issues/5638): [Bug]: Button in DataGrid flickering or unclickable on first load
- [#5457](https://github.com/Megabit/Blazorise/issues/5457): [Docs]: Mention conflicting components workarounds
- [#6258](https://github.com/Megabit/Blazorise/pull/6258): Maintenance: support for .NET 10

## Upgrading

Blazorise 1.8.6 is a safe, drop-in upgrade for all **1.8.x** users.  
No breaking API changes are introduced. If you're moving to **.NET 10**, we recommend upgrading immediately to benefit from verified compatibility and continued framework improvements.

## Thank you & commercial support

Each release, big or small, helps keep Blazorise stable, modern, and production-ready.  
Your bug reports, suggestions, and commercial support make these updates possible.

Explore our commercial licensing options here: [Blazorise Commercial](https://blazorise.com/commercial "Link to Blazorise Commercial").  
Your contribution ensures the continued evolution of Blazorise for professional use.