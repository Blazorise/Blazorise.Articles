---
title: Announcing Blazorise 0.9.5
description: This blog post contains the changelog of the most recent bug fixes, improvements and new features included in the Blazorise v0.9.5 release.
permalink: /news/release-notes/095
canonical: /news/release-notes/095
image-url: img/v095.png
image-title: Announcing Blazorise 0.9.5
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2021-11-15
read-time: 8 min 40 sec
---

# Announcing Blazorise 0.9.5

Today, we are happy to announce the release of Blazorise 0.9.5. In this post, we’re covering a lot of the new Blazorise features
    that will make your app development easier to build and use.

As you have probably noticed, we're also bringing completely new documentation pages built on top of Blazorise. When Blazorise was first created almost four years ago, Blazor was limited to very basic features. There was no server-side, no way to do the proper SEO, etc. And so, the only way to do the proper documentation at the time was to use GitHub pages. As time went by, with all the work on new features, documentation was always last to go. But this time Blazorise's documentation is built from the ground up, completely with Blazor and Blazorise. We now support real code examples, copy/paste snippets, hide/show code. Many new examples are included and with time we will include even more of them. We hope you will enjoy using the new docs as much as we enjoyed creating them.

Old documentation will still be available at v094.blazorise.com.

## Blazorise 0.9.5 Highlights 💡

- **Bootstrap 5 Provider** is our new completelly new CSS framework that we fully support.
- **.NET 6** is now fully supported with this release.
- **JavaScript Modules** to load internal JavaScript on demand without the need for any manual code.
- **Autocomplete tags** now has support for multiple selection that will show selected items as tags.
- **DataGrid** improvements and optimizations.
- **Public Async methods** make it easier to prevent race condition when calling component directly.
- **ColorPicker component** based upon the excellent pickr library.
- **InputMask component** based upon the excellent Input Mask plugin.
- **Theme improvements** to make it even easier to customize your apps without the need for CSS.
- **ListView component** for displaying a series of content in a contained scrollable view by providing a data source.

## Migration 🛠

No big release can be done without some breaking changes and this release is no exception. Considering this is the last 0.9.*
    release before 1.0, there was no other time. We tried to make the changes to a minimum but nevertheless, you will need to
    adjust your code. Here are the required steps that needs to be done:

**1.** Changed all the following methods from synchronous to asynchronous.

**2.** Remove NotificationType, Message, and Title parameters from the NotificationAlert.

**3.** Remove Title component and replace it with the Heading component.

**4.** We've found that on Dropdown we had both a VisibleChanged and Toggled event, which served the same purpose. We've removed Toggled and changed VisibleChanged to a regular Blazor EventCallback.

    Replace any Toggled Parameter with the VisibleChanged Parameter.

    Change any VisibleChanged event you might've bound to be compliant with a regular Blazor EventCallback.

**5.** While not strictly a breaking changes, it is advised to also rename all Left and Right values,
    eg. for TextAlignment and Direction. We have marked them as obsolete and they will be replaced with
    Start and End values. The purpose of the new values is the better naming support for the RTL support
    that should take place in the next Blazorise version.

**6.** We've changed the DataGrid's RowSelectable evaluation to take in a RowSelectableEventArgs instead.
    This way we can provide you with increased information on the selection being handled.
    This new RowSelectableEventArgs will still give you access to the current row item and additionaly to the type of selection being done, RowClick, MultiSelectClick, MultiSelectAll
    You will need to change your RowSelectable handlers to expect a RowSelectableEventArgs instead.

**7.** Remove Blazorise static files from index.html> or _Layout.cshtml / _Host.cshtml. Files that are safe to be removed are:

- _content/Blazorise/blazorise.js
- _content/Blazorise.Bootstrap/blazorise.bootstrap.js
- _content/Blazorise.Charts/blazorise.charts.js
- _content/Blazorise.Charts.Streaming/blazorise.charts.streaming.js
- _content/Blazorise.DataGrid/blazorise.datagrid.js
- _content/Blazorise.Markdown/blazorise.markdown.js

## Highlights 🚀

### Bootstrap 5

First and foremost, with this release, we finally introduce a new Bootstrap 5 provider. The new Bootstrap 5 is already put
    to a test and is now running our new documentation pages. You can also see it in our demos.

### .NET 6

Now that the .NET 6 is out it is only natural that we want to support it. The old .NET 5 is still supported just in case there are projects that cannot upgrade at this time. Please note, we plan to drop support for .NET 5 once the Blazorise 1.0 is released sometime at the beginning of 2022. Considering that .NET 6 is going to be LTS and that it supports many new features it is the only way to move forward without .NET 5 holding us back.

### JavaScript modules

We have refactored major parts of Blazorise internals to make use of JavaScript modules. As a result of all the hard work, we have made it easier to set up Blazorise projects, and manually importing Javascript static files is not needed anymore. All Blazorise static files can safely be removed from all your index.html and _Layout.cshtml / _Host.cshtml files.

