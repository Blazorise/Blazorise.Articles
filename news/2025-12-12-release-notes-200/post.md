---
title: Announcing Blazorise 2.0 - Hvar
description: Blazorise 2.0, codenamed Hvar after the beautiful island in Croatia, is a significant update that brings a host of new features, enhancements, and optimizations to the framework. This release focuses on improving the developer experience, enhancing performance, and expanding the capabilities of Blazorise components.
permalink: /news/release-notes/200
canonical: /news/release-notes/200
image-url: img/v200.png
image-title: Announcing Blazorise 2.0 - Hvar
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-12-12
read-time: 7 min
pinned: true
---

## Blazorise 2.0 - Release Notes

When we released Blazorise 1.8, we promised that the next version would be a major one, 2.0.

Blazorise 2.0, codenamed **Hvar** after the beautiful island in Croatia, is a significant update that brings a host of new features, enhancements, and optimizations to the framework. This release focuses on improving the developer experience, enhancing performance, and expanding the capabilities of Blazorise components.

## Key Blazorise 2.0 Highlights 💡

Here's a summary of what's new in this release:

- **Unified Input API**: All input components now use the standard `Value`, `ValueChanged`, and `ValueExpression` parameters for consistency across the framework.
- **Renamed Input Components**: Components like `TextEdit`, `DateEdit`, and `FileEdit` are now renamed to `TextInput`, `DateInput`, and `FileInput`.

Dive deeper below to discover the full potential of these features.

> 💡 Planning to upgrade from 1.8.x? See the full migration guide at [/news/migration/200](/news/migration/200).

## New Features

### Unified Input API

Blazorise 2.0 introduces a fully **unified input API** across all form components. Every input now consistently uses `Value`, `ValueChanged`, and `ValueExpression`, making data binding predictable and significantly simplifying form development.

**Before (1.8.x):**

```razor
<TextEdit @bind-Text="@Username" />
<DateEdit @bind-Date="@SelectedDate" />
<Check @bind-Checked="@IsChecked" />
```

**After (2.0):**

```razor
<TextInput @bind-Value="@Username" />
<DateInput @bind-Value="@SelectedDate" />
<Check @bind-Value="@IsChecked" />
```

### Heading Aliases

New component aliases have been introduced for both `Heading` and `DisplayHeading` components to simplify usage and improve readability in markup. You can now use `Heading1` through `Heading6` as direct equivalents to `<Heading Size="HeadingSize.Is1">` through `<Heading Size="HeadingSize.Is6">`, and `DisplayHeading1` through `DisplayHeading4` as equivalents to `<DisplayHeading Size="DisplayHeadingSize.Is1">` through `<DisplayHeading Size="DisplayHeadingSize.Is4">`.

These aliases make it easier to write semantically clear headings without needing to specify size attributes explicitly.

### Gutters Utilities

We added a new `Gutter` system that allows you to control the horizontal and vertical spacing between columns and rows directly on any `Row` and `Fields` component. The gutter behavior now matches Bootstrap 5's model and works consistently across all providers, including Tailwind, Bootstrap, and Bulma. You can apply gutters per axis (`OnX`, `OnY`) or on both axes at once, with full support for responsive values.

Learn more in the official [Gutters Utilities](docs/helpers/utilities/gutters "Gutters Utilities") documentation page.

### Charts

#### Chartjs v4

We made a lot of work to bring this to life. Moving forward, all Blazorise Charts static file will be handled and loaded dynamically. Meaning you don't need to manually include `<script>` file anymore.

We have also updated all charts options to support new version 4.x.

#### Custom Named Axes

It is now possible to configure custom named axes on the `ChartScales` options. We have introduced a new option named `AdditionalAxes`, with which you can define any number axises along with the already available `X` and `Y`.

### Validation

#### Revalidation Support

This feature was on our backlog for years, and the main reason why we haven't done it before is because the internals of inputs and validation where too complex to touch anything regarding it. Now that we have made the **Input** components API much cleaner we also have the freedom and ability to add more features to the validation system.

One such feature is the manual revalidation of the validated input. With this feature you will finally be able to fine-tune your UI and adjust it based on your business need.

It works on a single `Validation` component, or if you want to do it in batch you can run it on `Validations` component.

Learn more in the official [Validation Component](docs/components/validation "Validation Component") documentation page.

## Final Notes 🏁

Blazorise 2.0 introduces a consistent, modernized input system and simpler APIs that make form handling easier and more intuitive.
Review your input components and update bindings for a smooth migration.