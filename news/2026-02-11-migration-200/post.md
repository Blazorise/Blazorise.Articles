---
title: Migrating to Blazorise 2.0
description: Full step-by-step migration guide for upgrading applications from Blazorise 1.8.x to the new Blazorise 2.0 (Velebit) release.
permalink: /news/migration/200
canonical: /news/migration/200
image-url: img/v200.png
image-title: Migrating to Blazorise 2.0
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
posted-on: 2026-02-11
read-time: 7 min
---

## Blazorise 2.0 Migration Guide

This guide walks you through all the changes required to migrate your application from **Blazorise 1.8.x** to **Blazorise 2.0 (Velebit)**. It consolidates every update step mentioned in the 2.0 announcement post so you can follow it in one place.

## Upgrade to latest .NET

Dropped support for legacy frameworks by retargeting shared build properties to .NET 8, 9, and 10 only.

Before anything else it is advised to upgrade to the latest version of .NET. Blazorise as of 2.0 support .NET 8, 9 and 10. Older frameworks, .NET 6 and 7 are removed.

Once you finish the upgrade and confirm everything works on the latest Blazorise 1.8.x, you can start with Blazorise migration.

## Upgrading from 1.8.x to 2.0 👨‍🔧

To smoothly upgrade your application, follow these simple steps:

Update all **Blazorise.*** package references to **2.0**.

Follow the guide bellow to handle all of the breaking changes in this release.

---

Before diving into the detailed migration steps, we strongly recommend installing the **Blazorise.Analyzers NuGet** package. It is the fastest and most reliable way to identify breaking changes in your project, as it flags renamed components, updated parameters, and obsolete APIs directly at compile time, along with clear guidance on how to resolve them.

Using the analyzer first allows you to fix the majority of issues directly in your IDE, significantly reducing the need to manually scan the migration guide. Once the reported errors are resolved, the rest of the guide can be used as a reference for finer details and edge cases, making the overall migration to Blazorise 2.0 smoother and more predictable.

In addition, we highly recommend installing the **Blazorise Migration CLI** tool. This tool can automatically migrate most of your codebase, handling the bulk of repetitive and mechanical changes for you. After it runs, only a small set of complex or hard-to-automate fixes typically remain, which can then be addressed manually.

The installation and usage instructions for the Migration CLI are available on the [docs/migration](Migration page), and for Analyzer it can be found on [docs/analyzer](Analyzer page).

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
- **Radio** component changed so that it cannot be used as standalone anymore. Only the use within the **RadioGroup** is allowed.

New usage:

```razor
<RadioGroup TValue="string" @bind-Value="Selected">
    <Radio Value="a">Option A</Radio>
    <Radio Value="b">Option B</Radio>
</RadioGroup>
@code {
    private string Selected { get; set; } = "a";
}
```

or

```razor
<Select TValue="int[]" @bind-Value="Selected" Multiple>
    <SelectItem Value="1">One</SelectItem>
    <SelectItem Value="2">Two</SelectItem>
    <SelectItem Value="3">Three</SelectItem>
    <SelectItem Value="4">Four</SelectItem>
</Select>
@code {
    private int[] Selected { get; set; } = new int[] { 1 };
}
```

### Radio

- Removed: `Checked`, `CheckedChanged`, `CheckedExpression`.
- Added: unified binding via `Value` / `ValueChanged` / `ValueExpression`.
- Behavior: selection is determined by comparing each radio's `Value` to the RadioGroup's `Value`; native `value` attribute now uses the option `Value`.

**Before**

```razor
<RadioGroup TValue="string" @bind-Value="Selected">
    <Radio Checked="true" CheckedChanged="OnCheckedA">A</Radio>
    <Radio Checked="false" CheckedChanged="OnCheckedB">B</Radio>
</RadioGroup>
```

**After**

```razor
<RadioGroup TValue="string" @bind-Value="Selected">
    <Radio Value="A">A</Radio>
    <Radio Value="B">B</Radio>
</RadioGroup>
```

### Validations

When using the `Validator` rule of the `Validation` component, you need to update the use of the `Value` argument of `ValidatorEventArgs`. In Blazorise 2.0, the `Value` will match the `TValue` parameter of the input component, so you need to update your code accordingly.

For example, if you were using the `Value` argument of `ValidatorEventArgs` like this:

**Before**

```csharp
private void OnValidateStartDate( ValidatorEventArgs e )
{
    var startValue = ( e.Value as DateOnly[] )?[0];

    // ...
}
```

