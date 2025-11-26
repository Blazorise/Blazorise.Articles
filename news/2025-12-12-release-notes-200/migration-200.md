---
title: Migrating to Blazorise 2.0
description: Full step-by-step migration guide for upgrading applications from Blazorise 1.8.x to the new Blazorise 2.0 (Hvar) release.
permalink: /news/migration/200
canonical: /news/migration/200
image-url: img/v200.png
image-title: Migrating to Blazorise 2.0
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-12-12
read-time: 7 min
---

## Blazorise 2.0 Migration Guide

This guide walks you through all the changes required to migrate your application from **Blazorise 1.8.x** to **Blazorise 2.0 (Hvar)**. It consolidates every update step mentioned in the 2.0 announcement post so you can follow it in one place.

## Upgrading from 1.8.x to 2.0 👨‍🔧

To smoothly upgrade your application, follow these simple steps:

Update all **Blazorise.*** package references to **2.0**.

Follow the guide bellow to handle all of the breaking changes in this release.

---

### Input Component Renaming ✍️

| Old Name         | New Name         |
| ---------------- | ---------------- |
| `ColorEdit`      | `ColorInput`     |
| `DateEdit`       | `DateInput`      |
| `FileEdit`       | `FileInput`      |
| `MemoEdit`       | `MemoInput`      |
| `NumericEdit`    | `NumericInput`   |
| `TextEdit`       | `TextInput`      |
| `TimeEdit`       | `TimeInput`      |

---

### Parameter Changes by Component ⚙️

Rename `Text`, `Checked`, `Date`, etc. → `Value`, along with their corresponding `*Changed` and `*Expression` parameters.

| Component | Old Parameter(s) | New Parameter(s) |
| ---------------- | ------------------------------------------ | -------------------------- |
| **Check** | `Checked`, `CheckedChanged`, `CheckedExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **ColorEdit** / **ColorPicker** | `Color`, `ColorChanged`, `ColorExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **DateEdit** | `Date`, `DateChanged`, `DateExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **DatePicker** | `Date`, `Dates`, `DateChanged`, `DatesChanged`, `DateExpression`, `DatesExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **DropdownList** | `SelectedValue`, `SelectedValues`, `SelectedValueChanged`, `SelectedValuesChanged`, `SelectedValueExpression`, `SelectedValuesExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **RadioGroup** | `CheckedValue`, `CheckedValueChanged`, `CheckedValueExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **Select** | `SelectedValue`, `SelectedValues`, `SelectedValueChanged`, `SelectedValuesChanged`, `SelectedValueExpression`, `SelectedValuesExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **SelectList** | `SelectedValue`, `SelectedValues`, `SelectedValueChanged`, `SelectedValuesChanged`, `SelectedValueExpression`, `SelectedValuesExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **Switch** | `Checked`, `CheckedChanged`, `CheckedExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **TextEdit** / **MemoEdit** | `Text`, `TextChanged`, `TextExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **TimeEdit** / **TimePicker** | `Time`, `TimeChanged`, `TimeExpression` | `Value`, `ValueChanged`, `ValueExpression` |

**Example:**

```razor
<!-- Old -->
<TextEdit @bind-Text="@Name" />

<!-- New -->
<TextInput @bind-Value="@Name" />
```

#### Additional Notes

- **Select** and **DatePicker** now support both single and multiple values via their `Value` parameter.
  - When using multiple selection modes, define `TValue` as either `IReadOnlyList<T>` or an array type (e.g. `DateTime[]` or `string[]`).
- **Dropdown** and **DropdownList** now use `EndAligned` instead of `RightAligned`.

### Remove Obsolete Options Parameters

| Component            | Old Name     | New Name       |
| -----------          | ----------   | ----------     |
| **BlazoriseOptions** | `LicenseKey` | `ProductToken` |

### Remove Obsolete Component Parameters

| Component    | Old Name   | New Name   |
| -----------  | ---------- | ---------- |
| **CardLink** | `Source`   | `To`       |
| **CardLink** | `Alt`      | `Title`    |

### Remove Obsolete Components

| Old Component Name  | New Component Name     |
| -----------         | ----------             |
| `MessageAlert`      | `MessageProvider`      |
| `PageProgressAlert` | `PageProgressProvider` |
| `NotificationAlert` | `NotificationProvider` |

---

### DataGrid Improvements 📊

- Renamed `CurrentPage` to `Page`
- Removed `DataGridPageChangedEventArgs`

### Layout & Grid Updates

The **Row** and **Fields** components have been simplified and modernized with a new unified `Gutter` parameter.
This change replaces several older parameters with a new fluent API for controlling spacing between columns.

#### What Changed

| Old Parameter(s)                         | New Equivalent         |
| ------------------                       | ----------------       |
| `(int Horizontal, int Vertical)? Gutter` | `IFluentGutter Gutter` |
| `HorizontalGutter`                       | Removed                |
| `VerticalGutter`                         | Removed                |
| `NoGutters`                              | Removed                |

---

### Blazorise Charts

### Remove Static Files

All Charts static files are now loaded dynamicaly. Remove any mention of:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/luxon@1.28.1"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-luxon@1.0.0"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-streaming@2.0.0"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@2.2.1"></script>
<script src="https://cdn.jsdelivr.net/npm/hammerjs@2.0.8"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.2.0/dist/chartjs-plugin-zoom.min.js"></script>
```

### Scale configuration

A new `ChartAxisBorder` option (surfaced on `ChartAxis.Border`) maps directly to Chart.js v4 scale border configuration, covering color, width, dash, and offset settings alongside the existing grid options.

- `Grid.DrawBorder` → `Border.Display`
- `Grid.BorderWidth` → `Border.Width`
- `Grid.BorderColor` → `Border.Color`
- `Grid.BorderDash` → `Border.Dash`
- `Grid.BorderDashOffset` → `Border.DashOffset`