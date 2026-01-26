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

- **Blazorise Migration CLI**: a command-line tool to analyze, preview, and apply Blazorise 2.0 migration changes.
- **Blazorise Analyzer**: compile-time diagnostics that detect breaking changes and guide upgrades.
- **.NET6 and .NET7**: framework support has been removed.
- **Unified Input API**: All input components now use the standard `Value`, `ValueChanged`, and `ValueExpression` parameters for consistency across the framework.
- **Renamed Input Components**: Components like `TextEdit`, `DateEdit`, and `FileEdit` are now renamed to `TextInput`, `DateInput`, and `FileInput`.
- **Extended Color Variants**: for Background and TextColor utilities.
- **FluentUI Theme Generator**: dynamically generate FluentUI themes.
- **Autocomplete Validation Refactor**: now behaves as any other input component.
- **Accessibility Improvements**: Across Inputs, Layouts, and Providers.
- **Tailwind 4**: Upgrade to latest version.
- **MCP Server**: AI documentation access.

Dive deeper below to discover the full potential of these features.

> 💡 Planning to upgrade from 1.8.x?  
> Review the migration notes and use the Blazorise Migration CLI to upgrade safely.  
> 👉 Migration guide: [news/migration/200](news/migration/200)  
> 👉 Migration CLI docs: [docs/migration](docs/migration)

## New Features

## Blazorise Analyzer

Blazorise 2.0 introduces **Blazorise.Analyzers**, a brand-new NuGet package designed to make upgrading and maintaining Blazorise projects safer, faster, and more predictable. Once installed, the analyzer automatically inspects your Blazor projects at compile time and detects inconsistencies related to API changes introduced in Blazorise 2.0. Instead of discovering breaking changes at runtime, developers now get immediate feedback directly in their IDE and build output.

The analyzer raises clear and actionable compile-time errors and warnings whenever it detects usage of renamed components, changed parameters, or outdated APIs. Each diagnostic includes precise guidance on what has changed and how to update your code to the new component API, significantly reducing guesswork during migration. This is especially valuable for larger projects, where manual auditing of components and parameters would otherwise be time-consuming and error-prone.

By shifting upgrade validation to compile time, Blazorise.Analyzers helps teams adopt Blazorise 2.0 with confidence. It acts as a built-in upgrade assistant, ensuring your codebase stays aligned with the latest Blazorise conventions and best practices, while keeping your development workflow smooth and efficient.

For a complete upgrade path, pair the analyzer diagnostics with the Migration CLI and review the migration notes for manual changes and behavioral differences.

## Blazorise Migration CLI

Blazorise 2.0 introduces the **Blazorise Migration CLI**, a command-line tool designed to help upgrade existing Blazorise 1.x projects in a safe, reviewable, and predictable way.

The migrator analyzes your solution or project, reports required migration changes, and can apply them automatically when you are ready. All changes can be previewed in advance using dry-run mode, and optional backups ensure you can roll back if needed.

The recommended workflow is to first analyze your solution, review the reported changes, preview file updates with `--dry-run`, and then apply the migration with backups enabled.

For full usage instructions, examples, and command options, see the [dedicated migration documentation](docs/migration).

While the migrator handles many breaking changes automatically, some updates require manual review. The [migration notes](news/migration/200) document behavioral changes, removed APIs, and upgrade considerations that cannot be applied automatically.

### Remove .NET6 & .NET7

We have removed support for older frameworks as they were already past their LTS or STS. While we could keep them for while, they were already keeping us locked to some older APIs, and any new features would be impossible to do with Blazorise in the future.

We also need to mention that .NET8 is still kept. But it will also be removed once its LTS comes to an end sometime in late 2026. From there on, we will only keep .NET9 and later.

This will finally allow us to bring to life new Blazor features, which in turn will allow us to improve Blazorise even more.

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

This new system is powered by the `IEnumerationNameBuilder` infrastructure, which standardizes how enumeration values map to CSS class names across providers. For example, Bootstrap automatically generates classes such as `bg-success-subtle` or `text-success-emphasis`. It's fully backward-compatible, ensuring a seamless upgrade path for existing applications.

