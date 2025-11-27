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

- **.NET6 and .NET7**: frameworks support is removed.
- **Unified Input API**: All input components now use the standard `Value`, `ValueChanged`, and `ValueExpression` parameters for consistency across the framework.
- **Renamed Input Components**: Components like `TextEdit`, `DateEdit`, and `FileEdit` are now renamed to `TextInput`, `DateInput`, and `FileInput`.
- **Extended Color Variants**: for Background and TextColor utilties.
- **FluentUI Theme Generator**: dynamically generate FluentUI themes.

Dive deeper below to discover the full potential of these features.

> 💡 Planning to upgrade from 1.8.x? See the full migration guide at [/news/migration/200](/news/migration/200).

## New Features

### Remove .NET6 & .NET7

We have removed support for older frameworks as they were already past their LTS or STS. While we could keep them for while, they were already keeping us locked to some older APIs, and any new features would be impossible to do with Blazorise in the future.

We also need to mention that .NET8 is still kept. But it will also be removed once its LTS comes to an end sometimes in the late 2026. From there on, we will omnly keep .NET9 and later.

This will finally allow us to bring to life new Blazor features, will in turn will allow us to improve Blazorise even more.

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

### Radio Component Updates

Blazorise 2.0 introduces a simplified and unified binding model for Radio components. The old `Checked`, `CheckedChanged`, and `CheckedExpression` APIs have been removed and replaced by the standard `Value` / `ValueChanged` / `ValueExpression` pattern. `RadioGroup<TValue>` is now the binding surface, while each `Radio<TValue>` provides its option via Value. A radio is selected when its Value matches the group's bound value, enabling cleaner markup, predictable parsing, and consistent validation.

Migrating is straightforward: replace `Checked*` APIs with Value*, and ensure each radio defines an option Value. Boolean standalone radios still work but are discouraged.

**Before:**

```razor
<RadioGroup TValue="string" @bind-Value="Selected">
    <Radio Checked="true">A</Radio>
    <Radio Checked="false">B</Radio>
</RadioGroup>
```

**After:**

```razor
<RadioGroup TValue="string" @bind-Value="Selected">
    <Radio Value="A">A</Radio>
    <Radio Value="B">B</Radio>
</RadioGroup>
```

### Extended Color Variants

Color plays a key role in user interface design, conveying hierarchy, meaning, and accessibility. With Blazorise 1.9, developers can now use **extended color variants** to fine-tune tones and add greater visual depth.

Enumerations such as `Background` and `TextColor` now support **nested variants** for subtle and emphasized shades. Previously limited to base colors like `Background.Success` or `TextColor.Danger`, you can now use variants such as `Background.Success.Subtle` or `TextColor.Success.Emphasis`. This brings Blazorise utilities in line with modern design systems like Bootstrap 5.3 and FluentUI.

This new system is powered by the `IEnumerationNameBuilder` infrastructure, which standardizes how enumeration values map to CSS class names across providers. For example, Bootstrap automatically generates classes such as `bg-success-subtle` or `text-success-emphasis`. It’s fully backward-compatible, ensuring a seamless upgrade path for existing applications.

You can explore the full range of extended color variants in the [Colors documentation](docs/helpers/colors "Link to Colors documentation").

###  Badge Subtle

The `Badge` component has been enhanced with a new **Subtle** color mode. This feature introduces lighter, less saturated background tones—ideal for modern, minimalist interfaces or secondary indicators where softer emphasis is preferred.

By setting the `Subtle` parameter to `true`, badges automatically adopt the new muted color variants. This ensures they blend naturally into the surrounding UI while maintaining clarity and readability. Subtle badges are particularly effective when used alongside extended color variants, allowing designers to build refined, theme-consistent experiences.

You can see examples of subtle badges in the updated [Badge documentation](docs/components/badge "Link to Badge documentation").

### FluentUI Theme Generator

Blazorise 1.9 also introduces the **FluentUI Theme Generator**, enabling developers to easily build and customize themes based on Microsoft’s Fluent Design System. This generator allows quick configuration of colors, typography, and surface elements to create professional and consistent Fluent-inspired UIs.

The goal is to provide a balance between flexibility and faithfulness to the FluentUI aesthetic, giving developers the ability to tailor visual themes while maintaining familiar design principles across all Blazorise components.

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