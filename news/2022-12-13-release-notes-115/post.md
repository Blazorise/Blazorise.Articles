---
title: Maintenance release: Blazorise 1.1.5
description: This blog post contains the changelog of the most recent bug fixes included in the Blazorise v1.1.5 release.
permalink: /news/release-notes/115
canonical: /news/release-notes/115
image-url: img/v115.png
image-title: Maintenance release: Blazorise 1.1.5
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2022-12-13
read-time: 2 min
---

# Maintenance release: Blazorise 1.1.5

A new maintenance release is now available to the general public. This release fixes some nasty bugs, particularly with the NumericPicker and Drag and Drop components.

This new **Blazorise 1.1.5** is a hotfix release to solve this and a few other minor issues that were fixed in the meantime. Blazorise 1.1.5 is a **recommended upgrade for all Blazorise 1.1 and Blazorise 1.1.4 users**.

For a detailed overview of the changes that 1.1.5 included and which are also part of this new release, please read the [1.1 support notes](https://github.com/Megabit/Blazorise/issues/4147).

## Changes

Here are the main changes since 1.1.4-stable:

- [#4331](https://github.com/Megabit/Blazorise/pull/4331): Implement delayed execution in BaseAfterRenderComponent
- [#4280](https://github.com/Megabit/Blazorise/issues/4280): Negative VirtualizeCount for Datagrids
- [#4289](https://github.com/Megabit/Blazorise/issues/4289): Datagrid virtualization with external source makes scrolling instable
- [#4299](https://github.com/Megabit/Blazorise/issues/4299): Markdown image upload not working as expected in Blazor WASM
- [#4339](https://github.com/Megabit/Blazorise/pull/4339): NumericPicker: check for large number values
- [#4340](https://github.com/Megabit/Blazorise/pull/4340): Markdown and RichTextEdit: Invoke immediately if Rendered
- [#4351](https://github.com/Megabit/Blazorise/pull/4351): DragDrop: optimizations
- [#4352](https://github.com/Megabit/Blazorise/issues/4352): Text Align on ant design not working
- [#4357](https://github.com/Megabit/Blazorise/pull/4357): Dropdown: use fixed strategy
- [#4368](https://github.com/Megabit/Blazorise/pull/4368): Autocomplete fixes // MinLength = 0
- [#4367](https://github.com/Megabit/Blazorise/pull/4367): Datagrid: Introduce CancellationTokenSource and corresponding cancellation on filter changes
- [#4364](https://github.com/Megabit/Blazorise/issues/4364): Preselection of ListView-Element is not working

## Known incompatibilities

As of now, there are no known incompatibilities with the previous Blazorise 1.1.x releases. We encourage all users to upgrade to 1.1.5.

If you experience any unexpected behavior change in your projects after upgrading to 1.1.5, please [file an issue on GitHub](https://github.com/Megabit/Blazorise/issues).

## Support

Megabit Ltd, a small organization based in Croatia, maintains the open-source component library Blazorise. We strongly believe in the open-source ecosystem, so we're giving it away for free through our Blazorise Community licenses.

If you want to help the project and are already a part of a large organization, please consider purchasing a commercial license to help us become a sustainable business. Then we'll be able to continue working on Blazorise.

With a commercial license, you get premium forum support as well as access to our private repositories and community-licensed themes. To learn more, visit us at [Blazorise Commercial](commercial).
