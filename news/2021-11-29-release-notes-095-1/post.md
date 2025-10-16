---
title: First update for the 0.9.5 release
description: This blog post contains the changelog of the most recent bug fixes included in the Blazorise v0.9.5.1 release.
permalink: /news/release-notes/095-1
canonical: /news/release-notes/095-1
image-url: img/v095-1.png
image-title: First update for the 0.9.5 release
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2021-11-29
read-time: 1 min
---

![First update for the 0.9.5 release](img/v095-1.png)

# First update for the 0.9.5 release

Hello, again!

In this release, we bring you some very important fixes for the v0.9.5 that we received from the community. One of the major issues we got was
    the bug with the newly introduced JS modules, where some nasty null exceptions would occur in rare cases. I must admit it was hard to track and reproduce
    but we managed to fix it. David help on tracking the real problem and helping
    with testing was the most valuable.

Not to mention, other reported issues are also fixed and you can see them all below.

## Change Log

- [#3122](https://github.com/Megabit/Blazorise/issues/3122): JSInterop Exception using Tooltip in v0.9.5
- [#3129](https://github.com/Megabit/Blazorise/issues/3129): Update list of supported languages
- [#3133](https://github.com/Megabit/Blazorise/issues/3133): ExtractHexDigits high CPU Usage + Time
- [#3136](https://github.com/Megabit/Blazorise/issues/3136): SnackbarStack title not displayed
- [#3151](https://github.com/Megabit/Blazorise/issues/3151): TableHeaderCell in DetailRowTemplate of virtualized DataGrid is shifted
- [#3144](https://github.com/Megabit/Blazorise/issues/3144): [Docs] Displayable's default value
- [#3145](https://github.com/Megabit/Blazorise/issues/3145): Modal documentation typo
- [#3152 PR](https://github.com/Megabit/Blazorise/pull/3152): Support types without object equal operator ( extend test for DateTime, TimeSpan ) #3152 PR
- [#3171](https://github.com/Megabit/Blazorise/issues/3171): Check inside Dropdown doesn't work anymore
- [#3157](https://github.com/Megabit/Blazorise/issues/3157): Carousel - 'Timer' Causing ObjectDisposedException
- [#3178](https://github.com/Megabit/Blazorise/issues/3178): Data grid filter causes page to reload when enter is pressed and only one column is filterable
- [#3149](https://github.com/Megabit/Blazorise/issues/3149): Problem in PopupClosing Event of Datagrid
- [#3150](https://github.com/Megabit/Blazorise/issues/3150): Button Issue Migrating 0.9.4.4 on RC 1 to 0.9.5 on .NET 6.0 RTM

## Support

Megabit Ltd, a small organization based in Croatia, maintains the open-source component library Blazorise. We strongly believe in the open-source ecosystem, so we're giving it away for free through our Blazorise Community licenses.

If you want to help the project and are already a part of a large organization, please consider purchasing a commercial license to help us become a sustainable business. Then we'll be able to continue working on Blazorise.

With a commercial license, you get premium forum support as well as access to our private repositories and community-licensed themes. To learn more, visit us at Blazorise Commercial.
