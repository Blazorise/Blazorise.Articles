---
title: Maintenance release: Blazorise 1.5.3
description: We are pleased to announce the release of version 1.5.3, which includes important bug fixes and enhancements. This release focuses on improving stability and addressing key issues identified by our user community.
permalink: /news/release-notes/153
canonical: /news/release-notes/153
image-url: img/v153.png
image-title: Maintenance release: Blazorise 1.5.3
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2024-04-22
read-time: 3 min
---

# Maintenance release: Blazorise 1.5.3

It's been a while, but we're excited to bring you the latest version of Blazorise! In version 1.5.3, we've focused on resolving numerous bugs and enhancing the overall stability and performance of the framework. Here are the most significant fixes included in this release:

## Major Improvements in 1.5.3

### DataGrid Aggregation Issue

The aggregate on a specific column was not correctly moved when multiple groupings were applied. We have corrected the logic to ensure that column aggregates are now properly aligned, even with multiple groupings, providing accurate data representation and analysis.

### DatePicker Error Message

Error handling for the DatePicker has been improved, ensuring that error messages are now displayed correctly, helping users to identify and correct input errors promptly.

### Video DRM ProtectionHttpRequestHeaders Issue

There was a problem with the HTTP request headers when using Video DRM protection, affecting media playback and security. The HTTP request headers for DRM-protected video content have been fixed, ensuring secure and smooth media playback.

## Additional Improvements

Along with the major fixes, we have addressed several other bugs and made minor improvements to enhance the overall user experience and functionality of Blazorise. We appreciate your patience and continuous support as we work to make Blazorise better with each update.

We encourage you to update to version 1.5.3 to benefit from these fixes and improvements. As always, please report any issues or provide feedback to help us continue improving.

- [#5475](https://github.com/Megabit/Blazorise/pull/5475): DataGrid: Fix Localization FilterMethods
- [#5494](https://github.com/Megabit/Blazorise/pull/5494): InputMask: update to latest 5.0.9-beta.67
- [#5480](https://github.com/Megabit/Blazorise/issues/5480): [Bug]: DataGrid - Aggregate on specific column is not correctly moved with multiple groupings
- [#5424](https://github.com/Megabit/Blazorise/issues/5424): [Bug]: Auto Generate Columns conflict with dynamic columns
- [#5496](https://github.com/Megabit/Blazorise/issues/5496): [Docs] TreeView: Mention how Nodes is a one way binding
- [#5403](https://github.com/Megabit/Blazorise/issues/5403): [Blog] How to implement validation with Captcha component
- [#5500](https://github.com/Megabit/Blazorise/issues/5500): [Bug]: DatePicker doesn't show error message
- [#5481](https://github.com/Megabit/Blazorise/issues/5481): [Bug]: DatePicker showing calendar at wrong position using Bootstrap 5
- [#4097](https://github.com/Megabit/Blazorise/issues/4097): DatePicker is setting the wrong date when typed in
- [#5522](https://github.com/Megabit/Blazorise/issues/5522): [Bug]: Closing badges within modal closes the modal
- [#5520](https://github.com/Megabit/Blazorise/issues/5520): [Bug]: Button loading Spinner is very close to text
- [#5529](https://github.com/Megabit/Blazorise/issues/5529): [Bug]: 'bi-' prefix removed from Bootstrap css class names in BootstrapIcons.cs
- [#5471](https://github.com/Megabit/Blazorise/issues/5471): Show licensing messages based on a license state
- [#5463](https://github.com/Megabit/Blazorise/issues/5463): [Bug]: Autocomplete keyboard navigation doesn't work for Tailwind
- [#5508](https://github.com/Megabit/Blazorise/issues/5508): [Bug]: DatePicker validaton not working for Dates
- [#5509](https://github.com/Megabit/Blazorise/issues/5509): [Bug]: The DropDown size cannot be changed with version 1.52 and FluentUI
- [#5478](https://github.com/Megabit/Blazorise/issues/5478): [Bug] Video DRM ProtectionHttpRequestHeaders issue
- [#5462](https://github.com/Megabit/Blazorise/issues/5462): [Bug]: AntDesign - badges colors do not work
- [#5542](https://github.com/Megabit/Blazorise/pull/5542): Cropper: update to 2.0.0-rc
- [#5017](https://github.com/Megabit/Blazorise/issues/5017): [Bug]: Placeholder Attribute fo FileEdit for Bootstrap5 is not working
- [#5454](https://github.com/Megabit/Blazorise/issues/5454): Using FluentUI2: Unable to change Modal size
- [#4719](https://github.com/Megabit/Blazorise/issues/4719): Optimize use of JS Interop for Button

## Feedback

Your feedback and contributions are what make the Blazorise community thrive. Please continue sharing your experiences, bug reports, and feature requests. Every input helps shape Blazorise for the better.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise **1.5.x** releases. We encourage all users to upgrade to **1.5.3**.

If you experience any unexpected behavior change in your projects after upgrading to 1.5.3, please [file an issue on GitHub](https://github.com/Megabit/Blazorise/issues).

## Commercial Support

Blazorise, an open-source component library, is maintained by Megabit Ltd, a small organization based in Croatia. We are strong advocates of the open-source ecosystem, which is why we offer Blazorise through our Community licenses at no cost. However, if you are part of a large organization and would like to support the project, we suggest purchasing a commercial license to help us maintain a sustainable business. This will enable us to continue developing Blazorise.

With a commercial license, you will have access to premium forum support, private repositories and community-licensed themes. To learn more about commercial licenses, please visit our website at [Blazorise Commercial](https://blazorise.com/commercial).
