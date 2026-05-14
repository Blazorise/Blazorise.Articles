---
title: Announcing Blazorise 2.2 - Mosor
description: Blazorise 2.2, codenamed Mosor, adds new components, provider updates, performance work, and UX improvements across the framework for a smoother developer experience.
permalink: /news/release-notes/220
canonical: /news/release-notes/220
image-url: img/v220.jpg
image-title: Announcing Blazorise 2.2 - Mosor
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-06-09
read-time: 12 min
pinned: true
---

# Blazorise 2.2 - Release Notes

Codenamed **Mosor**, after the Croatian mountain range next to our hometown, Split, **Blazorise 2.2** is a major release packed with new features, refinements, and performance boosts. It's also one of our biggest updates yet, both in terms of what's new and how much the framework has evolved.

## Key Blazorise 2.2 Highlights 💡

Here are some of the most notable additions and updates:

- **Blazorise Barcode**: A new extension for generating both linear and two-dimensional barcodes.

## Upgrading from 2.1.x to 2.2 👨‍🔧

Upgrading your application is simple:

Update all **Blazorise.*** package references to **2.2**.

```cs
<PackageVersion Include="Blazorise" Version="2.1.4" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.1.4" />
```

Change to:

```cs
<PackageVersion Include="Blazorise" Version="2.2.0" />
<PackageVersion Include="Blazorise.Bootstrap5" Version="2.2.0" />
```

## New Features & Enhancements 🚀

### Blazorise Barcode (New)

Blazorise 2.2 introduces **Blazorise.Barcode**, a new extension for generating both linear and two-dimensional barcodes.

The component supports a wide range of common symbologies, including **Code 128, EAN, UPC, QR Code, Data Matrix, PDF417, Aztec**, and more, making it suitable for various business and data encoding scenarios.

It also provides flexible configuration options such as **rendering mode, symbol sizing, scale, colors, rotation, value display and alignment, and image padding**, allowing precise control over barcode appearance and layout.

### Validation Warning Support

Validation now supports a new **warning state**, allowing you to provide feedback that does not block form submission.

With `ValidationStatus.Warning` and the `ValidationWarning` component, you can highlight potential issues or recommendations while still letting users continue. This is useful for scenarios like weak password suggestions or optional field guidance where strict validation is not required.

The new `ValidationFeedback` component groups all feedback types (`None`, `Warning`, `Success`, and `Error`) into a single, consistent API, making it easier to manage validation UI.

Updated [documentation include examples](docs/components/validation) of how to use warning-based validation in real scenarios.

### TreeView Drag & Drop

TreeView now supports **drag-and-drop**, making it easy to reorder nodes and move items within a hierarchy.

You can enable dragging with `Draggable` and allow reordering with `Reorderable`, including inserting nodes before or after others. Built-in behavior handles moving nodes within **mutable collections** automatically, so basic scenarios work out of the box.

For more control, you can use `CanDragNode` and `CanDropNode` to restrict allowed operations, and `NodeDropped` to fully customize what happens on drop. If not handled, TreeView falls back to its default move logic.

The feature includes clear **visual drop indicators** for inserting before, after, or as a child node, helping users understand where items will be placed.

### Animate Improvements

The **Animate** component has been significantly expanded with support for fully custom animations and improved layout-aware transitions.

You can now define animations directly in C# using `AnimationDefinition` and `AnimationFrame`, along with custom easing functions through `EasingDefinition`, including support for cubic-bezier curves. This makes it possible to create reusable animation behaviors without relying on external CSS keyframes.

Animation behavior has also been improved for visibility-based scenarios. Enter and exit transitions now work more naturally with the `Visible` parameter, and the new `AnimateOnInitialRender` option allows you to control whether animations should run during the first render.

A new `AnimatedSize` mode enables smoother drawer, sidebar, and disclosure-style animations by animating the actual occupied width or height of the element. This allows surrounding content to move naturally during expand and collapse instead of abruptly shifting.

The component now automatically loads its required runtime script, removing the need to manually add the Animate script tag. Documentation and demos were also expanded with new examples covering viewport reveal, visibility toggles, animated sizing, manual triggering, and custom keyframe animations.

### Gestures Component (New)

A new `Gestures` component has been added for building **touch and pointer-driven interactions** in Blazorise.

The component supports common mobile and touch scenarios such as **swipes, taps, and long presses**, while also exposing gesture lifecycle events for start, movement, and end tracking. Swipe detection can be configured for specific directions, and gesture behavior can be fine-tuned through options such as swipe distance, velocity thresholds, tap duration, long-press duration, and movement tolerance.

`Gestures` also includes features for real-world UI integration, including the ability to temporarily disable gesture handling, control browser touch behavior through `TouchAction`, and safely use gestures alongside buttons, links, inputs, and other interactive elements.

Documentation and demos include practical examples such as swipe galleries, sidebar gestures, and gesture lifecycle handling.

### Carousel Improvements

Carousel now supports **custom templates** for indicators, navigation buttons, and captions, making it easier to fully customize the appearance and behavior of slideshows.

Support for **swipe gestures** has also been added through the new `Swipeable` parameter, allowing touch-based slide navigation without requiring additional gesture markup or wrappers.

### Bootstrap 5 Provider Update

The [Bootstrap 5](docs/usage/bootstrap5) provider has been updated to **Bootstrap 5.3.8**.

This update improves support for newer Bootstrap 5.3 utility classes, including subtle color variants, border utilities, themed badges, alerts, tables, and improved contrast handling. Theming behavior continues to respect `LuminanceThreshold`, while adding additional contrast fallback logic to improve readability where needed.