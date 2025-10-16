---
title: Announcing Blazorise 1.1
description: This blog post contains the changelog of the most recent bug fixes, improvements and new features included in the Blazorise v1.1 release.
permalink: /news/release-notes/110
canonical: /news/release-notes/110
image-url: img/v110.png
image-title: Announcing Blazorise 1.1
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2022-09-27
read-time: 10 min
---

# Announcing Blazorise 1.1

It took us way too long, but finally, after six months of hard work, Blazorise 1.1 is out and comes packed with features and quality-of-life improvements!

So, what happened at that time? To start, we have made a lot of improvements on **blazorise.com**. For example, we have improved documentation to include more examples and descriptions. Also, we added a search field for much faster navigation and more internal links between pages.

One of the most significant changes is that we have finally introduced new [blog pages](blog) where we regularly write about C#, Blazor and .NET. Not to mention how-to guides and tutorials where you can learn more about Blazorise.

There are no breaking changes in this release, but we will slowly start with some API changes by making existing APIs obsolete and introducing new APIs as replacements. Once we reach stable **v2.0**, the APIs marked with obsolete will eventually be removed.

Internal changes are hard to showcase, but if you are curious to learn a bit more, we have documented all changes in [1.1 ticket on GitHub](https://github.com/Megabit/Blazorise/issues/3575). Also, don't forget to look at [1.0.x fixes](https://github.com/Megabit/Blazorise/issues/3540), which are also included in this release.

**Blazorise 1.1 is compatible with Blazorise 1.0.x projects and is a recommended upgrade for all 1.0.x users.**

## Blazorise 1.1 Highlights 💡

- New **FocusTrap** component.
- New **Highlighter** component.
- New **FluentValidation** component.
- New **FilePicker** component.
- New **ModalProvider** component.
- New **LoadingIndicator** component.
- **FileEdit** performance improvements to `WriteToStreamAsync` and `OpenReadStreamAsync` APIs.
- **DataGrid** improvements and new APIs.

## Upgrade an existing project 👨‍🔧

### 1. Packages

To upgrade an existing Blazorise applications from **1.0.x** to **1.1**:

- Update all **Blazorise.*** package references to **1.1**.

### 2. Tuple Values

Due to a bug in Visual Studio razor tooling you might experience problems if you try to define tuple values as a component parameter. In Blazorise case, this problem might manifest itself on the [Row component](docs/helpers/utilities/grid). For example if you have Row Gutter="(32, 16)" you will get build errors. To workaround it we have introduced new parameters, named `HorizontalGutter`, and `VerticalGutter`.

To use them you will just need to define it as Row HorizontalGutter="32" VerticalGutter="16".

### 3. Recommended Renames

### 4. Recommended Removals

The explicit usage of Markdown extension CSS and JS files are not needed and they can be safely removed from **index.html** or **_Layout.cshtml** files.

- `<link rel="stylesheet" href="https://unpkg.com/easymde/dist/easymde.min.css">`
- `<script src="https://unpkg.com/easymde/dist/easymde.min.js"></script>`
- `<script src="https://cdn.jsdelivr.net/highlight.js/latest/highlight.min.js"></script>`

## New Features 🚀

Many new features have been added in Blazorise 1.1, both small and large. The following is a list of a few of the larger features that we are excited about in no particular order. For a complete list of all changes you can check out our [curated changelog](https://github.com/Megabit/Blazorise/issues/3575), as well as the [1.0.x fixes](https://github.com/Megabit/Blazorise/issues/3540), which are also included in this release.

### .NET 7 Support

First, we must mention that Blazorise 1.1 fully supports the new .NET 7 SDK. Currently, it uses the last available RC1, so we will consider it a preview until the final version is released. But until then, you can safely use this version, which should behave like .NET 6.

### FocusTrap component

As a continuous work to improve [AODA compatibility](https://www.aoda.ca/web-accessibility-guidelines-for-compatibility-with-assistive-technology/) we have created a new FocusTrap component. FocusTrap is a component that manages focus for its descendants. This is useful when implementing overlays such as modal dialogs, which should not allow the input focus to escape while open.

The new component is already part of the `Modal` which can be controlled by setting the `FocusTrap` parameter. If you wish to use new component on its own then you can look at the example on the [FocusTrap page](docs/components/focus-trap).

### Highlighter component

This is a relatively small component, but it can be beneficial when designing the UI for your application. For example, it helps you visually distinguish parts of the text by highlighting them based on the search term.

If you wish to use new component look at few of the examples we have created on the [Highlighter page](docs/components/highlighter).

### FluentValidation component

One of the most requested features we get from our community is a way to validate forms by using the [FluentValidation](https://github.com/FluentValidation/FluentValidation "Link to FluentValidation") library. In this Blazorise release, we are finally bringing it.

The new **FluentValidation** component is created with the help of [aladotnet](https://github.com/aladotnet "Link to GitHub user"), a community member that has implemented the feature on his GitHub repository and was willing to give it away as part of the Blazorise core repository. Fortunately, he did all the hard work. As a result, we have only made minor optimizations to the API and added examples to the documentation.

Big thanks to [aladotnet](https://github.com/aladotnet "Link to GitHub user") for his help in making it happen.

### DataGrid

#### 1. Sort Icon

Added `ShowDefaultSortIcon` parameter to `DataGrid`. By enabling this parameter, a default sort icon will now display.

#### 2. PagerOptions

Introduced `PagerOptions` with the following options:

- **Size** : Configures the pager buttons size.
- **ButtonRowPosition** : Configures the button row position.
- **PaginationPosition** : Configures the pagination position.
- **TotalItemsPosition** : Configures the total items position.

#### 3. ScrollRowOnEdit

Added `ScrollRowOnEdit` parameter to `DataGrid` `VirtualizeOptions`. When `Virtualize` is set, you may now disable the behaviour of scrolling the row to the top on edit when on `DataGridEditMode.Inline` or `DataGridEditMode.Form` by setting this new option to false.

#### 4. SelectedRowIndex

Added `SelectedRowIndex` getter to `DataGrid`. This is an helper so you can quickly find the Zero-based index of your `SelectedRow`. It can be an useful API in conjuction with the `ScrollToRow` method, that takes in a Zero-based index of `DataGrid` row to scroll to.

#### 5. SortOrder

Added `SortOrder` parameter to `DataGrid` so when the `DataGrid` sorting mechanism is set to multiple, you are able to configure the order of which the sorting of the columns takes place, this is specially useful, if you want to start the `DataGrid` sorted a certain way.
    Please do take note, that for the parameter to listen to changes and be able to dynamically be adjusted to the `DataGrid` changes, you should use `bind-SortOrder`.
    An example is when you have a Column A with a `SortOrder` of 2 And Column B with a `SortOrder` of 1, the moment the user removes the sorting out of Column B, the `DataGrid` will attempt to reset the `SortOrder` back to 0 as to accomodate the natural multiple sorting rules.

Please do take note, that for the parameter to listen to changes and be able to dynamically be adjusted to the `DataGrid` changes, you should use `bind-SortOrder`. An example is when you have a Column A with a `SortOrder` of 2 And Column B with a `SortOrder` of 1, the moment the user removes the sorting out of Column B, the `DataGrid` will attempt to reset the `SortOrder` back to 0 as to accomodate the natural multiple sorting rules.

#### 6. PageSize

Increased default `PageSize` parameter value from **5** to **10**.

### ModalProvider

I believe this feature will be handy for a lot of people.

### FileEdit

The new ModalProvider component is used to programmatically render what custom content or component you want to instantiate inside your Modal, even with the support of parameters. The usage is similar to MessageProvider, but unlike it, we have more control over what will be rendered. For example, we can define to render entire pages or forms, and ModalProvider will automatically do it for you.

The usage of new ModalProvider with examples can be see at [ModalProvider page](docs/services/modal-provider).

### Autocomplete

The Autocomplete component has received a lot of love in this release. Feature-wise, I believe it has the highest amount of new features compared to all other components.

#### 1. ReadData

Now it is possible to use the `ReadData` parameter to connect to an outside data source and load Autocomplete data on demand according to the user's searched text.

#### 2. SuggestSelectedItems

Introduced `SuggestSelectedItems` parameter, enabling you to to show up already selected items in the dropdown menu.

#### 3. AutocompleteSelectionMode

Introduced `AutocompleteSelectionMode`

- **Default** : Default mode. Selection is single.
- **Multiple** : Multiple mode. Selection is multiple.
- **Checkbox** : Checkbox mode. Selection is multiple with checkbox selection support.

You may still use the existing `Multiple` parameter to set the `Autocomplete` into Multiple selection mode, however take note that this Parameter has now been marked as `Obsolete` and will be removed in a future version. Please use the new `SelectionMode` Parameter.

#### 4. ConfirmKey

Introduced `ConfirmKey` parameter, you are now able to costumize the keyboard keys that should be considered as a Confirmation Key.
    Take note :
    If the value has a printed representation, this attribute's value is the same as the char attribute.
    Otherwise, it's one of the key value strings specified in 'Key values'.

Take note: If the value has a printed representation, this attribute's value is the same as the char attribute. Otherwise, it's one of the key value strings specified in 'Key values'.

#### 5. AutoPreSelect

Introduced `AutoPreSelect`, this defaults to true, keeping the current behaviour. By setting it to false, the dropdown that shows the options, will no longer auto select the first item.
    This is specially useful for a use case reported by our users.
    When you have the `AutoComplete` set to `Multiple` + `FreeTyping`, and want to allow your user to just press the Confirm Key to accept the currently typed text.

This is specially useful for a use case reported by our users. When you have the `AutoComplete` set to `Multiple` + `FreeTyping`, and want to allow your user to just press the Confirm Key to accept the currently typed text.

#### 6. Improved keyboard support

You can now select items and remove selection using keyboard alone. Use navigation arrows to select an item in the dropdown.In multi-select mode use Backspace to remove most recently selected item or use **Shift-Tab** and **Enter** key to remove any previously selected item.

This feature is contributed by [glutio](https://github.com/glutio), one of our community members, and we thank you for all the effor he has done.

#### 6. AutoSelectFirstItem

Introduced `AutoSelectFirstItem` parameter for single-select mode. Use this parameter to automatically select the first item from `Data` during `Autocomplete` initialization.

This feature is also contributed by [glutio](https://github.com/glutio), one of our community members.

### FileEdit

#### 1. Rendering Improvements

We've noticed that `WriteToStreamAsync` would not update progress on the UI and also freeze when using this API on WebAssembly. This is currently inherit to Blazor WebAssembly as it is single threaded, we've improved on this so the UI should now be able to update while using this API.

#### 2. Cancellation Support

Added missing `CancellationToken` to `OpenReadStreamAsync` so is is now possible to cancel the upload on demand.

#### 3. Byte Array Stream Support

Both `WriteToStreamAsync` and `OpenReadStreamAsync` should now be more performant as we made changes to accomodate the following new features in .NET6
    <Blazorise.Link To="https://docs.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/call-dotnet-from-javascript?view=aspnetcore-6.0#byte-array-support">Byte Array Support</Blazorise.Link>
    <Blazorise.Link To="https://docs.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/call-dotnet-from-javascript?view=aspnetcore-6.0#stream-from-javascript-to-net">Stream from Javascript Support</Blazorise.Link>
    We now highly advise the usage of the `OpenReadStreamAsync` on Blazor WebAssembly as it is very performant.

### FilePicker

The new `FilePicker` will give you an enhanced File Upload control, with more out of the box options then our `FileEdit` component.

- Listing, detailing and controlling the look of the selected files.
- Clear and upload buttons with built in progress bar.
- Custom templates to render items.

The new component with many examples and code samples can be see at [FilePicker component page](docs/components/file-picker).

### ListView

Introduced `ItemTemplate` parameter, you may now costumize the content that renders in each of the `ListView`'s items.

Introduced a much needed missing `ValueField` Parameter, so you may uniquely identify each item in your list.
    This has been introduced with a return value of `String` for now. However we plan to make it return a generic type `TValue` in a future version, much like some of our other `ValueField` based components, so you can choose what type does your unique value return.

### Loading Indicator

This excellent component is done by [glutio](https://github.com/glutio), one of our community members. The amount of work that went into it is astounding. The purpose of this component is, as its names suggest, to indicate to the user that a long-running operation is happening. It supports many different working scenarios, like two-way binding, methods calls via reference, global control through the service, and many more.

To see it in action with various examples just open the [Loading Indicator](docs/extensions/loadingindicator) page.

### Other improvements

All our `Clicked` parameters on a Button, Link, Tab, and other components, can now recieve a `MouseEventArgs` as an event parameter. This feature will allow you to determine how the clicked event was raised and what buttons and keys were pressed.

## PRs

### Steps Navigation

This feature was created by [Jimmys20](https://github.com/Jimmys20), one of our community members.

Basic steps navigation has no constraints, so it is possible to jump to any steps by clicking on them. However, this is usually impossible in real-world scenarios as sometimes a user is required to enter valid data before proceeding to the next step.

To control the navigation between the steps, it is now possible to use `NavigationAllowed` parameter, which acts as a function that has all the information you need to validate the page switch.

The new feature can be seen on [Step component](docs/components/step) page.

## PRs 💪

As you have probably already noticed, we had a lot of contributions in this release, some small and some larger. So we would want once again to mention some of them that stood out and helped us make Blazorise great.

#### [glutio](https://github.com/glutio)

Glutio was really productive with new features in this release.

Improved keyboard support, and introduced of AutoSelectFirstItem on Autocomplete component.
    
    
        He created an entirely new **LoadingIndicator** component.

#### [Jimmys20](https://github.com/Jimmys20)

Jimmy helped us to improve **Steps** navigation by adding a constraint feature that enables us to control which step can be navigated.

#### [EnsignPayton](https://github.com/EnsignPayton)

A transient service in .NET dependency injection can lead to some nasty memory leaks. Disposing such services is hard, and EnsignPayton has helped to come up with a working solution. Based on our internal testing, memory leaks should now be minimal, if any. We hope this optimization will lead to fever errors in production environments.

#### [aladotnet](https://github.com/aladotnet)

The **aladotnet** has created a **FluentValidation** component and he was willing to give it away as part of the Blazorise core repository.

## Support 📞

If you want to help the project and already work for a large organization, please consider purchasing a commercial license to assist us in becoming a sustainable business. Then we'll be able to resume work on Blazorise.

With a commercial license, you get premium forum support as well as access to our private repositories and community-licensed themes. To learn more, visit us at [Blazorise Commercial](commercial).

## Thanks, and stay tuned for more 🤝

We are a small organization, so any help is highly appreciated. We'd like to thank everyone who contributed to making this release a reality.

This is not the end of the 1.x branch. A new 1.2 milestone is already in works so you can expect some more exciting features coming in the next few months.
