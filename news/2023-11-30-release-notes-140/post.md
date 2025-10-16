---
title: Announcing Blazorise 1.4 - Zadar
description: This blog post contains the changelog of the most recent bug fixes, improvements and new features included in the Blazorise v1.4 release.
permalink: /news/release-notes/140
canonical: /news/release-notes/140
image-url: img/v140.png
image-title: Announcing Blazorise 1.4 - Zadar
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2023-12-08
read-time: 9 min
---

# Announcing Blazorise 1.4 - Zadar

Greetings to our amazing developer community! We're thrilled to announce the latest and greatest version of Blazorise – version **1.4**.

A few months have passed since the last major version, but given the number of new features included in this release, it has been well worth the wait.

In our release notes, we're excited to share a new approach to naming our versions: starting from this release, each version of Blazorise will be named after a city in Croatia. This version is affectionately named Zadar. This change is more than just a naming convention; it's a celebration of our rich cultural heritage and a way to promote the beauty of Croatia.

By associating each release with a Croatian city, we aim to highlight the diverse and picturesque landscapes, the rich history, and the vibrant culture of our country. We believe this unique naming strategy will not only bring a distinctive identity to each Blazorise version but also offer a glimpse into the charming and scenic cities of Croatia to our global user community.

And now, finally, dive in to learn about the new components, enhancements, and features we've been working on to assist you in creating even better web applications!

## Blazorise 1.4 Highlights 💡

Here's a summary of what’s new in this release:

- **.NET 8**: full support
- **TransferList**: new component for transferring items between two lists.
- **DatePicker**: added input format mask
- **ColorPicker**: added more options to control the UI elements
- **Sticky columns**: added ability to set sticky columns on Table & DataGrid
- **Testing**: new NuGet package for testing with bUnit
- **Licensing**: added limitations for extension components

## Upgrade an existing project 👨‍🔧

To upgrade an existing Blazorise applications from **1.3.x** to **1.4**:

- Update all **Blazorise.*** package references to **1.4**.

You should now be able to use Blazorise without any breaking changes to the API.

## New Features & Enhancements 🚀

### Official .NET 8 Support

We have made Blazorise fully compatible with .NET in our latest maintenance v1.3.3 release, but it is still worth mentioning. In this release, you can enjoy all the benefits of .NET Blazor SSR with Blazorise. We made a great deal to make it compatible on time with the .NET release back in November. We hope you will enjoy it as much as we do.

Our web is also already running on .NET 8 faster than ever.

### DatePicker input mask

With the feedback from our community, we've introduced a new InputFormat parameter for the input mask. This feature lets developers define the input's format, ensuring consistency and data integrity.

At this moment, almost all date formats should be supported. The only feature that is still missing is the usage of long-name days and months, eg ddd.MM.yyyy, or dd.MMM.yyyy. We are working hard on making it work in future versions.

To see it in action, visit the DatePicker page

### DataGrid improvements

DataGrid is our most used component, and it is only natural that it receives so much work. We have made many new features to make it even better.

#### 1. More filter modes

With the introduction of the new DataGridFilterMode.Menu feature, we've found out that although it was an appreciated feature, users wanted even more contextual filtering support, i.e: numeric columns, with inbuilt 'less than'' or 'greater than' filtering method support.

We've now changed the DataGridColumn FilterMethod to be a specialized and contextual enum named DataGridColumnFilterMethod that enables additional filtering capabilities for numeric and date columns.

- LessThan
- LessThanOrEqual
- GreaterThan
- GreaterThanOrEqual

If you're using the DataGridFilterMode.Menu feature, your date and numeric columns will now present the new filtering capabilities.
    Otherwise, you may also set the new filtering capabilities on your regular columns, but please take note that these will only work if the columns are of a numeric or date type.

#### 2. Help labels

It's a small feature but it still deserves to be mentioned. We have introduced a new HelpText parameter in the DataGridColumn that will render a small help text below the column field input when editing making your UX even better.

#### 3. Cell editing

We have lost count of how many times this feature was requested, and finally, we have made it possible. Our engineer, David, took much time and effort, but it was all worth it. The new editing mode will undoubtedly be of a great deal for everyone.

This release introduces a new option named Cell edit mode under the DataGridEditMode enum. It allows the user to edit the cell value directly, as an Excel file behaves.

Every DataGrid edit-related feature, like validations, etc., should continue to work as expected.

For an experience similar to Excel, we recommend using the Cell edit mode with the DataGridCommandColumn configured as EditCommandAllowed="false" DeleteCommandAllowed="false". Additionally you might even set the SaveCommandAllowed="false" CancelCommandAllowed="false", and use the Enter and Escape keys to Save and Cancel, respectively.

It is of note that Tab and Shift+Tab will also work as expected. Whenever the user presses these keys, the cell value will be saved and the next or previous cell will be selected.

#### 4. Batch editing and styling

Batch editing is another feature that was requested so many times.

