---
title: Update for the 1.0 release - patch 2
description: This blog post contains the changelog of the most recent bug fixes included in the Blazorise v1.0.2 release.
permalink: /news/release-notes/102
canonical: /news/release-notes/102
image-url: img/v102.png
image-title: Update for the 1.0 release - patch 2
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2022-03-30
read-time: 2 min
---

![Update for the 1.0 release - patch 2](img/v102.png)

# Update for the 1.0 release - patch 2

In this update, we're bringing many fixes for the v1.0 release. One of the most significant problems that are now fixed is the problem with caching of JS files that would have an invalid version, and then the older, unsupported version would be used by the browser.

Next, we fixed a long-standing problem with dropdowns inside a responsive table. This one was quite hard to do, but we managed it.

Overall, the new update is quite extensive and will bring more stability to Blazorise. Please update your projects and let us know if any problems arise.

## Change Log

- [#3555](https://github.com/Megabit/Blazorise/issues/3555): Chart Clicked event not working
- [#3566](https://github.com/Megabit/Blazorise/issues/3566): Tooltip not being updated
- [#3563](https://github.com/Megabit/Blazorise/issues/3563): Navigating away from Drag&Drop page causes dispose error
- [#3569](https://github.com/Megabit/Blazorise/issues/3569): Bootstrap 5 range color
- [#3571](https://github.com/Megabit/Blazorise/issues/3571): NumericPicker getting browser warning when SelectAllOnFocus="true"
- [#3489](https://github.com/Megabit/Blazorise/issues/3489): DataGrid: DataGridMultiSelectColumn - checkbox issue
- [#3551](https://github.com/Megabit/Blazorise/issues/3551): Datagrid multi selection not working properly
- [#3570](https://github.com/Megabit/Blazorise/pull/3570): Fix Markdown Image Upload: Allow Images with Sizes > 0 bytes (PR)
- [#3589](https://github.com/Megabit/Blazorise/issues/3589): ReplaceTab attribute causes binding and manual event to malfunction - no update on delete
- [#3608](https://github.com/Megabit/Blazorise/issues/3608): The requested module './utilities.js' does not provide an export named 'firstNonNull'
- [#3616](https://github.com/Megabit/Blazorise/issues/3616): Modal flickers after closing when "Visible" is bound
- [#3603](https://github.com/Megabit/Blazorise/issues/3603): Unit tests for components with DataGrid fail after upgrade to 1.0.1
- [#3591](https://github.com/Megabit/Blazorise/issues/3591): Trendline bugfix: don't call chart.update() after you add the trendlines (PR)
- [#3634](https://github.com/Megabit/Blazorise/issues/3634): NumericPicker is too picky over it's limits
- [#3638](https://github.com/Megabit/Blazorise/issues/3638): Border Color doesn't work.
- [#3605](https://github.com/Megabit/Blazorise/issues/3605): Dropdown positioned below datagrid rows

## Support

Megabit Ltd, a small organization based in Croatia, maintains the open-source component library Blazorise. We strongly believe in the open-source ecosystem, so we're giving it away for free through our Blazorise Community licenses.

If you want to help the project and are already a part of a large organization, please consider purchasing a commercial license to help us become a sustainable business. Then we'll be able to continue working on Blazorise.

With a commercial license, you get premium forum support as well as access to our private repositories and community-licensed themes. To learn more, visit us at Blazorise Commercial.
