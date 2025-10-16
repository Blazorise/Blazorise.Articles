---
title: Maintenance release: Blazorise 1.5.2
description: We are pleased to announce the release of version 1.5.2, which includes important bug fixes and enhancements. This release focuses on improving stability and addressing key issues identified by our user community.
permalink: /news/release-notes/152
canonical: /news/release-notes/152
image-url: img/v152.png
image-title: Maintenance release: Blazorise 1.5.2
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2024-04-22
read-time: 3 min
---

# Maintenance release: Blazorise 1.5.2

The latest update to Blazorise focuses on enhancing the developer experience by delivering key updates and resolving critical bugs, without adding new features. This release concentrates on improving component functionality, security, and usability, refining the framework to ensure a more seamless development process.

## What's New in 1.5.2

### RichTextEdit Enhancement:

The RichTextEdit component has been updated to leverage Quill JS 2.0. This upgrade provides improved performance and additional features for a better rich text editing experience.

### DataGrid Navigation Issue

Resolved an issue where tab navigation in DataGrid was broken when BatchEdit was set to true. Users can now navigate between cells using the tab key without any interruptions in batch edit mode.

### Video Component - Custom Captions

Fixed a bug in the Video component where the mapping of options for custom captions was not functioning correctly. Custom captions should now properly align with the specified options.

## Detailed list of changes

- [#5385](https://github.com/Megabit/Blazorise/issues/5385): [Bug]: Tab navigation in DataGrid broken when BatchEdit=true
- [#5438](https://github.com/Megabit/Blazorise/issues/5438): [Bug]: RichTextEdit.SubmitOnEnter on longer working
- [#5445](https://github.com/Megabit/Blazorise/issues/5445): [Bug]: DatePicker/TimePicker valdation still not working
- [#5435](https://github.com/Megabit/Blazorise/issues/5435): [Bug]: Datagrid border not visible when Fixed header
- [#5469](https://github.com/Megabit/Blazorise/issues/5469): RichTextEdit: update to Quill v2.0
- [#5452](https://github.com/Megabit/Blazorise/issues/5452): Video: Fix custom captions

## Feedback

Your feedback and contributions are what make the Blazorise community thrive. Please continue sharing your experiences, bug reports, and feature requests. Every input helps shape Blazorise for the better.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise 1.5.x releases. We encourage all users to upgrade to 1.5.2.

If you experience any unexpected behavior change in your projects after upgrading to 1.5.2, please file an issue on GitHub.

## Commercial Support

Blazorise, an open-source component library, is maintained by Megabit Ltd, a small organization based in Croatia. We are strong advocates of the open-source ecosystem, which is why we offer Blazorise through our Community licenses at no cost. However, if you are part of a large organization and would like to support the project, we suggest purchasing a commercial license to help us maintain a sustainable business. This will enable us to continue developing Blazorise.

With a commercial license, you will have access to premium forum support, private repositories and community-licensed themes. To learn more about commercial licenses, please visit our website at Blazorise Commercial.
