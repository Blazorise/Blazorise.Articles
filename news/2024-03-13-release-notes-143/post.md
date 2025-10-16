---
title: Maintenance release: Blazorise 1.4.3
description: We are pleased to announce the release of version 1.4.3, which includes important bug fixes and enhancements. This release focuses on improving stability and addressing key issues identified by our user community.
permalink: /news/release-notes/143
canonical: /news/release-notes/143
image-url: img/v143.png
image-title: Maintenance release: Blazorise 1.4.3
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2024-03-13
read-time: 3 min
---

# Maintenance release: Blazorise 1.4.3

We're excited to announce the release of Blazorise version 1.4.3. This update includes critical bug fixes and enhancements to improve your development experience and the performance of your Blazorise applications. Here's what's new:

## What's New in 1.4.3

### AntDesign SelectList size calculation

Resolved an issue where the SelectList component in the AntDesign provider was calculating the wrong offset/size.

### NotificationService IntervalBeforeClose

Addressed the bug where the **IntervalBeforeClose** parameter was not being respected in the NotificationService, causing notifications not to close as expected.

### ModalProvider Parameter Reference Loss

Fixed an issue with ModalProvider losing parameter references when closing a popup, leading to inconsistent state behavior.

## Detailed list of changes

- [#5280](https://github.com/Megabit/Blazorise/issues/5280): [Bug]: AntDesign SelectList calculatest wrong offset / size
- [#5310](https://github.com/Megabit/Blazorise/issues/5310): [Bug]: Null Reference Exception in Carousel when navigating away while carousel is animating
- [#5311](https://github.com/Megabit/Blazorise/issues/5311): [Bug]: IntervalBeforeClose does not work in NotificationService
- [#5288](https://github.com/Megabit/Blazorise/issues/5288): [Bug]: ModalProvider loses parameter reference when closing popup
- [#5335](https://github.com/Megabit/Blazorise/pull/5335): Autocomplete: Only ResyncText if not Multiple
- [#5332](https://github.com/Megabit/Blazorise/issues/5332): [Bug]: DataGrid batch edit SOMETIMES saves if using tab in In cell mode
- [#5339](https://github.com/Megabit/Blazorise/issues/5339): DataGrid grouping example confusing
- [#5338](https://github.com/Megabit/Blazorise/issues/5338): [Bug]: Width and Height .Is66/.Is33 properties do not work for Bootstrap 5

## Feedback

Your feedback and contributions are what make the Blazorise community thrive. Please continue sharing your experiences, bug reports, and feature requests. Every input helps shape Blazorise for the better.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise **1.4.x** releases. We encourage all users to upgrade to **1.4.3**.

If you experience any unexpected behavior change in your projects after upgrading to 1.4.3, please [file an issue on GitHub](https://github.com/Megabit/Blazorise/issues).

## Commercial Support

Blazorise, an open-source component library, is maintained by Megabit Ltd, a small organization based in Croatia. We are strong advocates of the open-source ecosystem, which is why we offer Blazorise through our Community licenses at no cost. However, if you are part of a large organization and would like to support the project, we suggest purchasing a commercial license to help us maintain a sustainable business. This will enable us to continue developing Blazorise.

With a commercial license, you will have access to premium forum support, private repositories and community-licensed themes. To learn more about commercial licenses, please visit our website at [Blazorise Commercial](https://blazorise.com/commercial).
