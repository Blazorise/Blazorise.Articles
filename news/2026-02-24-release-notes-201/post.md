---
title: Blazorise 2.0.1 - First Stability Update for 2.0
description: Blazorise 2.0.1 delivers important fixes across NumericPicker, DatePicker, DataGrid, Collapse, and Charts, refining the 2.0 experience based on early production feedback.
permalink: /news/release-notes/201
canonical: /news/release-notes/201
image-url: img/v201.jpg
image-title: Blazorise 2.0.1 - First Stability Update for 2.0
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-02-24
read-time: 2 min
---

# Blazorise 2.0.1 - First Stability Update for 2.0

Blazorise **2.0.1** is the first refinement release following the 2.0 launch, focused entirely on stability and real-world reliability. As with every major version milestone, the first patch release is dedicated to polishing edge cases discovered in production and tightening component behavior under dynamic scenarios.

Version 2.0.1 resolves important issues affecting data input synchronization, visual indicators, interactive expansion behavior, layout components, and responsive chart rendering. There are no breaking changes in this update, only targeted corrections designed to improve predictability and consistency across applications built on the 2.0 platform.

## Highlights

### NumericPicker Programmatic Value Synchronization Fixed

NumericPicker now correctly updates its UI whenever the `Value` is changed programmatically. In certain scenarios, updating the bound value from code did not properly refresh the rendered component, causing visible inconsistencies between the UI and application state. This fix restores reliable two-way synchronization, ensuring NumericPicker behaves predictably in both user-driven and logic-driven workflows.

### DataGrid DetailRow Interaction Restored

An issue affecting DetailRow trigger and toggle behavior prevented rows from expanding or collapsing correctly in certain conditions. This fix restores expected master-detail interaction flow, ensuring DetailRow sections respond reliably to user input and state changes.

---

Together, these improvements make 2.0.x more stable, more predictable, and fully production-ready.

## Full Changelog

All fixes included in **2.0.1**:

- [#64021](https://github.com/Megabit/Blazorise/issues/6402) NumericPicker doesn't update Value programmatically
- [#6244](https://github.com/Megabit/Blazorise/issues/6244) Datepicker triangle symbol is shown at bottom instead of top
- [#6272](https://github.com/Megabit/Blazorise/issues/6272) DataGrid DetailRow Trigger and Toggle do not function properly
- [#6415](https://github.com/Megabit/Blazorise/issues/6415) Collapse not working
- [#6421](https://github.com/Megabit/Blazorise/issues/6421) Charts do not grow up despite Responsive=true

## Upgrading

Blazorise **2.0.1** is a safe, drop-in update for all **2.0.x** projects. 

Simply update your NuGet packages to version 2.0.1. No API changes and no migration steps are required.

## Thank you & commercial support

Major releases move the framework forward. Patch releases like this one make it dependable. Your bug reports, testing, feedback, and commercial support help ensure Blazorise continues to evolve while remaining production-grade.

Explore our commercial licensing options here:  
[Blazorise Commercial](https://blazorise.com/pricing "Link to Blazorise Commercial")

Your support ensures the continued evolution of Blazorise for professional and enterprise use.