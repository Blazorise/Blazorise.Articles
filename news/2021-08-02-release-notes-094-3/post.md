---
title: v0.9.4 - patch 3 release notes
description: This blog post contains the changelog of the most recent bug fixes included in the Blazorise v0.9.4.3 release.
permalink: /news/release-notes/094-3
canonical: /news/release-notes/094-3
image-url: img/v094-3.png
image-title: v0.9.4 - patch 3 release notes
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2021-08-02
read-time: 1 min
---

# v0.9.4 - patch 3 release notes

The time for another set of bug fixes is here.

One of the most critical issues was again connected to the DataGrid validation process which has proven to be very nasty to fix.
    It took us a little longer than expected but we finally managed to do it. As a result, `RecursiveObjectActivator` is
    now working quite nicely and we already see some new features that will be possible to do with it in the future :)

<Blazorise.Link To="https://github.com/David-Moreira">David</Blazorise.Link> was also able to do some optimization with data-annotation validations that we failed to predict before the 0.9.4 release. So all is good now I hope.

While not critical, the bug fixes for the other issues are still welcome and are making 0.9.4 much more stable. The complete list of all changes in this release can be seen below.

## Change Log

- [#2768](https://github.com/Megabit/Blazorise/issues/2768): `RecursiveObjectActivator` Cyclic Object Traversal
- [#2754](https://github.com/Megabit/Blazorise/issues/2754): Problem with Layout After Blazorise Update
- [#2769](https://github.com/Megabit/Blazorise/issues/2769): Dropdown toggled-event stops working the second time you open the dropdown
- [#2779](https://github.com/Megabit/Blazorise/issues/2779): Modal Error - Cannot read property 'style' of null at `Object.resetAdjustments`
- [#2785](https://github.com/Megabit/Blazorise/issues/2785): DataGrid begin edit
- [#2777](https://github.com/Megabit/Blazorise/issues/2777): Unable to display manually display validation errors using inline editor of DataGrid
- [#2702](https://github.com/Megabit/Blazorise/issues/2702): Modal dialog moves content
- [#2795](https://github.com/Megabit/Blazorise/issues/2795): Value is not recognizable for disabled radio buttons
- [#2784](https://github.com/Megabit/Blazorise/issues/2784): NumericEdit ValidationError doesn´t work
- [#2783](https://github.com/Megabit/Blazorise/pull/2783): Remove instruction to include DataGrid CSS (PR)

## Support

Megabit Ltd, a small organization based in Croatia, maintains the open-source component library Blazorise. We strongly believe in the open-source ecosystem, so we're giving it away for free through our Blazorise Community licenses.

If you want to help the project and are already a part of a large organization, please consider purchasing a commercial license to help us become a sustainable business. Then we'll be able to continue working on Blazorise.

With a commercial license, you get premium forum support as well as access to our private repositories and community-licensed themes. To learn more, visit us at [Blazorise Commercial](commercial).
