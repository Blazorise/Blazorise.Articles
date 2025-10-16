---
title: Maintenance release: Blazorise 1.4.2
description: We are pleased to announce the release of version 1.4.2, which includes important bug fixes and enhancements. This release focuses on improving stability and addressing key issues identified by our user community.
permalink: /news/release-notes/142
canonical: /news/release-notes/142
image-url: img/v142.png
image-title: Maintenance release: Blazorise 1.4.2
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2024-01-29
read-time: 3 min
---

# Maintenance release: Blazorise 1.4.2

We are excited to announce the release of Blazorise 1.4.2. This version focuses on enhancing functionality and addressing specific issues raised by our community.

## What's New in 1.4.2

### TreeView Duplicate Entries

Resolved an issue where the TreeView control was displaying duplicate entries. This fix ensures that each entry in the TreeView control is unique, improving data accuracy and user interface experience.

### DataGrid RowSelectable & DetailRowTrigger Conflict

Fixed a conflicting behavior in the DataGrid component when using RowSelectable alongside DetailRowTrigger. This update brings more coherent interaction within the DataGrid, ensuring that both functionalities can work in tandem without issues.

### AutoComplete Exception with Null SelectedTexts

Addressed a problem where the AutoComplete component threw exceptions when the SelectedTexts property was null or unbound and the Backspace key was pressed in an empty field. The component now handles such scenarios gracefully, enhancing its stability and usability.

## Detailed list of changes

- [#5221](https://github.com/Megabit/Blazorise/issues/5221): [Bug]: Blazorise TreeView control shows duplicate entries
- [#5233](https://github.com/Megabit/Blazorise/issues/5233): [Bug]: AutoComplete excepts when SelectedTexts is null or not bound and Backspace is pressed in an empty AutoComplete
- [#5253](https://github.com/Megabit/Blazorise/issues/5253): FilePicker dropdown is broken
- [#5251](https://github.com/Megabit/Blazorise/issues/5251): [Bug]: DataGrid Conflicting behaviour between RowSelectable & DetailRowTrigger
- [#5256](https://github.com/Megabit/Blazorise/pull/5256): Autocomplete with multiple not showing red outline | Adjust multiple validation
- [#5261](https://github.com/Megabit/Blazorise/issues/5261): [Bug]: Filterable="false" does not work on a DataGridColumn when DataGrid FilterMode="DataGridFilterMode.Menu"
- [#5268](https://github.com/Megabit/Blazorise/issues/5268): [Bug]: fileEdit.js and filePicker.js - drop event - do not recognize that the component is Disabled nor ReadOnly
- [#5186](https://github.com/Megabit/Blazorise/issues/5186): [Bug]: InputFormat overrides Placeholders and vice versa
- [#5250](https://github.com/Megabit/Blazorise/issues/5250): [Docs] Add missing html example for Tooltip
- [#5208](https://github.com/Megabit/Blazorise/issues/5208): [Bug]: SignaturePad component doesn't respond in a Stepper when placed after the first steppanel
- [#5169](https://github.com/Megabit/Blazorise/issues/5169): Bug]: Popper.js no longer required / update docs

## Feedback

Your feedback and contributions are what make the Blazorise community thrive. Please continue sharing your experiences, bug reports, and feature requests. Every input helps shape Blazorise for the better.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise **1.4.x** releases. We encourage all users to upgrade to **1.4.2**.

If you experience any unexpected behavior change in your projects after upgrading to 1.4.2, please [file an issue on GitHub](https://github.com/Megabit/Blazorise/issues).

## Commercial Support

Blazorise, an open-source component library, is maintained by Megabit Ltd, a small organization based in Croatia. We are strong advocates of the open-source ecosystem, which is why we offer Blazorise through our Community licenses at no cost. However, if you are part of a large organization and would like to support the project, we suggest purchasing a commercial license to help us maintain a sustainable business. This will enable us to continue developing Blazorise.

With a commercial license, you will have access to premium forum support, private repositories and community-licensed themes. To learn more about commercial licenses, please visit our website at [Blazorise Commercial](https://blazorise.com/commercial).
