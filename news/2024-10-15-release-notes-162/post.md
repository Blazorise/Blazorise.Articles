---
title: Maintenance release: Blazorise 1.6.2
description: We are pleased to announce the release of version 1.6.2, which includes important bug fixes and enhancements. This release focuses on improving stability and addressing key issues identified by our user community.
permalink: /news/release-notes/162
canonical: /news/release-notes/162
image-url: img/v162.png
image-title: Maintenance release: Blazorise 1.6.2
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2024-10-15
read-time: 3 min
---

# Maintenance release: Blazorise 1.6.2

We are pleased to announce the release of version 1.6.2, which includes important bug fixes and enhancements. This release focuses on improving stability and addressing key issues identified by our user community. We encourage all users to update to this latest version to benefit from the improvements and fixes.

## Major Improvements in 1.6.2

### NumericPicker Step Issue

A bug was identified in the NumericPicker component, where using the up and down arrow keys caused the value to increment or decrement by 2 instead of the expected single-step behavior. This bug has been resolved, and the component now functions correctly, stepping by the correct increment value as intended.

### DatePicker Incorrect Days and Weeks

Users experienced a bug in the DatePicker component where incorrect days and weeks were displayed. This issue was causing confusion in selecting dates. The bug has been addressed, and the DatePicker now accurately reflects the correct calendar days and weeks for all users.

### Field and RadioGroup Buttons Issue

In Blazorise 1.6.1, an issue was identified affecting the layout and functionality of Field and RadioGroup buttons, specifically when using horizontal Field mode. The flex display was not functioning correctly, resulting in inconsistent alignment and interaction of these components. This bug has been resolved, ensuring that the Field and RadioGroup buttons now render and display properly in horizontal mode, with the flex layout working as intended. This fix enhances both the visual consistency and user interaction, providing a more reliable and responsive interface.

## Additional Improvements

Along with the major fixes, we have addressed several other bugs and made minor improvements to enhance the overall user experience and functionality of Blazorise. We appreciate your patience and continuous support as we work to make Blazorise better with each update.

We encourage you to update to version 1.6.2 to benefit from these fixes and improvements. As always, please report any issues or provide feedback to help us continue improving.

- [#5735](https://github.com/Megabit/Blazorise/issues/5735): [Bug]: NumericPicker is stepping by 2 using up/down arrow keys
- [#5707](https://github.com/Megabit/Blazorise/issues/5707): Docs: Example for IValidatableObject
- [#5629](https://github.com/Megabit/Blazorise/issues/5629): [Bug]: SignaturePad -- update SignaturePad.razor.cs to include latest vendor options: options.ratio
- [#5746](https://github.com/Megabit/Blazorise/issues/5746): [Bug]: Datepicker show not correct days and weeks
- [#5749](https://github.com/Megabit/Blazorise/issues/5749): [Bug]: Field and RadioGroup Buttons

## Feedback

Your feedback is essential to us, and we appreciate your continued support and contributions to Blazorise. If you have any questions, suggestions, or feedback, please feel free to reach out to us on.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise 1.6.x releases. We encourage all users to upgrade to 1.6.2.

If you experience any unexpected behavior change in your projects after upgrading to 1.6.2, please file an issue on GitHub.

## Commercial Support

Blazorise, as an open-source project, relies on the support and contributions of our user community. We offer commercial licenses to help fund the ongoing development and maintenance of Blazorise. Your support is essential to ensuring the continued growth and success of Blazorise.

With a commercial license, you will have access to premium forum support, private repositories and community-licensed themes. To learn more about commercial licenses, please visit our website at Blazorise Commercial.