You can explore the full range of extended color variants in the [Colors documentation](docs/helpers/colors "Link to Colors documentation").

### Badge Subtle

The `Badge` component has been enhanced with a new **Subtle** color mode. This feature introduces lighter, less saturated background tones—ideal for modern, minimalist interfaces or secondary indicators where softer emphasis is preferred.

By setting the `Subtle` parameter to `true`, badges automatically adopt the new muted color variants. This ensures they blend naturally into the surrounding UI while maintaining clarity and readability. Subtle badges are particularly effective when used alongside extended color variants, allowing designers to build refined, theme-consistent experiences.

You can see examples of subtle badges in the updated [Badge documentation](docs/components/badge "Link to Badge documentation").

### FluentUI Theme Generator

Blazorise 1.9 also introduces the **FluentUI Theme Generator**, enabling developers to easily build and customize themes based on Microsoft's Fluent Design System. This generator allows quick configuration of colors, typography, and surface elements to create professional and consistent Fluent-inspired UIs.

The goal is to provide a balance between flexibility and faithfulness to the FluentUI aesthetic, giving developers the ability to tailor visual themes while maintaining familiar design principles across all Blazorise components.

### Charts

#### Chartjs v4

We made a lot of work to bring this to life. Moving forward, all Blazorise Charts static file will be handled and loaded dynamically. Meaning you don't need to manually include `<script>` file anymore.

We have also updated all charts options to support new version 4.x.

#### Custom Named Axes

It is now possible to configure custom named axes on the `ChartScales` options. We have introduced a new option named `AdditionalAxes`, with which you can define any number axes along with the already available `X` and `Y`.

### Validation

#### Revalidation Support

This feature was on our backlog for years, and the main reason why we haven't done it before is because the internals of inputs and validation were too complex to touch anything regarding it. Now that we have made the **Input** components API much cleaner we also have the freedom and ability to add more features to the validation system.

One such feature is the manual revalidation of the validated input. With this feature you will finally be able to fine-tune your UI and adjust it based on your business needs.

It works on a single `Validation` component, or if you want to do it in batch you can run it on `Validations` component.

Learn more in the official [Validation Component](docs/components/validation "Validation Component") documentation page.

#### Autocomplete Validation Refactor

Autocomplete now participates in the standard validation pipeline by inheriting `BaseInputComponent` and no longer relies on its built‑in Validation wrapper. This change makes Autocomplete behave consistently with other input components and requires it to be wrapped in `Validation`, which also fixes mismatches where errors appeared on the search field instead of the overall control. In multiple selection mode, validation now uses `SelectedValues`, `SelectedValuesChanged`, and `SelectedValuesExpression` so the selected items are validated as a single logical value. Finally, the parameter `MinLength` was renamed to `MinSearchLength` to clarify that it applies to search input length and to avoid confusion with data annotation MinLength.

#### RichTextEdit Validation Refactor

This release updates `RichTextEdit` to inherit from `BaseInputComponent` and adds full validation support, bringing it in line with other inputs. RichTextEdit now supports `Value/@bind-Value` for HTML content, applies validation styling on the root, and validates against the editor's plain-text representation so empty rich text (such as a blank paragraph) is treated as empty.

External Value updates now flow into **Quill** safely, while internal typing avoids DOM re-renders that could disrupt the caret. Read-only behavior now respects both `ReadOnly` and `Disabled`. Documentation and demo examples were updated to use `Value/@bind-Value`, and a new RichTextEdit validation example was added. Tests were added for RichTextEdit validation behavior, along with bUnit JS interop support and test component wiring.

### Offcanvas Provider

