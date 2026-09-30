---
title: Blazorise 2.3.3 - Custom Colors, Scheduler Improvements, and a New Website
description: Blazorise 2.3.3 adds arbitrary colors across components, improves Scheduler, DataGrid, NumericPicker, and Charts, and introduces a redesigned Blazorise website.
permalink: /news/release-notes/233
canonical: /news/release-notes/233
image-url: img/v233.jpg
image-title: Blazorise 2.3.3 - Custom Colors, Scheduler Improvements, and a New Website
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-09-29
read-time: 3 min
---

# Blazorise 2.3.3 - Custom Colors, Scheduler Improvements, and a New Website

Blazorise **2.3.3** is another maintenance update for the 2.3 release, with fixes and improvements across many parts of the framework, plus a couple of changes that grew into something much bigger than originally planned.

The biggest one is a major update to our **color system**. What started as a request to fix arbitrary colors led us to rethink how the `Color` parameter works. You can now use any CSS color directly on components that support `Color`, while keeping the existing semantic colors such as `Primary`, `Success`, and `Danger`.

We also made several improvements to **Scheduler, DataGrid, NumericPicker, Charts, Gantt**, and other components.

And you may have already noticed another big change: the **Blazorise website has been completely redesigned**. We wanted to move away from the previous Bootstrap-like look and give Blazorise a more modern and recognizable visual identity.

## Highlights

### Arbitrary Colors Across Blazorise Components

This improvement started with what looked like a simple bug report: arbitrary colors were not working as expected with the `Color` parameter.

The interesting part was that this was never actually how `Color` was designed to work. While `Color` accepts a string, that string was intended for custom CSS class names. The parameter itself was built around semantic colors such as `Primary`, `Success`, `Danger`, and `Info`, not arbitrary CSS color values.

At the same time, Blazorise already had support for CSS colors through `TextColor` and `Background`. That made us wonder if the same system could be brought directly into `Color`.

We started with a proof of concept, and it quickly turned into a larger refactor of the Blazorise color system.

Now, any component that exposes a `Color` parameter can also accept an arbitrary CSS color:

```razor
<ProgressBar Color="@("#DBB5E6")" Value="20" />

<Button Color="@("#DBB5E6")">Custom Button</Button>
```

Blazorise takes care of applying that color correctly to the component, including backgrounds, borders, text, and states such as hover and focus.

This works across **Button, Alert, ProgressBar, input elements, Switch**, and other components that use the Blazorise color system.

Existing semantic colors such as `Primary`, `Success`, and `Danger` continue to work as before. You can now choose between the colors defined by your theme or use an exact color when you need more control.

What started as a small request ended up making the entire color system much more flexible.

### Scheduler Improvements

Scheduler received several updates in this release.

Month view now supports `ItemStyling`, giving you more control over how appointments are displayed. We also fixed drag and drop when `UseInternalEditing="false"` and added an option to control the default duration of newly created appointments.

You can also hide the Scheduler delete button when the built-in delete action is not needed.

### New Blazorise Website

The public Blazorise website has been redesigned from the ground up.

The previous design worked well, but over time it started to look too close to a standard Bootstrap-based website. We wanted the Blazorise brand to have its own look and feel.

The new design uses a more modern visual style across the homepage, product pages, documentation entry points, education pages, pricing, and other public sections.

We also updated the content and structure across the website to make it easier to understand what Blazorise offers and to keep the branding consistent across all pages.

### NumericPicker and DataGrid Fixes

Several long-standing component issues have also been addressed.

NumericPicker now supports browser autofill and includes fixes around step handling.

DataGrid fixes include rapid editing when numeric columns use `double` values and an issue where `ScrollToRow` could scroll outside the visible window.

### Charts and Gantt Fixes

Charts received a fix for rendering problems that could appear in Blazor Server applications on slower connections.

We also adjusted the proportions of `SvgDoughnutChart` and fixed display formatting in the Gantt component.

---

Blazorise 2.3.3 includes a mix of new customization options, fixes to existing components, and improvements based on feedback from applications using Blazorise in production.

## Full Changelog

All changes included in **2.3.3**:

- [#6787](https://github.com/Megabit/Blazorise/issues/6787) Blazorise Migrator adding Item
- [#6788](https://github.com/Megabit/Blazorise/pull/6788) BarDropdown: fix JavaScript initialization for wrapperless dropdowns
- [#6789](https://github.com/Megabit/Blazorise/pull/6789) Docs: refresh public website, education content, and legal policies
- [#6791](https://github.com/Megabit/Blazorise/issues/6791) DatePicker doesn't have up/down controls for the time
- [#6801](https://github.com/Megabit/Blazorise/pull/6801) Website: redesign public pages and unify Blazorise branding
- [#6792](https://github.com/Megabit/Blazorise/issues/6792) Hide Scheduler delete button
- [#6798](https://github.com/Megabit/Blazorise/issues/6798) NumericPicker steps
- [#6794](https://github.com/Megabit/Blazorise/issues/6794) Scheduler month view ItemStyling
- [#6799](https://github.com/Megabit/Blazorise/issues/6799) Adjust proportions of SvgDoughnutChart
- [#6795](https://github.com/Megabit/Blazorise/issues/6795) Scheduler Draggable not working when using UseInternalEditing="false"
- [#6807](https://github.com/Megabit/Blazorise/issues/6807) Scheduler add an option to set the default duration of the appointment
- [#6808](https://github.com/Megabit/Blazorise/issues/6808) Gantt display formatting
- [#6800](https://github.com/Megabit/Blazorise/issues/6800) Custom colors in ProgressBar
- [#6607](https://github.com/Megabit/Blazorise/issues/6607) Chart rendering issues on Blazor Server with slow connections
- [#6476](https://github.com/Megabit/Blazorise/issues/6476) MCP SSE unable to call get_docs_page_api
- [#5972](https://github.com/Megabit/Blazorise/issues/5972) DataGridColumn / DataGridNumericColumn rapid editing problem when TItem is double
- [#5722](https://github.com/Megabit/Blazorise/issues/5722) DataGrid scrolling outside visible window using ScrollToRow
- [#4070](https://github.com/Megabit/Blazorise/issues/4070) NumericPicker does not support autofill from the browser

## Upgrading

Blazorise **2.3.3** is a maintenance release and a recommended update for applications already running Blazorise 2.3.

Simply update your Blazorise NuGet packages to version **2.3.3**. No migration steps or breaking changes are required.

If you find a regression or unexpected behavior after upgrading, please report it through our GitHub issue tracker.

## Thank you & commercial support

Thank you to everyone who reported issues, suggested improvements, and helped us test the changes included in this release.

For commercial licensing and support:  
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps us continue developing and maintaining Blazorise.