**After**

You need to update it to use the `Value` parameter directly, like this:

```csharp
private void OnValidateStartDate( ValidatorEventArgs e )
{
    var startValue = e.Value as DateOnly?;

    // ...
}
```

### Removed BLMouseEventArgs

The `BLMouseEventArgs` class has been removed in Blazorise 2.0. You should use the `MouseEventArgs` class from the `Microsoft.AspNetCore.Components.Web` namespace instead.

### Autocomplete

#### Replace Obsolete parameters

| Old Parameter(s) | New Parameter(s) |
| ---------- | ---------- |
| `CurrentSearch` | `Search` |
| `CurrentSearchChanged` | `SearchChanged` |
| `Multiple` | `SelectionMode.Multiple` |
| `NotFoundContent` | `NotFoundTemplate` |

#### Remove Validation parameters

- Remove `Validator` and `AsyncValidator`. Wrap `Autocomplete` with `Validation` component to use Validator rules.
- Rename `MinLength` into `MinSearchLength`.

```razor
<Validation Validator="@ValidationRule.IsNotEmpty">
    <Field>
        <FieldLabel>Country</FieldLabel>
        <FieldBody>
            <Autocomplete TItem="Country"
                            TValue="string"
                            Data="@Countries"
                            TextField="@(( item ) => item.Name)"
                            ValueField="@(( item ) => item.Iso)"
                            Placeholder="Select a country"
                            MinSearchLength="0"
                            @bind-SelectedValue="@selectedCountry">
                <Feedback>
                    <ValidationError>Please select a country.</ValidationError>
                </Feedback>
            </Autocomplete>
        </FieldBody>
    </Field>
</Validation>
```

### CardLink

#### Replace Obsolete Parameters

| Old Parameter(s) | New Parameter(s) |
| ---------- | ---------- |
| `Source` | `To` |
| `Alt` | `Title` |

### DataGrid

Replace Obsolete Parameters

| Old Parameter(s) | New Parameter(s) |
| ---------- | ---------- |
| `GroupRowStyling` | `AggregateRowStyling` |
| `Navigable` | `NavigationMode.Row` |

### DataGridColumn

Replace Obsolete Parameters

| Old Parameter(s) | New Parameter(s) |
| ---------- | ---------- |
| `GroupCellClass` | `AggregateCellClass` |
| `GroupCellStyle` | `AggregateCellStyle` |
| `PopupFieldColumnSize` | `EditFieldColumnSize` |

### `CancellableRowChange<TItem>`

Replace Obsolete Fields

| Old Field | New Field |
| ---------- | ---------- |
| `Item` | `OldItem` |

### `SavedRowItem<TItem>`

Replace Obsolete Fields

| Old Field | New Field |
| ---------- | ---------- |
| `Item` | `OldItem` |

### VideoMedia

Replace Obsolete Fields

| Old Field | New Field |
| ---------- | ---------- |
| `Size` | `Height` |

### SnackbarLocation

Replace Obsolete Enums

| Old Enum | New Enum |
| ---------- | ---------- |
| `Start` | `BottomStart` |
| `End` | `BottomEnd` |

### SnackbarStackLocation

Replace Obsolete Enums

| Old Enum | New Enum |
| ---------- | ---------- |
| `Center` | `Default` |
| `Start` | `BottomStart` |
| `End` | `BottomEnd` |

### RichTextEdit

Remove completely any mention of `DynamicReference` record.

#### RichTextEditOptions

Remove any use of:

- `QuillJsVersion`
- `DynamicallyLoadReferences`
- `DynamicReferences`

### BlazoriseOptions

#### Replace Obsolete Options

| Component | Old Name | New Name |
| ----------- | ---------- | ----------     |
| **BlazoriseOptions** | `LicenseKey` | `ProductToken` |

### Replace Obsolete Components

Replaced deprecated alert components with provider-based implementations for messages, notifications, and page progress handling.

| Old Component Name  | New Component Name     |
| -----------         | ----------             |
| `MessageAlert`      | `MessageProvider`      |
| `PageProgressAlert` | `PageProgressProvider` |
| `NotificationAlert` | `NotificationProvider` |

### Remove Obsolete Enums

| Component | Old Name     |
| ----------- | ---------- |
| **Match** | `Custom` |

---

### DataGrid Improvements 📊

- Renamed `CurrentPage` to `Page`
- Removed `DataGridPageChangedEventArgs`

