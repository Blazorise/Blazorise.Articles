---
title: Optimizing Rendering and Reconciliation in Large Blazor Apps
description: Deep dive into the Blazor renderer, component lifecycle, and advanced rendering optimizations using ShouldRender, RenderFragments, and lifecycle methods.
permalink: /blog/optimizing-rendering-and-reconciliation-in-large-blazor-apps
canonical: /blog/optimizing-rendering-and-reconciliation-in-large-blazor-apps
image-url: img/optimizing-rendering.jpg
image-title: Optimizing Rendering and Reconciliation in Large Blazor Apps
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: Architecture
posted-on: 2025-11-25
read-time: 14 min
---

# Optimizing Rendering and Reconciliation in Large Blazor Apps

Modern Blazor applications can grow to hundreds of components, complex UI trees, and tens of thousands of DOM nodes.  
When this happens, rendering performance and reconciliation behavior become critical to maintaining responsiveness.

This article takes a deep, practical look at **how the Blazor renderer works under the hood**, why unnecessary rendering can degrade performance, and how advanced techniques such as `ShouldRender`, `RenderFragments`, and lifecycle methods can help you optimize complex Blazorise applications.

---

## How the Blazor Renderer Works

At its core, Blazor uses a **diffing renderer**. Each time a component triggers a re-render (via state changes, parameter changes, or events), Blazor:

1. Re-executes the component's `BuildRenderTree` method.
2. Produces a *new render tree*.
3. Diffs this tree against the previous one.
4. Applies minimal DOM updates needed to match the new render output.

This process is extremely fast **when the number of components and DOM nodes is small**.  
But for large Blazor applications, especially dashboards, schedulers, and data grids, unnecessary re-renders can trigger large tree diffs, consuming CPU and causing UI lag.

---

## Understanding When Re-Renders Happen

Blazor re-renders a component when:

### Call to `StateHasChanged`

Any event callback or external trigger that calls `StateHasChanged()` forces a re-render.

### Parameter changes from a parent

Whenever a parent re-renders, all children receive new parameters and re-render as well.

### Cascading parameter changes

These trigger full re-rendering of all consumers.

### `RenderFragment` content changes

Render fragments are treated as dynamic content and are always executed fresh on re-render.

For small apps this is fine; for large component trees this can turn expensive quickly.

---

## Avoid Over-Rendering with `ShouldRender`

Every component can override **`ShouldRender()`**, giving you control over whether a re-render should happen.

### Example: Preventing Unnecessary UI Updates

```razor
@code {
    private int counter;

    protected override bool ShouldRender()
    {
        // Avoid re-rendering unless counter is divisible by 10
        return counter % 10 == 0;
    }

    void Increment()
    {
        counter++;
        StateHasChanged();
    }
}
```

### Why it matters

`ShouldRender` executes **after** state has changed and **before** rendering starts.  
Returning `false` prevents expensive diffing and DOM updating for this component and all its children.

Use this carefully-skipping rendering means the UI might not reflect state until a later point.

---

## Optimizing Parent/Child Rendering

### The Problem

When a parent component re-renders, Blazor automatically re-renders all child components, even if their state hasn't changed.

### The Fix: Wrap dynamic children in `RenderFragment` boundaries

```razor
<ChildComponent>
    @childFragment
</ChildComponent>

@code {
    RenderFragment childFragment => builder =>
    {
        builder.AddContent(0, SomeExpensiveSection());
    };
}
```

By placing expensive UI regions inside controlled `RenderFragment` instances, you prevent them from being regenerated unnecessarily.

---

## Using `RenderFragment<T>` to Speed Up Data-Driven UIs

Large data visualizations (e.g., DataGrid or Scheduler) often need to render hundreds of rows.

Use `RenderFragment<T>` to generate UI **only for items that change**.

```razor
<SimpleList Items="@Items" Template="@Template" />

@code {
    List<Person> Items = new();

    RenderFragment<Person> Template => person => __builder =>
    {
        __builder.AddContent(0, $"{person.FirstName} {person.LastName}");
    };
}
```

Unlike looping inline in Razor, this approach reduces re-render cost because:

- Template is a stable delegate
- Only item parameters change, not the entire loop
- Rendering diffs are dramatically smaller

---

## Using Keyed Elements to Improve DOM Stability

Adding a `@key` directive helps Blazor associate render output with stable identities.

```razor
@foreach (var item in Items)
{
    <div @key="item.Id">@item.Name</div>
}
```

This prevents DOM reshuffling and reduces diffing complexity.

---

## Avoid Parameter Re-Renders with Immutable Objects

When passing objects as parameters, Blazor re-renders children **if the reference changes**, even if properties are identical.

### Better: Use immutable data

```csharp
record ItemModel(int Id, string Name);
```

This ensures children only re-render when real changes occur, not accidental reference mutations.

---

## Overriding Lifecycle Methods for Performance

### `OnParametersSetAsync`

Run heavy logic here, not in the render pipeline.

```razor
protected override async Task OnParametersSetAsync()
{
    if (Data != null)
        Processed = await HeavyTransformation(Data);
}
```

### Avoid loading or processing data in `OnInitializedAsync` if parameters matter

When parameters determine initial loading, prefer `OnParametersSetAsync`.

---

## Real-World Pattern: Component-Level Render Throttling

Sometimes data changes rapidly (e.g., websocket updates).  
Use a throttling pattern to limit re-renders.

```razor
@code {
    private bool pending;

    public void RefreshThrottled()
    {
        if (pending)
            return;

        pending = true;

        _ = Task.Delay(100)
            .ContinueWith(_ =>
            {
                pending = false;
                InvokeAsync(StateHasChanged);
            });
    }
}
```

This ensures Blazor only re-renders at most once every 100ms.

---

## Real-World Pattern: Memoized RenderFragments

Memoize expensive fragments so Blazor reuses them.

```razor
private RenderFragment? cachedContent;

protected override bool ShouldRender()
{
    return cachedContent == null;
}

RenderFragment BuildExpensive() => __builder =>
{
    __builder.OpenElement(0, "div");
    __builder.AddContent(1, "Heavy content...");
    __builder.CloseElement();
};

void Refresh()
{
    cachedContent = BuildExpensive();
    StateHasChanged();
}
```

This allows forcing a refresh only when needed.

---

## Real-World Scenario: Optimizing a Blazorise DataGrid

Data-heavy UI components like **Blazorise DataGrid**, **Scheduler**, or **SelectList** benefit tremendously from:

- Stable template delegates
- Immutable models
- Keyed rows
- Controlled re-renders using `ShouldRender`
- Paging or virtualization

Example:

```razor
<DataGrid TItem="Order"
          Data="@PagedOrders"
          PageSize="50"
          ShowPager="true">
</DataGrid>
```

Using paging alone reduces render work from thousands of rows to just dozens.

---

## Summary

Blazor's renderer is fast, but only when used intentionally.  
Large apps must minimize unnecessary rendering, stabilize UI trees, and reduce dynamic content churn.

**Key takeaways:**

- Use `ShouldRender` to stop unneeded re-renders.
- Use stable `RenderFragment` instances to isolate expensive UI.
- Pass immutable objects to prevent cascade renders.
- Use keyed lists to maintain DOM stability.
- Move heavy operations into `OnParametersSetAsync`.
- Throttle or batch updates for real-time data.

By combining these techniques, you can create large Blazorise applications that remain smooth and responsive, even with deeply nested component trees.