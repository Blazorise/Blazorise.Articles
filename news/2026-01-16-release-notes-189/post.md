---
title: Blazorise 1.8.9 - Editing & Overlay Fixes
description: Blazorise 1.8.9 delivers key reliability fixes for DataGrid rapid editing and Autocomplete dropdown positioning inside FilterMenuTemplate, plus several targeted stability improvements.
permalink: /news/release-notes/189
canonical: /news/release-notes/189
image-url: img/v189.png
image-title: Blazorise 1.8.9 - Editing & Overlay Fixes
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-12-05
read-time: 2 min
---

# Blazorise 1.8.9 - Editing & Overlay Fixes

Blazorise **1.8.9** continues refining the 1.8.x line with a focused set of fixes aimed at **editing reliability**, **overlay positioning**, and **edge-case validation behavior**.

While this is a smaller release, it addresses a couple of issues that directly impact day-to-day workflows in data-heavy and form-driven applications.

---

## Highlights of 1.8.9

### DataGrid: Rapid Editing Reliability Restored

A critical issue affecting **rapid DataGrid editing** has been resolved.

When editing cells with `Immediate=false`, values could fail to persist if users typed quickly and pressed **Tab** or clicked out of the field. This was especially noticeable in keyboard-driven data entry scenarios.

With 1.8.9, DataGrid now **consistently commits edited values** regardless of how the user exits the cell, restoring reliable behavior for inline editing.

Fix: **[#6351](https://github.com/Megabit/Blazorise/issues/6351)**

---

### Autocomplete in Filter Menus: Dropdown Positioning Fixed

Autocomplete used inside `FilterMenuTemplate` could open its dropdown **too far left, too far right, or clipped**, often requiring custom CSS workarounds to remain usable.

The dropdown positioning logic has been corrected so that Autocomplete now opens **predictably and within visible bounds**, even when embedded in DataGrid filter menus or constrained layouts.

Fix: **[#6314](https://github.com/Megabit/Blazorise/issues/6314)**

---

## Full changelog

All fixes included in **1.8.9**:

- [#6310](https://github.com/Megabit/Blazorise/issues/6310) Scheduler refresh after adding or removing appointments
- [#6319](https://github.com/Megabit/Blazorise/issues/6319) Documentation Mention in the Validation documentation that Validation is skipped when an input is Disabled
- [#6317](https://github.com/Megabit/Blazorise/issues/6317) Tooltip not working with Multiline and text truncate
- [#6314](https://github.com/Megabit/Blazorise/issues/6314) Autocomplete in FilterMenuTemplate - Autocomplete Dropdown opens to the left/right or with CSS workaround not low enough
- [#6344](https://github.com/Megabit/Blazorise/issues/6344) Bug: In some validation messages such as MinLength, the argument order is incorrect
- [#6358](https://github.com/Megabit/Blazorise/issues/6358) SelectedValueChanged on Select silences Exceptions
- [#6361](https://github.com/Megabit/Blazorise/issues/6361) Signature Pad Not Registering Input on iOS Safari
- [#6351](https://github.com/Megabit/Blazorise/issues/6351) Bug: DataGrid rapid editing does not save value when entered or tabbed out of field with Immediate=false

---

## Upgrading

Blazorise **1.8.9** is a safe, drop-in update for all **1.8.x** projects.

No breaking changes are introduced, only targeted fixes and behavior corrections.

---

## Thank you & commercial support

Each release, big or small, helps keep Blazorise stable, modern, and production-ready.  
Your bug reports, suggestions, and commercial support make these updates possible.

Explore our commercial licensing options here: [Blazorise Commercial](https://blazorise.com/commercial "Link to Blazorise Commercial").  
Your contribution ensures the continued evolution of Blazorise for professional use.