### DataGridColumn Width

The `Width` parameter of DataGridColumn has changed from `string` type into `IFluentSizing`.

Change:

```razor
<DataGridColumn Width="60px" />
```

Into:

```razor
<DataGridColumn Width="Width.Px( 60 )" />
```

### DataGrid Template Contexts

These templates now receive context objects instead of the raw row item. Update any code that assumes `context` is `TItem`.

| Template | Old Context | New Context |
| ---------- | ---------- | ---------- |
| `SortDirectionTemplate` | `SortDirection` | `SortDirectionContext<TItem>` |
| `DisplayTemplate` | `TItem` | `CellDisplayContext<TItem>` |
| `EmptyCellTemplate` | `TItem` | `CellDisplayContext<TItem>` |
| `DetailRowTemplate` | `TItem` | `DetailRowContext<TItem>` |

**Before**

```razor
<DataGridColumn Field="@nameof(Employee.Zip)">
    <SortDirectionTemplate>
        <Icon Name="@(context == SortDirection.Descending ? IconName.ArrowDown : IconName.ArrowUp)" />
    </SortDirectionTemplate>
    <DisplayTemplate>
        @($"{context.FirstName} {context.LastName}")
    </DisplayTemplate>
</DataGridColumn>

<DataGrid TItem="Employee" Data="@employees">
    <DetailRowTemplate>
        @context.Salaries?.Count
    </DetailRowTemplate>
    <EmptyCellTemplate>
        <Text Style="opacity: .5;">--</Text>
    </EmptyCellTemplate>
</DataGrid>
```

**After**

```razor
<DataGridColumn Field="@nameof(Employee.Zip)">
    <SortDirectionTemplate>
        <Icon Name="@(context.SortDirection == SortDirection.Descending ? IconName.ArrowDown : IconName.ArrowUp)" />
    </SortDirectionTemplate>
    <DisplayTemplate>
        @($"{context.Item.FirstName} {context.Item.LastName}")
    </DisplayTemplate>
</DataGridColumn>

<DataGrid TItem="Employee" Data="@employees">
    <DetailRowTemplate>
        @context.Item?.Salaries?.Count
    </DetailRowTemplate>
    <EmptyCellTemplate>
        <Text Style="opacity: .5;">--</Text>
    </EmptyCellTemplate>
</DataGrid>
```

### Layout & Grid Updates

The **Row** and **Fields** components have been simplified and modernized with a new unified `Gutter` parameter.
This change replaces several older parameters with a new fluent API for controlling spacing between columns.

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

### Blazorise SpinKit

- `Color` parameter now uses Blazorise color variants (use `HexColor` for hex values).
- `Size` parameter now uses the `Size` enum; for custom sizes set `--sk-size` or `--b-spinkit-size`.

### Scale configuration

A new `ChartAxisBorder` option (surfaced on `ChartAxis.Border`) maps directly to Chart.js v4 scale border configuration, covering color, width, dash, and offset settings alongside the existing grid options.

- `Grid.DrawBorder` → `Border.Display`
- `Grid.BorderWidth` → `Border.Width`
- `Grid.BorderColor` → `Border.Color`
- `Grid.BorderDash` → `Border.Dash`
- `Grid.BorderDashOffset` → `Border.DashOffset`

### Modal

Move `Centered`, `Scrollable`, and `Size` from `<ModalContent ...>` onto the parent `<Modal ...>` and leave ModalContent without those attributes. Example: 

```razor
<Modal Centered Scrollable Size="ModalSize.Large">
    <ModalContent>...</ ModalContent>
</Modal>
```

### Card

The `Size` parameter is now accepting enum as a value.

| Component | Old Parameter(s) | New Parameter(s) |
| ---------- | ---------- | ---------- |
| `CardTitle` | `int? Size` | `HeadingSize? Size` |
| `CardSubtitle` | `int Size` | `HeadingSize? Size` |

### RichTextEdit

If you were using the `<Editor>` fragment to update content, move that content to Value or `@bind-Value` because `<Editor>` is now only used for initial content when Value is null. If you have custom JS calling `OnContentChanged`, update it to pass (html, text).

### Tailwind 4

If you load Flowbite from a CDN, update both the CSS and JS to Flowbite 4.0.1 (for example `https://unpkg.com/ flowbite@4.0.1/dist/flowbite.min.css` and `https://unpkg.com/flowbite@4.0.1/dist/flowbite.js`) to stay aligned with the upgraded provider.