---
title: v0.9.4 - patch 1 release notes
description: This blog post contains the changelog of the most recent bug fixes included in the Blazorise v0.9.4.1 release.
permalink: /news/release-notes/094-1
canonical: /news/release-notes/094-1
image-url: img/v094-1.png
image-title: v0.9.4 - patch 1 release notes
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2021-07-21
read-time: 1 min
---

# v0.9.4 - patch 1 release notes

There can never be any big release without some small issues. Blazorise `v0.9.4` is no exception so we
    bring you all the bug fixes reported since the launch day.

A lot of times we get reports regarding the JavaScript interop and having an invalid operation. Mostly the problem
    is because browsers tend to cache JS and CSS files and then are using an older version than the current application
    is expecting. The solution to the problem is easy. You just need to add a version parameter to the JS and CSS files
    whenever you update Blazorise, eg. `v=0.9.4.1`.

## Change Log

- [#2658](https://github.com/Megabit/Blazorise/issues/2658): DataGrid bug
- [#2663](https://github.com/Megabit/Blazorise/issues/2663): Default chart configuration
- [#2661](https://github.com/Megabit/Blazorise/issues/2661): Checkbox appears above other components
- [#2675](https://github.com/Megabit/Blazorise/issues/2675): DataGrid fails to update when items are added/deleted
- [#2676](https://github.com/Megabit/Blazorise/issues/2676): DataGrid selection mode

## Support

Megabit Ltd, a small organization based in Croatia, maintains the open-source component library Blazorise. We strongly believe in the open-source ecosystem, so we're giving it away for free through our Blazorise Community licenses.

If you want to help the project and are already a part of a large organization, please consider purchasing a commercial license to help us become a sustainable business. Then we'll be able to continue working on Blazorise.

With a commercial license, you get premium forum support as well as access to our private repositories and community-licensed themes. To learn more, visit us at [Blazorise Commercial](commercial).
