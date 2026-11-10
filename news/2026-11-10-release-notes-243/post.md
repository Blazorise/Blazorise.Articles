---
title: Blazorise 2.4.3 - Day-One Support for .NET 11
description: Blazorise 2.4.3 adds support for the final release of .NET 11, just hours after its launch, along with fixes for the Report Designer.
permalink: /news/release-notes/243
canonical: /news/release-notes/243
image-url: img/v243.jpg
image-title: Blazorise 2.4.3 - Day-One Support for .NET 11
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-11-10
read-time: 2 min
---

# Blazorise 2.4.3 - Day-One Support for .NET 11

Blazorise **2.4.3** is a small maintenance release, but an important one for developers moving to the latest version of .NET.

Just hours after Microsoft released the final version of **.NET 11**, we updated Blazorise to support it. This makes Blazorise one of the first Blazor component libraries to offer day-one support for the new .NET release.

We also included a couple of fixes for the Report Designer.

## Highlights

### .NET 11 Final Support

**Blazorise is ready for .NET 11!**

We had already been testing and updating Blazorise throughout the .NET 11 preview and release candidate versions, so moving to the final release was straightforward.

With **2.4.3**, developers can start using the final version of .NET 11 with Blazorise right away, without having to wait for a later update.

Supporting new .NET versions as early as possible has always been important to us, and we're happy to continue that with .NET 11.

### Report Designer Fixes

We also fixed two issues in the **Report Designer**.

Text boxes now preserve line breaks when editing their content through the properties panel. Previously, editing multiline text could remove the line breaks.

We also added the ability to remove pages from a report, making it easier to correct mistakes while designing reports.

---

Blazorise 2.4.3 is a small update, but it ensures that developers can move to .NET 11 immediately while also improving the Report Designer.

## Full Changelog

All fixes included in **2.4.3**:

- [#6897](https://github.com/Megabit/Blazorise/issues/6897) Report text box with line breaks not working properly, new pages can't be removed

## Upgrading

Blazorise **2.4.3** is a recommended update for applications using Blazorise 2.4, especially for developers upgrading to **.NET 11**.

Simply update your Blazorise NuGet packages to version **2.4.3**. No additional Blazorise migration steps are required for this patch.

## Thank you & commercial support

Thank you to everyone who reported issues and helped us prepare Blazorise for .NET 11.

For commercial licensing and support:  
[Blazorise Commercial](pricing "Link to Blazorise Commercial")

Your support helps us continue developing and maintaining Blazorise.