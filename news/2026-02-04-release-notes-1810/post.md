---
title: Blazorise 1.8.10 - Table Scrolling & Globalization Improvements
description: Blazorise 1.8.10 delivers a fix for Table ScrollToRow visibility, adds support for Invariant Globalization, and resolves Signature Pad input issues on iOS Safari.
permalink: /news/release-notes/1810
canonical: /news/release-notes/1810
image-url: img/v1810.jpg
image-title: Blazorise 1.8.10 - Table Scrolling & Globalization Improvements
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-02-04
read-time: 2 min
---

# Blazorise 1.8.10 - Table Scrolling & Globalization Improvements

Blazorise **1.8.10** is a focused maintenance release that addresses **table scrolling correctness**, introduces **Invariant Globalization support**, and resolves a **mobile Safari input issue** affecting Signature Pad.

While small in scope, these fixes improve reliability in real-world production scenarios, especially for applications targeting **mobile devices** and **globalized deployments**.

## Highlights of 1.8.10

### Table: ScrollToRow Visibility Corrected

An issue affecting the `ScrollToRow` functionality has been resolved.

Previously, scrolling to a row near the end of a table could leave the target row **partially or fully hidden at the bottom** of the scrollable viewport. This behavior made programmatic row navigation unreliable in longer tables.

With this fix, `ScrollToRow` now correctly aligns the target row so it is **fully visible within the scrolled view**, ensuring predictable behavior across all table sizes.

Fix: **[#6381](https://github.com/Megabit/Blazorise/issues/6381)**

### Invariant Globalization Support Added

Blazorise now supports **Invariant Globalization** scenarios.

This is particularly important for **trimmed**, **AOT**, and **containerized** deployments where full globalization data may be intentionally excluded to reduce application size.

With 1.8.10, Blazorise components correctly operate when `InvariantGlobalization` is enabled, avoiding runtime issues and unexpected formatting behavior in restricted environments.

Enhancement: **[#6380](https://github.com/Megabit/Blazorise/issues/6380)**

### Signature Pad: iOS Safari Input Restored

Signature Pad was not registering touch input on **iOS Safari**, making it unusable on iPhones and iPads.

The event handling logic has been corrected so touch input is now properly captured, restoring full Signature Pad functionality on mobile Safari browsers.

Fix: **[#6361](https://github.com/Megabit/Blazorise/issues/6361)**


## Full changelog

Everything included in **1.8.10**:

- [#6381](https://github.com/Megabit/Blazorise/issues/6381) Table `ScrollToRow` does not show row at the bottom of the scrolled view
- [#6380](https://github.com/Megabit/Blazorise/issues/6380) Add support for Invariant Globalization
- [#6361](https://github.com/Megabit/Blazorise/issues/6361) Signature Pad not registering input on iOS Safari

## Upgrading

Blazorise **1.8.10** is a safe, drop-in update for all **1.8.x** projects.

No breaking changes are introduced, only targeted fixes and compatibility improvements.

## Thank you & commercial support

Each release, big or small, helps keep Blazorise stable, modern, and production-ready.  
Your bug reports, suggestions, and commercial support make these updates possible.

Explore our commercial licensing options here:  
[Blazorise Commercial](https://blazorise.com/pricing "Link to Blazorise Commercial")

Your contribution ensures the continued evolution of Blazorise for professional use.