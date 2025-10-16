---
title: Announcing Blazorise 1.0
description: This blog post contains the changelog of the most recent bug fixes, improvements and new features included in the Blazorise v1.0 release.
permalink: /news/release-notes/100
canonical: /news/release-notes/100
image-url: img/v100.png
image-title: Announcing Blazorise 1.0
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2022-03-04
read-time: 7 min
---

# Announcing Blazorise 1.0

Today, we are happy to announce the long-awaited release of Blazorise 1.0. In this post, we're covering many new Blazorise features that will make your app development easier to build and use, along with some of the API changes required to get you started.

The new year is often the time for new beginnings, and 2022 is on schedule to mark a new chapter in Blazorise's history. Slowly but steadily, we were getting to release the latest major version of the library — Blazorise 1.0; The road to getting here was not easy.

Throughout the last three years, the core of the Blazorise has seen a lot of improvements and refactoring to bring it to the next level in terms of maintainability, reliability, and performance. We have started as an early Blazor adaptor and covered all its changes starting from early previews to the latest .NET 6. In addition, a lot of refactoring and API changes had to be done.

## Blazorise 1.0 Highlights 💡

- Chart support for Chart.js v3.x
- NumericPicker completely new input component for numeric values
- Video extension to play HLS and DASH media with DRM protection
- QRCode extension to generate QR codes
- DatePicker improvements and fixes
- Drag & Drop components to drag & drop any content
- Cascading Type Parameter making it easier to write and define nested components

## Migration 🛠

Since this is a big release, we had to clear all the APIs left so far. Starting from now, we plan to have a long-term-support, and we want to have a stable API. As a result, many steps need to be done to migrate from 0.9.5 to 1.0. Based on our experience with some of our partners, it shouldn't be too problematic to migrate since not everyone uses all the features. We hope this will be the same for you and that there will not be too many issues on your side.

So, let's start.

## Highlights 🚀

### Chart v3

In this release, we bring long-awaited support for ChartJS v3. Unfortunately, it was impossible to leave support for previous versions considering there were too many breaking changes between v2 and v3.

With Chart v3, we now support almost all v3 configuration settings. In addition, we took great care to document most of the dataset and option fields so that IntelliSense will give you suggestions on how to define the chart correctly.

Since a lot was changed to support ChartJS v3 the migration would take too long to explain so it is best to follow the the Chart.js migration guide as a general rule.

### NumericPicker

The completely new NumericPicker component is created as a replacement for the NumericEdit component.
    All the formating features from NumericEdit are moved to the new component. This breaking change was needed because
    we felt there was no need to support two similar  behavior components. So, NumericEdit is left to serve as
    a native HTML input element, and all the custom and advanced stuff are now part of the new NumericPicker.

NumericPicker component has many new features like:

, and many more. We hope the new NumericPicker will serve you well.

It can be seen in action on the NumericPicker page.

### Video

We worked hard to bring you a very new Video component based upon the excellent Plyr video player. The new component fully supports streaming media by implementing HLS and DASH playback media formats.

The component is pretty flexible to use and has most of the video control methods like Play(), Pause(), Stop(), and many others, including also events that can give you the current state of the player.

The new component and its usage can be seen on Video page.

### DatePicker

It is now possible to use date picker to select a range of dates and pick multiple dates. The new feature can be enabled with SelectionMode parameter. Once enabled, you need to use Dates parameters to read or set the days.

The new component with examples can be seen on DatePicker page.

### QRCode

This component is created with the help from one of our community members, njannink. The QRCode component is based on QRCoder, and it is fully running on .NET code without any trace of JavaScript.

You can see it in action on QRCode page.

### Charts Trendline

Charts.Trendline is a new extension and is used to draws a linear trendline in your Chart.

You can see it in action on Trendline page.

### Utilities

There were  some changes in our color utilities. To prepare them for some advanced scenarios in the future, they are converted to be complex enums. The affected enums are Color, Background, TextColor, and Target. This change brings a new way of defining enums values, and it is now possible to define colors with custom names, e.g., Color="btn-purple".

While at the moment they still have the same API, in the future, we will introduce some more advanced features that will allow us to chain options, e.g., Color="Color.Primary.WithGradient".

### Modal

#### Animations

We reworked animations, and they are now calculated dynamically in Blazor without the need for any JavaScript. Also, with an additional API, you now have more control over the animation.

- Animated: Controls whether the modal should animate.
- AnimationDuration: Sets the modal animation duration in ms.

#### Render Mode

You can now choose from three different rendering modes on the Modal component, similar to what we already have on the Tabs component.

