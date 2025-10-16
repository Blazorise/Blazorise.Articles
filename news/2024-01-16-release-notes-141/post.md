---
title: Maintenance release: Blazorise 1.4.1
description: We are pleased to announce the release of version 1.4.1, which includes important bug fixes and enhancements. This release focuses on improving stability and addressing key issues identified by our user community.
permalink: /news/release-notes/141
canonical: /news/release-notes/141
image-url: img/v141.png
image-title: Maintenance release: Blazorise 1.4.1
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2024-01-16
read-time: 3 min
---

# Maintenance release: Blazorise 1.4.1

We are pleased to announce the release of version 1.4.1, which includes important bug fixes and enhancements. This release focuses on improving stability and addressing key issues identified by our user community.

## What's New in 1.4.1

### Fix for Invalid Filename in inputmask.js

Corrected the script reference for inputmask.js to fix loading errors caused by an invalid filename.

### TimePicker Default Display Value Null

Modified the TimePicker component to provide a more intuitive default display, addressing the issue of it showing a Null value initially.

### DataGridColumn Numeric Type Detection

Enhanced the DataGridColumn's type detection to accurately recognize and handle various numeric types, resolving the issue of incorrect value type determination.

## Detailed list of changes

- [#5173](https://github.com/Megabit/Blazorise/issues/5173): [Bug]: TimePicker default display value Null (instead of an empty string)
- [#5189](https://github.com/Megabit/Blazorise/issues/5189): [Bug]: content/Blazorise/inputmask.js?v=1.7.5.0 404 Not Found
- [#5188](https://github.com/Megabit/Blazorise/issues/5188): [Bug]: Ant Design Bar background does not work on sider bar
- [#5217](https://github.com/Megabit/Blazorise/issues/5217): DataGridColumn is not figuring out the correct value type for numeric types.
- [#5199](https://github.com/Megabit/Blazorise/issues/5199): [Bug]: Ant Design Datagrid page size selection doesn't show list
- [#5222](https://github.com/Megabit/Blazorise/issues/5222): [Bug]: AntDesign is currently broken
- [#5202](https://github.com/Megabit/Blazorise/issues/5202): [Bug]: Carousel : Back/Next buttons are a bit unresponsive
- [#5226](https://github.com/Megabit/Blazorise/issues/5226): [Bug]: AntDesign Carousel page on demo does not seem to render any images at all

## Feedback

Your feedback and contributions are what make the Blazorise community thrive. Please continue sharing your experiences, bug reports, and feature requests. Every input helps shape Blazorise for the better.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise 1.4.x releases. We encourage all users to upgrade to 1.4.1.

If you experience any unexpected behavior change in your projects after upgrading to 1.4.1, please file an issue on GitHub.

## Commercial Support

Blazorise, an open-source component library, is maintained by Megabit Ltd, a small organization based in Croatia. We are strong advocates of the open-source ecosystem, which is why we offer Blazorise through our Community licenses at no cost. However, if you are part of a large organization and would like to support the project, we suggest purchasing a commercial license to help us maintain a sustainable business. This will enable us to continue developing Blazorise.

With a commercial license, you will have access to premium forum support, private repositories and community-licensed themes. To learn more about commercial licenses, please visit our website at Blazorise Commercial.