With the help of community member [Nex-Code](https://github.com/Nex-Code), we now have an `OffcanvasProvider` component, which mirrors the structure and usage of or existing `ModalProvider` component.

Big thanks to the [Nex-Code](https://github.com/Nex-Code) for helping us with this component.

You can see it in action in [Offcanvas Provider](docs/services/offcanvas-provider "Offcanvas Provider") documentation page.

### Full Markdown Input Support

The Markdown editor now behaves much more like other form inputs in Blazorise. It fully participates in form validation and shows validation feedback directly on the editor UI, so users can immediately see when the field is valid or has errors.

Common input behaviors are now supported on the actual editor surface. Settings like read-only and disabled work as expected, custom styling and CSS classes apply to what users see, and any additional HTML attributes are carried through properly.

Focusing the Markdown editor has also been improved, so keyboard users and form flows can move focus to the editor reliably. Overall, the Markdown component should feel more consistent with the rest of the Blazorise input components in real-world forms.

### Modal Parameters Centralized

This release adjusts the Modal API by moving the `Centered`, `Scrollable`, and `Size` parameters from `ModalContent` up to `Modal`. ModalContent now derives these values from its parent and refreshes its classes whenever the modal-level settings change, so existing layouts and providers continue to render correctly while the configuration is centralized. All internal usages, demo pages, and documentation examples have been updated to set these options on Modal, and the FluentUI2 modal implementation now relies on the modal parameters directly. The migration analyzer has been extended to flag the removed ModalContent parameters and guide users to the new Modal equivalents.

### Fluent Sizing Enhancements

Fluent sizing now supports viewport units and CSS variables, making it easy to express responsive widths and heights with `Vw`, `Vh`, and `Var` alongside the existing `Px`, `Rem`, `Em`, and `Ch` helpers. Min/max constraints can be chained directly on style-based sizing, including unit-only calls when you want to define limits without a base size.

Inline style output is cleaner and more consistent, with spacing between rules handled at append time instead of parsing, reducing overhead while keeping the formatting predictable. This ensures generated styles read well and remain stable across concatenations.

Documentation now includes a dedicated [Fluent Sizing page](docs/helpers/utilities/fluent-sizing) with multiple examples covering predefined sizes, style- based sizing, and CSS-variable-driven values, and it's surfaced in navigation and search for easier discovery.

### Intent-based coloring

Blazorise 2.0 adds a new `Intent` parameter across components that previously accepted `Color`, giving you a clearer, semantic way to express primary/secondary/success/etc while keeping existing `Color` usage fully compatible. You can start using `Intent` immediately without changing your current styles.

`Color.Link` remains supported for backward compatibility but is now treated as button/alert-only; using it elsewhere will surface an IDE warning so you can catch it early. This keeps existing `Button` and `Alert` behavior intact while guiding you to more consistent coloring on other components.

### Tailwind 4 Upgrade

Blazorise.Tailwind has moved to the latest Tailwind CSS 4.0 release, bringing the new CSS‑first engine and a refreshed build pipeline that leans on the v4 entry format with `@import`, `@utility`, and `@theme` blocks. The upgrade keeps the familiar Blazorise look while giving you faster, cleaner utility generation and modern token-driven theming, with Flowbite still in the mix for rich components.

If you maintain your own Tailwind pipeline, this release is a great moment to mirror the new entry file and include the Blazorise build inputs so your app's utilities and Blazorise styles compile into a single output. Also make sure your safelist is wired in, since Blazorise uses some dynamic classnames that Tailwind won't see through content scanning alone; keeping that list connected ensures nothing disappears at build time.

### Bulma 1 Upgrade

This release updates the **Blazorise.Bulma** provider and demo to align with **Bulma 1.0.4**, bringing the styling baseline up to date and matching Bulma's modern CSS variable system. We revised the vendor Sass imports to include only the non-component utilities we need, trimmed legacy utilities, and adjusted class-provider mappings so spacing and helpers reflect the new utility naming. The upgrade was done to keep the provider compatible with current Bulma behavior, reduce custom overrides, and make future maintenance easier.

We shifted theme generation toward Bulma's native color palette logic instead of hardcoded hover/active/disabled values. Button states, tags, notifications, text helpers, inputs, background helpers, and borders now rely on Bulma's variables for native colors, while custom variants like secondary still get explicit rules. We also implemented Bulma-style palette and “on scheme” calculations so text colors match the contrast-driven behavior users expect from the official Bulma theme.

Along the way we fixed several layout and component issues exposed by the upgrade, including button group/dropdown borders and sizing, radio button groups alignment, and addon sizing in form demos. Breadcrumb active styling now follows Bulma's active color logic, and navbar text contrast uses Bulma's invert variables so backgrounds and text stay in harmony. The result is a cleaner integration that behaves like Bulma out of the box while preserving Blazorise-specific features.

## Typed Classes Customization & Per-Utility Targeting

This release adds typed `Classes` and `Styles` maps for complex components, so you can target wrapper and inner elements (`Self`, `Wrapper`, `Content`, etc.) without relying on fragile CSS selectors. Utility helpers now support per-utility targeting via `OnSelf`/`OnWrapper`, with `UtilityTarget` remaining the default, making it easier to direct spacing and other utilities to the correct element across providers.

The [styling documentation](docs/helpers/utilities/styling) has been expanded with clearer guidance, a `UtilityTarget` example, and a provider support matrix to help users understand which keys apply per component and provider configuration.

## DataGrid Template Contexts

In Blazorise 2.0 we updated DataGrid template contexts for `SortDirectionTemplate`, `DisplayTemplate`, `EmptyCellTemplate`, and `DetailRowTemplate` to use dedicated context objects instead of passing raw items or enums. We did this to make template APIs more consistent and to expose the extra metadata that template authors were repeatedly reaching for via custom lookups or casts.

For users, this means templates can make richer UI decisions with less boilerplate: you now get direct access to the row item plus helpful details like the column, row index, formatted display value, and sort state in one place. The result is simpler template code, fewer fragile casts, and more flexibility when customizing DataGrid visuals.

## LoadingIndicator Status

This release adds `SetStatus` to `Blazorise.LoadingIndicator`, letting you push status text and optional progress updates through the service or component so the UI can reflect multi‑step work in real time. IndicatorTemplate now receives a `LoadingIndicatorContext` derived from the current status, making it straightforward to render custom messages (and progress) alongside your spinner while keeping the existing API surface clean and flexible for both local and application‑wide indicators.

## Accessibility Improvements Across Inputs, Layouts, and Providers

This update expands Blazorise accessibility coverage without breaking existing APIs by wiring core input ARIA semantics consistently across all providers and extensions. Input components now expose typed `AriaInvalid` and `AriaDescribedBy` parameters, and the framework automatically falls back to validation and field help metadata when you don't specify them. This means screen readers can reliably announce validation errors and help text, while advanced users can still override ARIA explicitly. Autocomplete and rich text/markdown inputs now propagate these ARIA values to their primary interactive surfaces, and the change is aligned across Bootstrap, Bootstrap5, Bulma, AntDesign, FluentUI2, Material, and Tailwind.

We also brought interactive, non‑input UI elements in line with ARIA expectations across providers: accordions, dropdowns, modals, offcanvas panels, tabs, pagination, toasts, alerts, and validation messages now emit consistent aria-expanded/controls, dialog labeling, live region behavior, and role metadata. These changes improve keyboard and assistive technology behavior while preserving provider-specific rendering. In short, you get a more accessible baseline out of the box, fewer manual ARIA tweaks in app code, and a consistent experience regardless of which UI provider you use.

## MCP Server

For Blazorise 2.0, we've introduced an MCP (Model Context Protocol) server that allows AI tools to access Blazorise documentation and code examples directly, in a structured and up-to-date way. Instead of relying on incomplete or outdated model knowledge, MCP-compatible clients can query the same documentation developers read, down to individual pages and example snippets, at the moment a question is asked.

For users, this means more accurate answers when working with Blazorise components, fewer hallucinated APIs, and guidance that reflects the current state of the framework. As AI-assisted development becomes more common, the MCP server ensures that Blazorise integrations remain predictable, trustworthy, and aligned with the official documentation.

## Final Notes 🏁

Blazorise 2.0 introduces a consistent, modernized input system and simpler APIs that make form handling easier and more intuitive.
Review your input components and update bindings for a smooth migration.