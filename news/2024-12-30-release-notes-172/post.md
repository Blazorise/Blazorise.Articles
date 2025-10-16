---
title: Maintenance release: Blazorise 1.7.2
description: We're excited to announce the maintenance release of Blazorise 1.7.2! This release includes several bug fixes, enhancements, and updates to improve your development experience and streamline our documentation process.
permalink: /news/release-notes/172
canonical: /news/release-notes/172
image-url: img/v172.png
image-title: Maintenance release: Blazorise 1.7.2
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2024-12-30
read-time: 3 min
---

# Maintenance release: Blazorise 1.7.2

The Blazorise team is excited to announce the release of version 1.7.2, featuring a series of important bug fixes and improvements to enhance the stability, usability, and performance of the framework. This update addresses critical issues reported by the community and ensures a more seamless experience for developers building modern web applications with Blazorise.

## What's New in 1.7.2

### Documentation Improvements

Fixed an issue in the documentation where certain component names were incorrectly displayed or referenced. This ensures better accuracy and usability for developers referencing the documentation.

### Improved Table Resizing

Addressed multiple issues with table resizing and the Resizable feature to enhance functionality and compatibility:

- Fixed an issue where table resizing did not work in responsive mode, ensuring seamless adjustments across various screen sizes.
- Resolved compatibility problems with the Resizable feature when using the Bootstrap 5 provider, ensuring consistent behavior across supported frameworks.
- Improved column resizing behavior to prevent neighboring columns from shrinking improperly and added horizontal scrollbar visibility for better usability in wide tables. These updates collectively provide a smoother and more reliable resizing experience for developers and end-users alike.

### NumericPicker Alignment

Fixed a visual misalignment issue with the NumericPicker component that caused elements to appear out of place. This update restores proper alignment across supported themes for a cleaner user interface.

## Additional Improvements

Along with the major fixes, we have addressed several other bugs and made minor improvements to enhance the overall user experience and functionality of Blazorise. We appreciate your patience and continuous support as we work to make Blazorise better with each update.

We encourage you to update to version 1.7.2 to benefit from these fixes and improvements. As always, please report any issues or provide feedback to help us continue improving.

- [#5889](https://github.com/Megabit/Blazorise/issues/5889): Docs: invalid component name
- [#5770](https://github.com/Megabit/Blazorise/issues/5770): [Bug]: Different behavior of autocomplete in production
- [#5790](https://github.com/Megabit/Blazorise/issues/5790): [Bug]: Enter on filter field submits form
- [#5888](https://github.com/Megabit/Blazorise/issues/5888): [Bug]: NumericPicker alignment
- [#5905](https://github.com/Megabit/Blazorise/issues/5905): [Bug]: ColorPicker does not accept empty color
- [#5907](https://github.com/Megabit/Blazorise/issues/5907): Table resizing doesn't work in responsive mode
- [#5904](https://github.com/Megabit/Blazorise/issues/5904): [Bug]: Resizable: Resizable not working using bootstrap5
- [#5216](https://github.com/Megabit/Blazorise/issues/5216): [Bug]: I want to drag the column width, but when the dragged column becomes wider, other columns will become narrower, and no scroll bar will appear in the horizontal direction.
- [#5847](https://github.com/Megabit/Blazorise/issues/5847): Bug]: Change options for Cropper

## Feedback

Your feedback is essential to us, and we appreciate your continued support and contributions to Blazorise. If you have any questions, suggestions, or feedback, please feel free to reach out to us on.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise **1.6.x** releases. We encourage all users to upgrade to **1.7.2**.

If you experience any unexpected behavior change in your projects after upgrading to 1.7.2, please [file an issue on GitHub](https://github.com/Megabit/Blazorise/issues).

## Commercial Support

Blazorise, as an open-source project, relies on the support and contributions of our user community. We offer commercial licenses to help fund the ongoing development and maintenance of Blazorise. Your support is essential to ensuring the continued growth and success of Blazorise.

With a commercial license, you will have access to premium forum support, private repositories and community-licensed themes. To learn more about commercial licenses, please visit our website at [Blazorise Commercial](https://blazorise.com/commercial).
