---
title: Announcing Blazorise 2.1 - Mosor
description: Blazorise 2.1, codenamed Mosor after the majestic mountain range in Croatia, is a significant update that brings a host of new features, enhancements, and optimizations to the framework. This release focuses on improving the developer experience, enhancing performance, and expanding the capabilities of Blazorise components.
permalink: /news/release-notes/210
canonical: /news/release-notes/210
image-url: img/v210.jpg
image-title: Announcing Blazorise 2.1 - Mosor
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-04-07
read-time: 8 min
pinned: true
---

# Blazorise 2.1 - Release Notes

Blazorise 2.1, codenamed **Mosor** after the majestic mountain range in Croatia, is a significant update that brings a host of new features, enhancements, and optimizations to the framework. 

## Key Blazorise 2.1 Highlights 💡

Below is an overview of the most important additions and changes in this release:

- **Material 3 Provider**: New design system based on Google Material 3 design system.
- **AntDesign v6 Provider**: Major modernization for visuals, theming, and component behavior.
- **DataGrid Self Reference**: Show hierarchical data inside of DataGrid.
- **PdfViewer**: Now Supports Password-Protected PDFs.
- **BarDropdownToggle**: Combined link and toggle.
- **PasswordStrength**: For detailed password UX.

## Upgrading from 2.0.x to 2.1 👨‍🔧

To smoothly upgrade your application, follow these simple steps:

Update all **Blazorise.*** package references to **2.1**.

Blazorise should work without any major breaking changes to the API.

## New Features & Enhancements 🚀

### Material 3 Provider (New)

Blazorise now introduces a **Material 3 design system provider**, bringing support for Google's latest Material design guidelines to the framework.

This new provider replaces the legacy **Material theme that was previously built on Bootstrap 4**. That implementation had been unmaintained for several years and had fallen behind both the Blazorise ecosystem and modern design standards. While we initially considered keeping it for compatibility, maintaining it alongside the rest of the framework proved impractical. The new provider ensures a modern, sustainable Material implementation moving forward.

Development originally started using **BeerCSS** as a foundation. It provided a promising base for quickly experimenting with Material 3 styling and component structure. However, as we began integrating it into real-world applications, its limitations became apparent. Larger applications require consistent layout behavior, predictable spacing, and a broader set of UI components. In practice we encountered issues such as inconsistent placements, spacing differences, and missing components needed for production scenarios.

As a result, Blazorise significantly extends that foundation. The new provider introduces **many custom CSS rules and layout adjustments** to ensure consistent behavior across components, as well as **additional components not present in BeerCSS**. In practice, the Material 3 provider should be considered a **full Blazorise implementation of the Material 3 design system**, rather than a simple wrapper around an external library.

From an API perspective, **all existing Blazorise component APIs remain unchanged**. Applications using Blazorise components will continue to work the same way from a code standpoint. However, if your project relied on **custom CSS targeting the previous Bootstrap-based Material styles**, those overrides will likely need to be updated to match the new structure.

With this release, Blazorise becomes **the first Blazor component library providing a Material 3–compliant design system**, offering a modern visual foundation for building Blazor applications going forward.

### AntDesign v6 Provider

This release brings a major modernization of the **Blazorise.AntDesign** provider, aligning it more closely with the structure, styling, and behavior of modern **Ant Design v6**. Large parts of the provider were updated from older v4-era assumptions to newer markup, classes, and **CSS variable token-based styling**, resulting in a more accurate Ant Design look and feel across the component library.

The update includes broad improvements across buttons, sliders, navigation, forms, tables, popups, and responsive layouts. Styling now relies more on native **Ant Design CSS variables** and less on legacy Sass theme maps, making runtime theming more consistent and maintainable. Alongside the visual refresh, this release also delivers many fixes and usability improvements in areas such as validation, overlays, mobile behavior, menus, and component interaction polish.

### RichTextEdit Improvements

This release brings several improvements to the **RichTextEdit** component, with a focus on cleaner pasted content and more flexible editor configuration.

