---
title: Blazorise 2.3.1 - First Maintenance Update for 2.3
description: Blazorise 2.3.1 brings the first maintenance update for the 2.3 release with backend Report rendering, modal focus fixes, DatePicker improvements, provider consistency updates, and smaller WebAssembly demos.
permalink: /news/release-notes/231
canonical: /news/release-notes/231
image-url: img/v231.jpg
image-title: Blazorise 2.3.1 - First Maintenance Update for 2.3
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-08-25
read-time: 3 min
---

# Blazorise 2.3.1 - First Maintenance Update for 2.3

It has been less than two weeks since the release of Blazorise **2.3**, and we are already back with the first maintenance update.

Blazorise **2.3.1** fixes several issues found after the 2.3 release and includes improvements across Report, DatePicker, modals, providers, documentation, and our demos.

Maintenance releases are intended to be safe updates, so if you are already using 2.3, we recommend moving to 2.3.1.

## Highlights

### Backend Service Report Renderer

The new **Report** component introduced in Blazorise 2.3 can now be rendered from backend services.

This makes it possible to generate reports outside the normal interactive component flow, which is useful when reports need to be created from background services, scheduled jobs, APIs, or other server-side processes.

This is one of the first improvements to Report after its release in 2.3, and we expect to keep improving it based on real-world usage and feedback.

### Modal Focus Trap Fix

We fixed an issue where the focus trap could stop working after opening a second modal.

Focus management is important for keyboard navigation and accessibility. With this fix, focus trapping now continues to work correctly when dialogs are opened multiple times or one after another.

### DatePicker Fixes

A few DatePicker issues also made it into this release.

Inline DatePicker is working again, and we adjusted DatePicker alignment to keep its layout consistent across different use cases.

### More Consistent Providers

Button and input sizes and border radii have been aligned across providers.

These are small visual differences, but they become noticeable when building larger forms and interfaces where buttons and inputs are used next to each other. The update makes these components look more consistent regardless of the selected provider.

### Smaller WebAssembly Demo Downloads

We reduced the initial download size of our **WebAssembly demos**.

The demos include a large number of Blazorise components and extensions, so keeping the startup download smaller helps them load faster and provides a better first experience when testing Blazorise in WebAssembly.

## Full Changelog

All changes included in **2.3.1**:

* [#6728](https://github.com/Megabit/Blazorise/issues/6728) Backend Service Report Renderer
* [#6733](https://github.com/Megabit/Blazorise/pull/6733) ContextMenu: prevent initial position flash
* [#6729](https://github.com/Megabit/Blazorise/issues/6729) Focus trap stops working in a second modal
* [#6737](https://github.com/Megabit/Blazorise/pull/6737) Docs: expand best practices and refresh component catalogs
* [#6739](https://github.com/Megabit/Blazorise/issues/6739) Inline DatePicker not working
* [#6700](https://github.com/Megabit/Blazorise/issues/6700) How to set the font size of a navigation menu
* [#6743](https://github.com/Megabit/Blazorise/issues/6743) Adjust alignment of DatePicker
* [#6751](https://github.com/Megabit/Blazorise/pull/6751) Demo: consolidate preferences in a settings offcanvas
* [#6752](https://github.com/Megabit/Blazorise/pull/6752) Providers: align button and input sizes and border radii
* [#6753](https://github.com/Megabit/Blazorise/pull/6753) Bootstrap5: fix themed ListGroup border color
* [#6755](https://github.com/Megabit/Blazorise/pull/6755) Demos: reduce WebAssembly startup download size

## Upgrading

Blazorise **2.3.1** is a maintenance release and a recommended update for applications already running Blazorise 2.3.

Simply update your Blazorise NuGet packages to version **2.3.1**. No migration steps or breaking changes are required.

If you find a regression or unexpected behavior after upgrading, please report it through our GitHub issue tracker.

## Thank you & commercial support

Thank you to everyone who tested 2.3, reported issues, and sent us feedback. Reports from real applications help us find problems quickly and make each maintenance release better.

For commercial licensing and support:
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps us continue developing and maintaining Blazorise.