The new BatchEdit parameter in DataGrid has been implemented, allowing users to edit multiple rows simultaneously and save all changes in one go.

Additionally, we have introduced new Parameters to enhance customization options for DataGrid rows and cells, such as

- RowBatchEditStyling
- CellStyling
- CellSelectedStyling
- CellBatchEditStyling

With these broader parameters now available, the DataGridColumn parameters CellClass and CellStyle are now considered outdated and will be phased out in an upcoming version.

#### 5. Column based filtering

The FilterMode can now be individually set for each column. When specified, it will supersede the overall DataGrid's FilterMode setting on a per-column basis.

### TransferList

We've introduced a new TransferList component. This component facilitates various features for list management:

**Selection Options**: Users can choose either single or multiple items for transfer, providing flexibility in how items are selected and moved.

**Movement Flexibility**: The component supports both individual item transfers and a 'move all' feature, allowing for efficient management of list contents whether moving one item at a time or all at once.

**Customizable Item Templates**: To cater to different content needs, the TransferList component provides the option to use templates for items. This means you can render custom content within each item, tailoring the appearance and functionality to suit specific requirements.

To see it in action, visit the TransferList page

### ListGroup and ListView improvements

In addition to the new TransferList component, we've also enhanced the ListGroup and ListView components by incorporating multiple selection support. This update is a part of our continuous efforts to improve user experience and functionality. Now, users can select multiple items within the ListGroup and ListView components, offering greater flexibility and efficiency in managing lists and item selections. This feature complements the TransferList component, ensuring a cohesive and versatile user experience across these different components.

### Tabs rendering mode

The TabsContent component now also supports the RenderMode feature. This is specially useful when you need to use the Tabs and TabsContent separately, since these are unable to communicate, you can now set the RenderMode in the TabsContent.

### ColorPicker options

In this Blazorise update, new customization features - ShowOpacitySlider, ShowHueSlider, and ShowInputField - have been added to the ColorPicker component. These options enhance user interaction by allowing adjustments in opacity, hue, and direct color value input.

To see these features in action, visit the ColorPicker page in the Blazorise documentation.

### Sticky Table and DataGrid columns

We are excited to announce a new feature in our DataGrid and Table component in the latest Blazorise release. This feature introduces the ability to set fixed cells or columns to the left or right side of a DataGrid. This functionality is particularly useful for financial tables, reports, and dashboards, where key information needs to remain visible while scrolling through large amounts of data. We hope that this new feature will enhance your application's user experience and data presentation capabilities.

The new feature allows users to anchor cells or columns to either the left (Start) or right (End) side of the DataGrid. This ensures that the fixed cells or columns remain visible and in place as users scroll through the table. To utilize this feature, set the FixedPosition attribute to TableColumnFixedPosition.Start for left-side anchoring or TableColumnFixedPosition.End for right-side anchoring on a cell. Additionally, you must enable fixed columns on a table with the FixedColumns attribute.

For more detailed information and examples, please refer to our DataGrid Fixed Columns documentation.

### Testing with bUnit

Last but not the least. We're thrilled to introduce **Blazorise.Tests.bUnit**, a new **NuGet** package for efficiently testing Blazorise components. This addition enhances the testing framework and simplifies the testing process for Blazorise developers.

Highlights:

- Easy integration with Blazorise components.
- Support for mocking JavaScript interop calls.
- Compatible with various Blazorise providers.
- Streamlines the setup of project dependencies.

For detailed instructions and support, refer to our testing documentation. We're here to help with any issues or questions you might have.

## Licensing changes

In the Blazorise **1.4** release, we're also introducing an important update to our licensing system. This change is aimed at maintaining the quality and sustainability of our services. Under the new system, all unlicensed or free versions of Blazorise packages, including the DataGrid, will now have a data limit - for instance, DataGrid will be capped at a maximum of 1,000 rows.

For those using the Community user license, this limit will be extended to 10,000 rows, offering more flexibility. However, licensed users will enjoy the benefit of no limits, allowing for unrestricted usage.

It's crucial to clarify that these newly introduced data limitations apply solely to extension components. All our core components within Blazorise remain fully accessible and unrestricted. This means while extension components like those in the DataGrid will have a cap (1000 rows for unlicensed/free packages and 10,000 rows for community user licenses), our core components continue to be available without any such limits.

We want to emphasize our ongoing commitment to investing in and enhancing Blazorise. Our goal is to ensure fairness and value for all our users, especially those who have consistently supported us by playing fair. This update is a step towards honoring that mutual trust and respect. We appreciate your understanding and cooperation in this transition, and we're here to support you every step of the way.

## Wrap Up

This latest release comes loaded with a list of features, upgrades, and refinements, all designed to enrich and streamline your experience with Blazorise. Our commitment is to continually elevate Blazorise to its fullest potential, and your invaluable feedback and support are key to this endeavor.

We are grateful for your continued involvement in our journey. We're excited to see the incredible applications you'll create with these new additions!

Happy coding and best of luck with your projects! 🎉🚀
