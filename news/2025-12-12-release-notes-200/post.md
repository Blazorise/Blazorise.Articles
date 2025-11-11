---
title: Announcing Blazorise 2.0 - Hvar
description: Blazorise 2.0, codenamed Hvar after the beautiful island in Croatia, is a significant update that brings a host of new features, enhancements, and optimizations to the framework. This release focuses on improving the developer experience, enhancing performance, and expanding the capabilities of Blazorise components.
permalink: /news/release-notes/200
canonical: /news/release-notes/200
image-url: img/v200.png
image-title: Announcing Blazorise 2.0 - Hvar
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2025-12-12
read-time: 7 min
pinned: true
---

# Announcing Blazorise 2.0 - Hvar

When we released Blazorise 1.8, we promised that the next version would be a major one, 2.0.

Blazorise 2.0, codenamed **Hvar** after the beautiful island in Croatia, is a significant update that brings a host of new features, enhancements, and optimizations to the framework. This release focuses on improving the developer experience, enhancing performance, and expanding the capabilities of Blazorise components.

## Key Blazorise 2.0 Highlights 💡

Here's a summary of what's new in this release:

- **Unified Input API**: All input components now use the standard `Value`, `ValueChanged`, and `ValueExpression` parameters for consistency across the framework.
- **Renamed Input Components**: Components like `TextEdit`, `DateEdit`, and `FileEdit` are now renamed to `TextInput`, `DateInput`, and `FileInput`.

Dive deeper below to discover the full potential of these features.

## Upgrading from 1.8.x to 2.0 👨‍🔧

To smoothly upgrade your application, follow these simple steps:

Update all **Blazorise.*** package references to **2.0**.

Blazorise should now work without any major breaking changes to the API.

## Blazorise 2.0 Migration Guide

### Unified Input API 🧩

One of the most significant improvements in Blazorise 2.0 is the **unified input API**.  
Previously, different input components used inconsistent parameter names, such as `Text`, `Checked`, `Date`, or `SelectedValue`.  
Starting with 2.0, all input components now follow a **standardized pattern** using:

- `Value`
- `ValueChanged`
- `ValueExpression`

This makes binding and form integration more consistent across all Blazorise components.

---

### Input Component Renaming ✍️

To better reflect their purpose and align with modern Blazor conventions, most input components have been renamed:

| Old Name       | New Name       |
|----------------|----------------|
| `ColorEdit`    | `ColorInput`   |
| `DateEdit`     | `DateInput`    |
| `FileEdit`     | `FileInput`    |
| `MemoEdit`     | `MemoInput`    |
| `NumericEdit`  | `NumericInput` |
| `TextEdit`     | `TextInput`    |
| `TimeEdit`     | `TimeInput`    |

---

### Parameter Changes by Component ⚙️

| Component      | Old Parameter(s)                        | New Parameter(s)         |
|----------------|------------------------------------------|--------------------------|
| **Check**      | `Checked`, `CheckedChanged`, `CheckedExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **ColorEdit** / **ColorPicker** | `Color`, `ColorChanged`, `ColorExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **DateEdit**   | `Date`, `DateChanged`, `DateExpression`  | `Value`, `ValueChanged`, `ValueExpression` |
| **DatePicker** | `Date`, `Dates`, `DateChanged`, `DatesChanged`, `DateExpression`, `DatesExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **DropdownList**     | `SelectedValue`, `SelectedValues`, `SelectedValueChanged`, `SelectedValuesChanged`, `SelectedValueExpression`, `SelectedValuesExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **RadioGroup** | `CheckedValue`, `CheckedValueChanged`, `CheckedValueExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **Select**     | `SelectedValue`, `SelectedValues`, `SelectedValueChanged`, `SelectedValuesChanged`, `SelectedValueExpression`, `SelectedValuesExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **SelectList**     | `SelectedValue`, `SelectedValues`, `SelectedValueChanged`, `SelectedValuesChanged`, `SelectedValueExpression`, `SelectedValuesExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **Switch**     | `Checked`, `CheckedChanged`, `CheckedExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **TextEdit** / **MemoEdit** | `Text`, `TextChanged`, `TextExpression` | `Value`, `ValueChanged`, `ValueExpression` |
| **TimeEdit** / **TimePicker** | `Time`, `TimeChanged`, `TimeExpression` | `Value`, `ValueChanged`, `ValueExpression` |

#### Additional Notes

- **Select** and **DatePicker** now support both single and multiple values via their `Value` parameter.
  - When using multiple selection modes, define `TValue` as either `IReadOnlyList<T>` or an array type (e.g. `DateTime[]` or `string[]`).
- **Dropdown** and **DropdownList** now use `EndAligned` instead of `RightAligned`.

---

### DataGrid Improvements 📊

- Renamed `CurrentPage` to `Page`
- Removed `DataGridPageChangedEventArgs`

## Layout & Grid Updates

The **Row** component has been simplified and modernized with a new unified `Gutter` parameter.  
This change replaces several older parameters with a new fluent API for controlling spacing between columns.

### What Changed

| Old Parameter(s) | New Equivalent |
|------------------|----------------|
| `(int Horizontal, int Vertical)? Gutter` | `IFluentGutter Gutter` |
| `HorizontalGutter` | Removed |
| `VerticalGutter` | Removed |
| `NoGutters` | Removed |

---

### Migration Steps 🧭

#### Step 1. **Update NuGet Packages**

```bash
dotnet add package Blazorise
dotnet add package Blazorise.Bootstrap5
dotnet add package Blazorise.Icons.FontAwesome
```

Ensure all `Blazorise.*` packages are upgraded to **version 2.0.0**.

#### Step 2 **Update Component Names**

```razor
<!-- Old -->
<TextEdit @bind-Text="@Name" />

<!-- New -->
<TextInput @bind-Value="@Name" />
```

#### Step 3. **Update Parameter Names**

- Rename `Text`, `Checked`, `Date`, etc. → `Value`
- Rename their corresponding `*Changed` and `*Expression` parameters.

#### Step 4. **Replace Deprecated Properties**

- `RightAligned` → `EndAligned`
- `CurrentPage` → `Page`

---

## Example Migration

**Before (1.8.x):**

```razor
<TextEdit Text="@Username" TextChanged="@OnUsernameChanged" />
<DateEdit Date="@SelectedDate" DateChanged="@OnDateChanged" />
<Check Checked="@IsChecked" CheckedChanged="@OnCheckedChanged" />
```

**After (2.0):**

```razor
<TextInput Value="@Username" ValueChanged="@OnUsernameChanged" />
<DateInput Value="@SelectedDate" ValueChanged="@OnDateChanged" />
<Check Value="@IsChecked" ValueChanged="@OnCheckedChanged" />
```

---

## New Features

### Heading Aliases

New component aliases have been introduced for both `Heading` and `DisplayHeading` components to simplify usage and improve readability in markup. You can now use `Heading1` through `Heading6` as direct equivalents to `<Heading Size="HeadingSize.Is1">` through `<Heading Size="HeadingSize.Is6">`, and `DisplayHeading1` through `DisplayHeading4` as equivalents to `<DisplayHeading Size="DisplayHeadingSize.Is1">` through `<DisplayHeading Size="DisplayHeadingSize.Is4">`.

These aliases make it easier to write semantically clear headings without needing to specify size attributes explicitly.


## Final Notes 🏁

Blazorise 2.0 introduces a consistent, modernized input system and simpler APIs that make form handling easier and more intuitive.  
Review your input components and update bindings for a smooth migration.