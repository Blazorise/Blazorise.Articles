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