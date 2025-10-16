---
title: Maintenance release: Blazorise 1.3.2
description: This blog post contains the changelog of the most recent bug fixes included in the Blazorise v1.3.2 release.
permalink: /news/release-notes/132
canonical: /news/release-notes/132
image-url: img/v132.png
image-title: Maintenance release: Blazorise 1.3.2
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2023-10-18
read-time: 3 min
---

# Maintenance release: Blazorise 1.3.2

Blazorise, your  go-to component library for Blazor, has just released a maintenance update packed with valuable improvements. Let's dive into the key highlights:

## What's New in 1.3.2

### Enhanced Validation

Validation is crucial, and Blazorise now ensures error messages defined on `ValidationError` take top priority. This means users get immediate feedback, making your forms more user-friendly and reliable.

### Safer RichTextEdit

RichTextEdit's JavaScript invocation has been fixed for increased stability. You can trust it to deliver seamless text editing and formatting experiences without unexpected hiccups.

### Autocomplete Fixes

Autocomplete is now more robust, whether for simple text suggestions or complex data selection. Expect a smoother user experience in various scenarios.

### Improved Documentation

Documentation is your guide to Blazorise. With these updates, we made some small adjustments to understand and use the library effectively, reducing your learning curve.

## Detailed list of changes

- [#4951](https://github.com/Megabit/Blazorise/issues/4951): Docs : Markdown : Example for shortcuts is wrong
- [#4973](https://github.com/Megabit/Blazorise/issues/4973): In the Autocomplete you can see what you are typing
- [#4886](https://github.com/Megabit/Blazorise/issues/4886): Docs : Datagrid : Missing RowStyling parameters
- [#4981](https://github.com/Megabit/Blazorise/issues/4981): Add FilterMethod to DataGridColumnInfo
- [#4995](https://github.com/Megabit/Blazorise/issues/4995): [Bug]: NullReferenceException in Blazorise Datagrid
- [#4955](https://github.com/Megabit/Blazorise/issues/4955): Blazorise Cropper component
- [#4975](https://github.com/Megabit/Blazorise/issues/4975): Autocomplete SearchBackground doesn't look right when using Multiple Attribute
- [#4940](https://github.com/Megabit/Blazorise/issues/4940): DatePicker show null placeholder
- [#4874](https://github.com/Megabit/Blazorise/issues/4874): Link to code in demos
- [#5015](https://github.com/Megabit/Blazorise/issues/5015): [Bug]: Size parameter not working on Figure component for Material provider
- [#5038](https://github.com/Megabit/Blazorise/issues/5038): Autocomplete issue
- [#5020](https://github.com/Megabit/Blazorise/pull/5020): RichTextEdit: Safe loading and invocation
- [#5051](https://github.com/Megabit/Blazorise/issues/5051): [Bug]: DataGrid Header Group breaks when none of the columns have a DisplayOrder attribute
- [#5041](https://github.com/Megabit/Blazorise/issues/5041): [Bug]: CSS Grid Columns and Rows are not Responsive
- [#5058](https://github.com/Megabit/Blazorise/issues/5058): [Bug]: CardDeck hardcoded to three cards
- [#4992](https://github.com/Megabit/Blazorise/issues/4992): [Bug]: Validation : ValidationError priority for error message | Should ChildContent have an higher priority
- [#5070](https://github.com/Megabit/Blazorise/issues/5070): [Bug]: UseValidation = "true" make DataGridSelectColumn replace the select component with a normal text box when editing a row.
- [#5063](https://github.com/Megabit/Blazorise/issues/5063): Using material: ModalSize.Extralarge is same width as ModalSize.FullScreen
- [#5073](https://github.com/Megabit/Blazorise/issues/5073): Bind DatagridSelectColumn to an Enum Field (cast error)

## Feedback

Your feedback and contributions are what make the Blazorise community thrive. Please continue sharing your experiences, bug reports, and feature requests. Every input helps shape Blazorise for the better.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise **1.3.x** releases. We encourage all users to upgrade to **1.3.2**.

If you experience any unexpected behavior change in your projects after upgrading to 1.3.2, please [file an issue on GitHub](https://github.com/Megabit/Blazorise/issues).

## Commercial Support

Blazorise, an open-source component library, is maintained by Megabit Ltd, a small organization based in Croatia. We are strong advocates of the open-source ecosystem, which is why we offer Blazorise through our Community licenses at no cost. However, if you are part of a large organization and would like to support the project, we suggest purchasing a commercial license to help us maintain a sustainable business. This will enable us to continue developing Blazorise.

With a commercial license, you will have access to premium forum support, private repositories and community-licensed themes. To learn more about commercial licenses, please visit our website at [Blazorise Commercial](https://blazorise.com/commercial).