- Default: Always renders the modal HTML content to the DOM.
- LazyLoad: Lazy loads modal, meaning the modal HTML content will only be rendered/loaded the first time it is visited.
- LazyReload: Lazy loads modal every time, meaning the modal HTML content will have its HTML re-rendered to the DOM every time.

### Cascading Type Parameter

.NET6 brought us a new feature, CascadingTypeParameter, that reduces the boilerplate code we need to write for Generic Parent/Child components.
    Please refer to <Blazorise.Link To="https://docs.microsoft.com/en-us/aspnet/core/blazor/components/templated-components?view=aspnetcore-6.0#infer-generic-types-based-on-ancestor-components">CascadingTypeParameter Microsoft Docs</Blazorise.Link>
    for more information.

The following components now have CascadingTypeParameter support:

- DataGrid
- Select
- RadioGroup

<DataGridAggregate Field="@@nameof( Employee.IsActive )" AggregationFunction=@@(DataGridAggregate<Employee>.TrueCount) />

### DataGrid

#### Scroll API

Added ScrollTo Api to DataGrid. You may now use the ScrollToRow and ScrollToPixels API when FixedHeader or Virtualize is set on your DataGrid.

#### Detail Row Trigger

DetailRowTrigger has been changed to now have an argument of DetailRowTriggerEventArgs instead of an item. This will enable us to keep providing new features by adding to this context.

Whereas before you add:

- DetailRowTrigger="((item)=> item.Salaries?.Count > 0 && item.Id == selectedEmployee?.Id)"

now you change to:

- DetailRowTrigger="((context)=> context.Item.Salaries?.Count > 0 && context.Item.Id == selectedEmployee?.Id)"

We've introduced the following DetailRowTrigger features:

- Toggleable Previously, if you selected an item where DetailRowTemplate was already showing, and if DetailRowTrigger evaluated to true, it would hide to DetailRow. By setting this to false, it now stays visible.
- Single By setting this property to true, only one DetailRowTemplate will be displayed at a time.
- DetailRowTriggerType You may now select between two types, Manual and RowClick. By setting the type to Manual, you may further control the DetailRowTemplate display behavior programmatically by using the existing ToggleDetailRow.

#### Click behavior

Added PreventRowClick to DataGridColumn / DataGridCommandColumn. By setting this parameter to true, the column cell will not longer trigger the RowClicked and subsequent events.

#### Validation

Added ValidationItemCreator Parameter. You may use this parameter to provide and override the way to instantiate an item for validation purposes.

#### Aggregates

Added AggregateRowPosition Parameter to Datagrid. By setting the DataGridAggregateRowPosition, you will now be able to position the aggregate row, just like the pager.

### FileEdit

Added MaxFileSize Parameter, this will default to long.MaxValue

Added FileInvalidReason to the FileEndedEventArgs so you may track what went wrong in case the file upload was not successful.

- None
- MaxLengthExceeded
- UnexpectedBufferChunkLength
- TaskCancelled
- UnexpectedError

### Drag & Drop

We're finally bringing support for a long-time requested drag & drop feature in this release. The new feature is comprised of DropContainer and DropZone components and is designed to be flexible and easy to use. It supports item templating, selectors for drop items, styling, and more.

The new component and its usage can be seen on Drag & Drop page.

### Auto Complete

Introduced CloseOnSelection Parameter. You will be able to set this parameter to false, so the auto complete's dropdown does not close on selections.
    
        
            Note: This feature will only work with multiple selection.

### Dropdown

When using nested dropdowns, the nested dropdowns will now consider the configured direction.

## Let's stop here!

Writing all-new features wouldn't make sense, as that would make this post way too long. If you want to see a full list of all that has changed, go to our GitHub page.

## Community PRs

- Xeevis did great work by creating a new Blazorise.Icons.Bootstrap package to map Bootstrap icons. The list of mapped icons covers almost 100% of icons, except for some rarely used. We have already requested them on the Bootstrap official repository, and hopefully, they will be included soon.
- njannink created a QRCode images. The new component is based on QRCoder, and it is fully running on .NET code without any trace of JavaScript.
- WolfgangKluge helped to add a missing actions to our Markdown component.
- ledpup Added support for the trendline plugin to the Chart extension.
- soenneker helped to add a a range option to the DatePicker component.
- gkochera fixed the sort templates in DataGrid extension.

## Thanks, and stay tuned for more

We would like to say a sincere thanks to all our contributors who helped in making this release. Special thanks to our partners at Volosoft for being a great partner and supporting us so far.

Finally, this successful release wouldn't have been possible without our amazing community—so thank you for being part of it. And that's a wrap. We'll be back again with another exciting release soon, so stay tuned.
