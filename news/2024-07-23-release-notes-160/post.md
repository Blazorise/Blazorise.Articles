---
title: Announcing Blazorise 1.6 - Adriatic
description: This blog post contains the changelog of the most recent bug fixes, improvements and new features included in the Blazorise v1.6 release.
permalink: /news/release-notes/160
canonical: /news/release-notes/160
image-url: img/v160.png
image-title: Announcing Blazorise 1.6 - Adriatic
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2024-07-23
read-time: 7 min
---

# Announcing Blazorise 1.6 - Adriatic

Welcome to the July 2024 Blazorise 1.6 update! In this version, we are excited to bring you a host of new features and enhancements designed to improve the functionality and user experience of our components. Our latest update includes significant advancements in chart interactivity, mobile responsiveness, dynamic data handling, and data grid editing capabilities.

## Key Blazorise 1.6 Highlights 💡

Here's a summary of what's new in this release:

- Charts - Zoom Plugin: Enhance your data exploration with our new zoom and pan functionalities.
- Video: updated to the new VidStack library
- DataGrid: Dynamic Data Binding
- DataGrid: Rapid Editing Mode
- Table & DataGrid: Mobile Responsive Mode

Dive into each section for a comprehensive overview of these features and learn how they can enhance your projects. We value your feedback and encourage you to share your thoughts as we continue to refine and improve Blazorise.

## Upgrading from 1.5.x to 1.6 👨‍🔧

Upgrade your Blazorise application seamlessly with the following steps:

Update all Blazorise.* package references to 1.6.

Enjoy the latest features without any breaking changes to the API.

## New Features & Enhancements 🚀

### Charts - Zoom Plugin

We are excited to announce the addition of a Zoom plugin to the Chart component. This new feature significantly enhances the interactivity and usability of our charts, providing users with the ability to zoom in and out on specific areas, as well as pan around the chart. These functionalities allow for a more detailed and dynamic exploration of data.

Key Features:

Zoom In/Out: Users can now zoom into specific areas of the chart to get a closer look at the data points and trends.

Panning: The ability to pan around the chart ensures that users can easily navigate to different sections of the chart without losing their zoomed-in view.

Enhanced Data Exploration: These new interactive capabilities make it easier to analyze and interpret data, leading to more insightful observations and decisions.

For more detailed information and instructions on how to use the Chart Zoom Plugin, please visit our documentation.

### Video Component - update to new library

We have updated our Video extension component to work with the new VidStack library. Previously, we were utilizing the Plyr library for our video playback needs. However, over time, Plyr has gradually been replaced by the newer and more advanced VidStack library.

The decision to transition to VidStack was driven by several compelling reasons. First and foremost, VidStack offers a host of new features that were not available in Plyr. These features enhance the overall user experience by providing more robust and versatile functionality. Additionally, VidStack is significantly more stable, which means fewer bugs and crashes, leading to a smoother and more reliable performance.

Moreover, the VidStack library is designed with modern web development practices in mind, making it easier to integrate and maintain. It supports the latest web technologies and standards, ensuring that our video extension component remains up-to-date and compatible with future advancements.

Given these advantages, we felt it was essential to update our component to take full advantage of what VidStack has to offer. Our team has worked diligently to implement these new features and ensure that the transition from Plyr to VidStack is as seamless as possible for our users. We are confident that this update will provide a superior video playback experience and look forward to the benefits it will bring.

In addition to leveraging the core improvements of VidStack, we have also added a few small but impactful features to our component:

Thumbnails: You can now specify URLs for video thumbnails, enhancing the visual preview of the video content.

ProtectionServerCertificateUrl: For HLS (HTTP Live Streaming) content, we have added support for specifying the Protection Server Certificate URL, improving the security and integrity of video streams.

We are confident that these updates will provide a superior video playback experience and look forward to the benefits they will bring.

### DataGrid Improvements

The Blazorise DataGrid has received a multitude of new improvements in this update, significantly enhancing its functionality and user experience.

#### 1. New Mobile Responsive Mode

With the introduction of the new ResponsiveMode parameter in the underlying Table component, the DataGrid now supports TableResponsiveMode.Mobile. This mode renders a dedicated layout for mobile devices, where the columns are stacked on top of each other for better readability and usability on smaller screens.

Please note that in this mode, the DataGrid may have limited functionality. Features such as caption templates, fixed headers, resizing, and others might not be compatible. This feature is highly opinionated, meaning it enforces a specific design philosophy aimed at optimizing mobile experience.

We consider this feature experimental and are actively seeking feedback to improve it further.

For more detailed information and to provide feedback, please visit our documentation.

