---
title: Maintenance release: Blazorise 1.7.1
description: We're excited to announce the maintenance release of Blazorise 1.7.1! This release includes several bug fixes, enhancements, and updates to improve your development experience and streamline our documentation process.
permalink: /news/release-notes/171
canonical: /news/release-notes/171
image-url: img/v171.png
image-title: Maintenance release: Blazorise 1.7.1
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2024-12-10
read-time: 3 min
---

# Maintenance release: Blazorise 1.7.1

We're excited to announce the maintenance release of Blazorise 1.7.1! This release includes several bug fixes, enhancements, and updates to improve your development experience and streamline our documentation process.

## What's New in 1.7.1

### Support for Components Without a Parameterless Constructor

Previously, components in Blazor typically required a parameterless constructor due to limitations in the way the framework initializes and instantiates components. With this update, Blazorise now supports scenarios where components rely on constructors with parameters, enabling advanced use cases such as Dependency Injection.

### Documentation Improvements

In this release, we've updated all references to static files, such as stylesheets and scripts, to include query versioning. This change improves caching behavior and ensures that the correct versions of static assets are always loaded in your applications.

This improvement is particularly beneficial for production environments where browser caching can lead to unexpected behavior when static files are updated. With query versioning, you get the peace of mind that your app always uses the right resources.

### Automated API Documentation

We've introduced automation for generating and maintaining Blazorise API documentation, a significant step toward ensuring developers always have access to the most accurate and up-to-date information.

**Real-Time Accuracy**: With automation, API documentation reflects the current state of the Blazorise codebase, minimizing outdated or incorrect information.

**Reduced Maintenance Overhead**: Automated tools streamline the process of generating and updating documentation, allowing the Blazorise team to focus on feature development and bug fixes.

**Comprehensive Coverage** By integrating automation, we've expanded the API documentation to include edge cases, advanced configurations, and lesser-known methods or parameters that were previously undocumented.

The new automated system leverages Blazorise's metadata and code annotations to create robust API documentation that integrates seamlessly into the existing docs platform. This ensures that as the framework evolves, developers can rely on trustworthy and comprehensive documentation.

## Additional Improvements

Along with the major fixes, we have addressed several other bugs and made minor improvements to enhance the overall user experience and functionality of Blazorise. We appreciate your patience and continuous support as we work to make Blazorise better with each update.

We encourage you to update to version 1.7.1 to benefit from these fixes and improvements. As always, please report any issues or provide feedback to help us continue improving.

- [#5850](https://github.com/Megabit/Blazorise/issues/5850): Fluent 2 Demo Link Broken
- [#5875](https://github.com/Megabit/Blazorise/issues/5875): Support components with no parameterless constructor
- [#5876](https://github.com/Megabit/Blazorise/issues/5876): [Bug]: Markdown editor table icon takes the whole row
- [#5858](https://github.com/Megabit/Blazorise/issues/5858): Docs: add query version to all examples
- [#5607](https://github.com/Megabit/Blazorise/issues/5607): [Docs] Automate API documentation

## Feedback

Your feedback is essential to us, and we appreciate your continued support and contributions to Blazorise. If you have any questions, suggestions, or feedback, please feel free to reach out to us on.

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise **1.6.x** releases. We encourage all users to upgrade to **1.7.1**.

If you experience any unexpected behavior change in your projects after upgrading to 1.7.1, please [file an issue on GitHub](https://github.com/Megabit/Blazorise/issues).

## Commercial Support

Blazorise, as an open-source project, relies on the support and contributions of our user community. We offer commercial licenses to help fund the ongoing development and maintenance of Blazorise. Your support is essential to ensuring the continued growth and success of Blazorise.

With a commercial license, you will have access to premium forum support, private repositories and community-licensed themes. To learn more about commercial licenses, please visit our website at [Blazorise Commercial](https://blazorise.com/commercial).
