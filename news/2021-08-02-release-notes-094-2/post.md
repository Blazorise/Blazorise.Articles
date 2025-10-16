---
title: v0.9.4 - patch 2 release notes
description: This blog post contains the changelog of the most recent bug fixes included in the Blazorise v0.9.4.2 release.
permalink: /news/release-notes/094-2
canonical: /news/release-notes/094-2
image-url: img/v094-2.png
image-title: v0.9.4 - patch 2 release notes
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2021-08-02
read-time: 1 min
---

# v0.9.4 - patch 2 release notes

This patch release brings more bug fixes than usual. Which makes sense considering how many changes we introduced with v0.9.4 release.

The most nasty bug was with the DataGrid edit mode where it would raise an exception if you had any nested field as a complex object. But David was quick to investigate and issue a fix along with more unit tests so that it doesn't repeat in the future.

In any case, Blazorise should be much stable now so just grab new NuGets and update your projects 💪

## Change Log

- [#2706](https://github.com/Megabit/Blazorise/issues/2706): Bulma class .is-rounded is wrongly set
- [#2704](https://github.com/Megabit/Blazorise/issues/2704): In documentation, services link leads to a 404
- [#2709](https://github.com/Megabit/Blazorise/issues/2709): Tooltip doesn't display when Inline is true
- [#2702](https://github.com/Megabit/Blazorise/issues/2702): Modal dialog moves content
- [#2678](https://github.com/Megabit/Blazorise/issues/2678): Tooltip JS exception in 0.9.4
- [#2712](https://github.com/Megabit/Blazorise/issues/2712): Unable to change TooltipOptions.MaxWidth in Blazorise theme
- [#2722](https://github.com/Megabit/Blazorise/issues/2722): DatagridEditMode.Popup don't close Dialog after Save
- [#2734](https://github.com/Megabit/Blazorise/issues/2734): Datagrid-multi-selection: Re-populating the underlying list and maintaining the selection results in a wrong selection
- [#2726](https://github.com/Megabit/Blazorise/issues/2726): Bar chart click
- [#2695](https://github.com/Megabit/Blazorise/issues/2695): LayoutHeader Fixed="true" causes overlap of LayoutContent
- [#2747](https://github.com/Megabit/Blazorise/issues/2747): Sider layout with header on top does not render properly
- [#2752](https://github.com/Megabit/Blazorise/issues/2752): Bootstrap+Material-Demo: Left-Aligned Snackbar hidden behind sidebar-menu
- [#2758](https://github.com/Megabit/Blazorise/issues/2758): Error when edit button clicked in datagrid row with a complex object property
- [#2741](https://github.com/Megabit/Blazorise/pull/2741): Add Slovak language resources
- [#2748](https://github.com/Megabit/Blazorise/pull/2748): Slovak localization corrections

## Support

Megabit Ltd, a small organization based in Croatia, maintains the open-source component library Blazorise. We strongly believe in the open-source ecosystem, so we're giving it away for free through our Blazorise Community licenses.

If you want to help the project and are already a part of a large organization, please consider purchasing a commercial license to help us become a sustainable business. Then we'll be able to continue working on Blazorise.

With a commercial license, you get premium forum support as well as access to our private repositories and community-licensed themes. To learn more, visit us at Blazorise Commercial.