#### 2. New Attributes for Auto Generate Columns

In the DataGrid AutoGenerateColumns feature, we've added new attributes to the attribute based API to be able to further configure the way that the columns are rendered.

[DisplayAttribute]: Represents an attribute that can be applied to properties or fields to specify the caption.

[OrderAttribute]: Represents an attribute that can be applied to properties or fields to specify the order in which they should be displayed or edited.

[IgnoreFieldAttribute]: Represents an attribute that can be applied to properties or fields to specify they should not be automatically generated.

[SelectAttribute]: Represents an attribute that can be applied to properties or fields to specify additional metadata for a select component.

[NumericAttribute]: Represents an attribute that can be applied to numeric properties or fields to specify additional metadata.

[DateAttribute]: Represents an attribute that can be applied to date properties or fields to specify additional metadata.

For more detailed information, please visit our documentation.

#### 3. Generate ODataQuery API

We have introduced a new feature to enhance the functionality of the Blazorise DataGrid with OData support. A new extension method, ToODataString(), has been added to the ReadData and DataGridReadDataEventArgs. This method allows users to generate an OData query string easily.

This addition simplifies the process of creating OData queries, making it more straightforward to integrate and interact with OData services. The ability to generate these query strings programmatically enhances the flexibility and power of data operations within the DataGrid component.

#### 4. Contextual Filtering

Enhancements have been made to the filtering components of the Blazorise DataGrid, providing more contextual and relevant filtering options based on the column types you have specified.

The improved filtering system now dynamically renders numeric, select, check, date, and text edit components according to the DataGrid column types. This ensures that users can filter data more effectively, using input methods that are most appropriate for the type of data in each column.

#### 5. Dynamic Data Binding

With dynamic data binding, the DataGrid can now seamlessly bind to dynamic data sources, providing a more flexible and efficient way to handle data. Additionally, this feature includes support for ExpandoObject, enabling the DataGrid to work with dynamic objects that can have their properties added or removed at runtime.

This new capability enhances the usability of the DataGrid, particularly in scenarios where data structures are not known at compile time or can change dynamically.

For more detailed information, please visit our documentation.

#### 6. Manual loading state

Added a new .SetLoading() method so you're able to control the loading state of the DataGrid.

#### 7. Rapid Editing Mode

Introducing the new CellNavigable parameter for the Blazorise DataGrid. Enabling this feature allows you to navigate DataGrid cells using arrow keys, tabbing, and clicking, enhancing the ease of use and efficiency. This feature is especially useful when used in conjunction with DataGridEditMode.Cell, providing a seamless rapid editing experience. For more details and an updated example, please visit the Rapid Editing section on the DataGrid Editing page.

Find out an updated example for Rapid Editing in the DataGrid Editing page.

We have also introduced the DataGridEditModeOptions to give you further customization over how your DataGrid handles edit operations. This new feature includes two additional CellEdit options, allowing you to enable or disable editing on a single or double click. These options offer more control over the editing experience, tailoring it to fit your specific needs.

### New MaskPlaceholder on InputMask

Introduced a new MaskPlaceholder property on the InputMask component to provide additional information to the user about the valid input format. While the change is not groundbreaking, it is a small but important step towards improving the user experience.

### Disable Days Of Week In DatePicker

We have added a new parameter to the DatePicker component, named DisabledDays. It is now possible to disable any days of a week to be picked by the user.

### Automatic <Code>rel</Code> Attribute for Blazorise Link Component

Links with Target="Target.Blank" now automatically include rel="noopener noreferrer" for enhanced security and privacy. This update prevents new pages from accessing the original page, reducing phishing risks, and ensures referrer information is not sent to the target site, thereby enhancing the security and privacy of external links by default.

### Updated NumericPicker library

As an ongoing process to improve security of Blazorise dependencies, we have updated autoNumeric.js library to use the latest version.

### Better form support in SSR mode

In this release we have made some changes to enable beter support our input components like TextEdit, NumericEdit, etc. to work with server-side rendering. It works by automatically calculating the name attribute of form field which then helps it to properly POST the form.

#### Body Theme Font Options

Added few more options to easily define font options for the document body element. It is now possible to define font-family, font-size, font-style, font-weight. All by defining the FontOptions on Blazorise theme.

## Wrap Up ️🔚

We believe these enhancements will significantly improve your development experience and the functionality of your applications. We are continually working to make Blazorise better and your feedback is invaluable to us. Please try out these new features and let us know your thoughts and experiences. Your input helps us to refine and enhance our components to better meet your needs.

Thank you for your continued support and happy coding with Blazorise!
