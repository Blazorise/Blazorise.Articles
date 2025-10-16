---
title: Blazorise 1.8.5 – Focused Stability Update
description: Blazorise 1.8.5 delivers important stability fixes, including restored TransferList single-item selection and improved Table event handling to prevent excessive SignalR load on Blazor Server.
permalink: /news/release-notes/185
canonical: /news/release-notes/185
image-url: img/v185.png
image-title: Blazorise 1.8.5 – Focused Stability Update
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-10-14
read-time: 2 min
---

# Blazorise 1.8.5 – Focused Stability Update

Blazorise **1.8.5** continues our focus on **polish and reliability** within the 1.8.x line. This update resolves two important bugs affecting real-world projects: a **TransferList** selection issue and a **Table** event handling problem that could overload **Blazor Server** apps. These fixes ensure smoother interactivity and better performance, especially in SignalR-heavy environments.

## What's New in 1.8.5

This release focuses on improving usability and stability in key interactive components.

### TransferList: single item selection restored

A regression had caused **TransferList** items to become unselectable in single-selection mode. We've corrected this behavior so you can once again select and move individual items as expected. Multi-selection and drag-drop workflows remain unaffected.

### Table: prevent event bubbling and excessive SignalR traffic

We've addressed a critical issue where unused mouse events inside the **Table** component could bubble up and flood **SignalR** on **Blazor Server**. The fix prevents unnecessary event propagation, reducing noise and improving responsiveness for data-heavy applications.

## Full changelog

Everything that went into 1.8.5:

- [#6247](https://github.com/Megabit/Blazorise/issues/6247): [Bug]: TransferList – Single Item Selection Not Working
- [#6250](https://github.com/Megabit/Blazorise/pull/6250): Table: prevent unused events from bubbling up

## Upgrading

This release is a safe, drop-in update for all **1.8.x** users. No breaking changes are introduced. We recommend upgrading if you use **TransferList** or **Table** components, particularly in **Blazor Server** environments, to benefit from smoother interaction handling and reduced SignalR load.

## Thank you & commercial support

Each small fix contributes to a better, more reliable Blazorise experience. Thank you to everyone who reports issues and supports our work. Your feedback directly shapes every maintenance release.

Explore our commercial licensing options here: Blazorise Commercial. Your support helps us maintain and improve Blazorise at a professional standard.