A notable addition is `UseSanitizedPaste`, which enables sanitization of pasted HTML so that only tags supported by the editor are preserved. This is especially useful when users paste content from external sources such as websites, office documents, or other editors, where the resulting markup often contains unsupported or unnecessary elements. By trimming pasted HTML to a supported set of tags, RichTextEdit helps maintain cleaner output, more consistent formatting, and better control over stored content.

We have also added **per-component control over plugin loading**. Previously, plugin configuration was only available at the global level, which made it difficult to tailor editor behavior for different scenarios within the same application. With this release, plugins can now be configured individually for each RichTextEdit instance.

This allows you to keep one editor minimal while enabling a richer plugin set in another, depending on the needs of each form or workflow.

### DataGrid Self Reference

One of the most requested features is finally here. DataGrid Self Reference mode allows you to display hierarchical data structures directly within the DataGrid, enabling parent–child relationships from a single data source. Items can reference other items in the same collection (for example via ParentId → Id), allowing you to naturally represent structured data without reshaping or duplicating it.

This makes it possible to build rich hierarchical interfaces similar to a Tree View, but with the full power of a table. You can combine expandable tree-like rows with standard DataGrid capabilities such as sorting, filtering, templating, editing, and paging, delivering both clarity and flexibility in one unified component.

With Self Reference mode, hierarchical data becomes a first-class DataGrid scenario, simplifying implementation while keeping the experience powerful and consistent.

### PdfViewer Password Prompt

Blazorise `PdfViewer` now supports opening password-protected PDF documents directly in-app. When an encrypted file is loaded, the viewer detects that a password is required and triggers a password request flow instead of failing silently. By default, this flow uses `ModalService` to show a built-in prompt, allowing end users to enter the password and continue reading the document without leaving the current workflow.

For teams that need custom UX, the feature also includes an extensibility API so developers can handle password requests with their own dialog or interaction pattern, while still using the same secure loading pipeline. We also added prompt validation and localization-ready text support through `PasswordPromptOptions`, so labels and messages can match your app language and style. Full usage examples and API details are available in the [PdfViewer documentation](docs/extensions/pdfviewer).

### PDF Viewer Download Prompt

Downloading from the PDF Viewer now gives you meaningful file names instead of always saving as `document.pdf`. The viewer can automatically suggest a name based on the PDF's metadata (such as document title) or the source file name, making it much easier to keep multiple downloads organized.

You can also enable a filename prompt before download so users can review and change the name in place. The prompt is localized, supports validation, and still keeps downloads simple for users who just want to click once and save.

### BarDropdownToggle: Smoother Sidebar Navigation

`BarDropdownToggle` has been significantly improved for sidebar and nested menu scenarios. You can now use it as both a navigation link and a dropdown trigger, so users can follow a route and still expand or collapse child items from the same control. Active-route highlighting now follows link matching rules more reliably, and click handling has been refined so expanding a menu is less likely to trigger unwanted navigation.

Customization has also expanded in a user-facing way. Teams can now control dropdown toggle icon behavior more precisely, including hiding the icon when needed and configuring icon appearance through theme options. In practice, this makes side navigation feel cleaner, more predictable, and easier to align with each app's visual style across supported UI providers.

### PasswordStrength Component

This release introduces `PasswordStrength`, a new password input component designed to help users create stronger passwords in real time. It behaves like a standard text input while adding live strength scoring, rule-by-rule guidance, optional show/hide password toggle, and seamless integration with Blazorise validation flows so error and success feedback appear where users expect them.

`PasswordStrength` is fully localizable and rule-driven, letting you configure requirements such as minimum length, uppercase, lowercase, numbers, special characters, and blocked/common password checks. The component also supports visual customization through dedicated classes and styles APIs, including configurable colors for the toggle button and rule states, and now relies on provider-specific addons validation behavior to ensure consistent rendering across UI providers without leaking provider-incompatible validation classes.

### RangeSlider Component

This release introduces `RangeSlider`, a new generic Blazorise input component for selecting a numeric range with two handles. It is built around a strongly typed `RangeSliderValue<TValue>`, making it easier to work with range values in a clear and type-safe way.