### Autocomplete:

#### 1. Multiple Selection Support

Autocomplete now has support for multiple selection by setting the new Multiple parameter to true. You have two extra Parameters at your disposal to handle the multiple values.
    SelectedValues and SelectedTexts

#### 2. ItemContent template

Autocomplete now has the ability to optionally enrinch each value presented to the user with your custom html, by providing a RenderFragment, called ItemContent.

Both examples can be seen on the Autocomplete page.

### DataGrid:

#### Null Coalescing

DataGrid Field now supports null coalescing, meaning you can now provide objects with null data, and DataGrid will set the Default Value for the respective Field Type.

#### Sort Field

Introduced a new SortField Parameter, that allows you to define a different Property or Field of a column to be considered by the sorting mechanism.

#### DetailRowTemplate

DataGrid DetailRowTemplate feature has been slightly reworked. Now it will evaluate DetailRowTrigger on click, avoiding multiple calls to this on datagrid re-renders.

We've also introduced a new public API ToggleDetailRow so you can programatically toggle the row. By default, it evaluates DetailRowTrigger, but you may use the provided flag forceDetailRow to just force the row to show the DetailRowTemplate

We've still maintained the old behaviour, if DetailRowTemplate is defined, every row will display DetailRowTemplate, if DetailRowTrigger is defined, this will still be evaluated for every row, but now only once the row is first initialized and no longer on every re-render.

To disable this behaviour you may use the new Parameter DetailRowStartsVisible and DetailRowTemplate will only be evaluated on click and if programatically called.

#### DataGridColumn Non Mandatory Field Parameter

DataGridColumn no longer requires Field to work. You may provide a DataGridColumn with no Field, however do take note, DataGrid will not do any internal management for these columns for you.

All of the mentioned features and examples can be seen under the DataGrid pages.

### Public Async methods

For a long time, most of our public methods were made as synchronous, eg. modal.Show(), which made it hard to play nicely with the asynchronous calls that were done internally by the Blazorise. In this release, we made the decision to convert them all to asynchronous which I think in the long run will be worth all the extra work. The result is unfortunately a breaking change so you should go through your projects and carefully update the changed calls. You can find all the changes in the migration section of this page.

### ColorPicker component

In many cases, a native color input is not good enough. For instance, native color input doesn't support opacity value or localization.
    With the introduction of the ColorPicker component, all of these limitations are now history. You can define any color,
    including the alpha value. You can localize the buttons, define a custom pallette for quick coloring, show or hide certain buttons,
    and many new features.

You can see examples at the ColorPicker page.

### Markdown improvements

We did a lot of improvements and new APIs on our Markdown component. It can now support toolbar customization, image uploading, theming, and many more.

You can see examples at the Markdown page.

### Theming improvements

Theming also received some much needed changes.

#### Color variables for RGB(A) values

Along with the --b-theme-primary CSS variable we are now generating additional RGB(A) variables,
    namelly, --b-theme-primary-r, --b-theme-primary-g, --b-theme-primary-b,
    and --b-theme-primary-a.

#### Nullable options

Not so much big of a change but nevertheless, is needed. When defining theme options in some cases it is hard to tell
    when the CSS override should be applied. This small change will give us that ability.

#### Body options

It is now possible to define the body background and text color. Once defined it will also properly assign the
    color for the TextColor.Body typography color value, where needed.

#### Spacing options

So far if you wanted to change the margin and padding sizes you would need to re-compile Bootstrap(or any other) CSS. With
    the new theming options it is now possible with just a few lines of code. And Blazorise will do all the magic for you. eg.
      

      

    SpacingOptions = new() { Is1 = ".5rem", Is2 = "1rem" }

### Tabs

Introduced a new Parameter TabsRenderMode which essentially defines how the tab content will load.

### DropdownList

DropdownList and DropdownMenu now support Scrolling as an opt-in feature. To set this, use the provided parameter MaxMenuHeight.
    This will make it so your DropdownLists with a lot of data, no longer keep growing indefinitely in size, going out of the page bounds.

### InputMask component

The idea is to provide an easy way to increase input field readability by formatting your typed data. By using this component, you won't need to write any mind-blowing regular expressions or difficult mask patterns to format input text.

You can see examples at the InputMask page.

### ListView component

Introduced the new ListView extension, which is based on our ListGroup behind the covers, so you may make use of the ListGroup underlying APIs.

List views are a flexible and powerful component for displaying a series of content in a contained scrollable view by providing a data source.

You can see examples at the ListView page.

### Localization

The DatePicker and TimePicker pickers are now fully localized with our localization system.

### Thank you!

Thank you to everyone in the community who helped make this release of Blazorise possible! Also big thank you to all our community members that took their time and helped us by fixing issues and submitting the PRs.

We hope you enjoy this release of Blazorise.

### Closing

Install Blazorise nugets, upgrade your projects, and tell us what you think! See you next time!