`RangeSlider` includes support for `Min`, `Max`, and `Step`, along with optional **value tooltips** and **accessible handle labels** for improved usability. It also provides configurable behavior for how the two handles interact, including options such as `ClampToOtherHandle` and `AllowEqualValues`, with drag clamping to ensure smooth and predictable interaction while dragging.

The component is fully integrated across supported Blazorise UI providers, with provider-specific styling and renderers, as well as theme color support for consistent visual integration with the rest of your application.

### TransferList Improvements

You can now define **custom Start and End captions**, allowing each side of the transfer list to better reflect the meaning of its contents in your specific workflow. This makes the component clearer in scenarios where the default labels are too generic or do not match the domain language of the application.

We have also introduced **additional parameters for controlling visual and interaction details**, including options for configuring **icon names, icon sizes, and related UI elements**. These additions provide more flexibility when aligning TransferList with your application's design system or when fine-tuning the component for specific usability needs.

Overall, these enhancements make TransferList more adaptable, easier to integrate into custom interfaces, and better suited for applications that require more control over component presentation.

### Field Accessibility Improvements

This release improves **Field-based form accessibility** by automatically associating labels, help text, and validation metadata with the correct controls, reducing manual setup while producing more accessible markup by default.

We added automatic `FieldLabel` linking for standard `Field` layouts, including automatic use of the HTML `for` attribute for labelable controls and `aria-labelledby` for non-labelable controls such as `ColorPicker`, `RadioGroup`, `RichTextEdit`, `Markdown`, and `SignaturePad`. We also introduced explicit `AriaLabelledBy` support and refactored ARIA handling to rely on resolved getters rather than mutable backing state, resulting in more predictable behavior.

To give developers centralized control, this release adds `BlazoriseAccessibilityOptions` under `BlazoriseOptions`, with global switches for automatic `for`, `aria-labelledby`, `aria-invalid`, and `aria-describedby` behavior. These options are **enabled by default**.

Automatic linking works best when a `Field` contains **one primary interactive control**. For custom or ambiguous layouts, explicit `FieldLabel.For` remains available.

### Scheduler Slot Styling

Scheduler now supports custom slot styling through the new `SlotStylingTemplate` parameter. The template receives a `SchedulerSlotContext` with slot details such as `Start`, `End`, `Section`, and a mutable `SchedulerSlotStyling` object, allowing styles and classes to be applied dynamically per slot. This makes it easier to highlight working hours, unavailable periods, special dates, or other scheduler ranges across day, week, work-week, and month views without replacing the built-in slot rendering.

### OneTimeInput

A new component in **Blazorise.Components** designed for entering **one-time passwords (OTPs), verification codes, and other short grouped tokens**.

`OneTimeInput` supports configurable slot counts through `Digits`, as well as custom visual grouping with `Group`, making it easy to adapt the component to different code formats and UX requirements. It also includes automatic focus movement while typing, multi-character paste distribution across slots, and keyboard navigation, providing a smooth and user-friendly input experience.

The component is fully integrated with the standard **Blazorise validation pipeline**, making it straightforward to use in forms that require validation, feedback, and consistent behavior alongside other Blazorise inputs.

## Semantic Form Grouping

This release adds support for **semantic form grouping** in Blazorise by allowing the existing `Field` and `Fields` components to opt into **grouped behavior**. When used in this mode, `FieldLabel` and `FieldsLabel` render a `legend`, making grouped scenarios such as **radio groups, checkbox groups, and multi-input sections** fit naturally into the existing Blazorise form API.

This improves accessibility by integrating grouped labels with the current `aria-labelledby` behavior, allowing related controls to be associated more clearly with their group label. At the same time, `FieldSet` and `Legend` remain available as **standalone native wrappers**, so semantic HTML can still be used directly without inheriting `Field` or `FieldLabel` behavior.

To support these scenarios, `FieldSet` and `Legend` include dedicated class-provider support for **horizontal layouts, validation states, required indicators, and screen reader styling**. This release also adds **documentation, demos, and test coverage** for the new grouped form patterns.

## Final Notes

We are thrilled to bring you Blazorise 2.1 with so many new features and improvements. This release reflects our commitment to continuously enhancing the framework based on community feedback and evolving application needs.