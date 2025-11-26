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

This process is extremely fast **when the number of components and DOM nodes is small**. But for large Blazor applications, especially dashboards, schedulers, and data grids, unnecessary re-renders can trigger large tree diffs, consuming CPU and causing UI lag.

---

## Understanding When Re-Renders Happen

Blazor re-renders a component when:

### 1. Call to `StateHasChanged`

Any event callback or external trigger that calls `StateHasChanged()` forces a re-render.

### 2. Parameter changes from a parent

Whenever a parent re-renders, all children receive new parameters and re-render as well.

### 3. Cascading parameter changes

By default, cascading parameters trigger re-rendering of all consuming components whenever the parent re-renders, even if the actual value hasn't changed.

If the cascaded value is immutable or guaranteed not to change, set:

```razor
<CascadingValue Value="..." IsFixed="true">
```

This tells Blazor not to re-send the cascading parameter on every parent render, which prevents unnecessary re-renders of all consumers.

> **Docs:** https://learn.microsoft.com/aspnet/core/blazor/components/cascading-values-and-parameters#fixed-cascading-parameters


### 4. `RenderFragment` content changes

Render fragments are treated as dynamic content and are always executed fresh on re-render.

For small apps this is fine; for large component trees this can turn expensive quickly.

---

## Avoid Over-Rendering with `ShouldRender`

Every component can override **`ShouldRender()`**, giving you control over whether a re-render should happen.

### Example: Preventing Unnecessary UI Updates

```csharp
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

`ShouldRender` executes **after** state has changed and **before** rendering starts. Returning `false` prevents expensive diffing and DOM updating for this component and all its children.

Use this carefully—skipping rendering means the UI might not reflect state until a later point.

> **Docs:** https://learn.microsoft.com/aspnet/core/blazor/components/rendering#suppress-ui-rendering


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
    private RenderFragment childFragment;

    protected override void OnInitialized()
    {
        childFragment = builder =>
        {
            builder.AddContent( 0, SomeExpensiveSection() );
        };
    }
}
```

By placing expensive UI regions inside controlled `RenderFragment` instances, you prevent them from being regenerated unnecessarily.

---

## Splitting the UI Into Smaller Components to Reduce Render Scope

Another powerful optimization strategy, often overlooked, is **splitting large UI blocks into smaller, focused components**.

> Event handlers declared in a parent component trigger *full parent re-renders*, which re-render the entire subtree. Moving event handlers down into smaller child components dramatically reduces render scope.

> **Docs:** https://learn.microsoft.com/aspnet/core/blazor/components/event-handling


Blazor renders *per component*, so by breaking a large page into multiple components, you naturally **divide the render tree into isolated subtrees**.

This means:

- When a small child component updates, **only that component** is re-rendered.
- When the parent updates, children **only re-render if their parameters actually changed**.
- The diffing process becomes faster because the subtree size is smaller.

Example:

```razor
<div>
    <Header />
    <Filters />
    <OrdersList Orders="@Orders" />
    <SummaryPanel Data="@Summary" />
</div>
```

Even if the parent receives new data, components like `<Header />` or `<Filters />` won't re-render unless their parameters change. This effectively reduces the cost of every render because the renderer can skip entire sections of the UI.

**In large Blazorise apps (e.g., DataGrid, Scheduler, dashboards), splitting components is often one of the biggest wins**, because it prevents massive UI fragments from being regenerated on each state change.

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

Note: `RenderFragment<T>` itself does **not** reduce re-renders unless the fragment instance is memoized. The common mistake is creating a new fragment each render.

A corrected pattern uses a cached field:

```csharp
private RenderFragment<Person>? _template;

protected override void OnInitialized()
{
    _template = person => builder =>
    {
        builder.AddContent(0, $"{person.FirstName} {person.LastName}");
    };
}
```

The optimization comes from stabilizing the delegate instance, not from `RenderFragment<T>` alone.

The benefits apply only when the template is memoized. Otherwise Blazor treats it as a fresh fragment each render.

> **Docs:** https://learn.microsoft.com/aspnet/core/blazor/components/templated-components

- Template is a stable delegate
- Only item parameters change, not the entire loop
- Rendering diffs are dramatically smaller

---

## Using Keyed Elements to Improve DOM Stability

Adding a `@key` directive helps Blazor associate render output with stable identities.

```csharp
@foreach (var item in Items)
{
    <div @key="item.Id">@item.Name</div>
}
```

This prevents DOM reshuffling and reduces diffing complexity.

> **Docs:** https://learn.microsoft.com/aspnet/core/blazor/components/key


---

## Avoid Parameter Re-Renders with Complex Parameters

It's commonly assumed that Blazor re-renders child components only when a parameter changes.  
However, verified tests show the following behavior:

### Primitive parameters (`int`, `string`, `bool`, etc.)

Blazor checks value equality.  
If the value hasn't changed, the child component:

- does **not** re-render  
- does **not** receive `OnParametersSet`

### Complex parameters (`class`, `record`, struct, etc.)

Blazor always calls `SetParametersAsync` / `OnParametersSet` for these **every time the parent re-renders**, even when:

- the same reference instance is passed
- all values/property data are unchanged
- the object is immutable (record)
- nothing changed at all

In other words, **reference stability and immutability do not prevent re-renders** for complex types.

### Why records still matter

Records do not affect Blazor's render pipeline.  
But they help avoid accidental mutations and make change detection easier:

```csharp
item = item with { Name = "Updated" };
```

### How to actually prevent unnecessary re-renders
You must explicitly control rendering using `ShouldRender`:

```csharp
private ItemRecord? _lastItem;

protected override bool ShouldRender()
{
    if (!Equals(_lastItem, Item))
    {
        _lastItem = Item;
        return true; // UI needs update
    }

    return false; // skip render
}
```

This is the only reliable way to avoid unnecessary UI updates for complex parameter types.

### Full test project

You can verify this behavior using the reproducible test app:  
**https://github.com/Blazorise/BlazorParametersSet**

---

## Overriding Lifecycle Methods for Performance

### OnParametersSetAsync

Run heavy logic here, not in the render pipeline.

```csharp
protected override async Task OnParametersSetAsync()
{
    if (Data != null)
        Processed = await HeavyTransformation(Data);
}
```

### Avoid loading or processing data in OnInitializedAsync if parameters matter

When parameters determine initial loading, prefer `OnParametersSetAsync`.

---

## Disabling Re-Renders in Event Handlers (IHandleEvent)

You can suppress automatic re-renders triggered by event handlers by implementing `IHandleEvent`:

```csharp
public class NoRenderComponent : ComponentBase, IHandleEvent
{
    public Task HandleEventAsync(EventCallbackWorkItem callback, object? arg)
        => callback.InvokeAsync(arg); // invoke without StateHasChanged
}
```

This is useful when you want fine-grained manual control over rendering.

> **Docs:** https://learn.microsoft.com/aspnet/core/blazor/components/rendering#suppress-ui-rendering


---

## Real-World Pattern: Component-Level Render Throttling

Sometimes data changes rapidly (e.g., websocket updates).  
Use a throttling pattern to limit re-renders.

```csharp
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

```csharp
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
- Splitting the UI Into Smaller Components
- Pass immutable objects to prevent cascade renders.
- Use keyed lists to maintain DOM stability.
- Move heavy operations into `OnParametersSetAsync`.
- Throttle or batch updates for real-time data.

By combining these techniques, you can create large Blazorise applications that remain smooth and responsive, even with deeply nested component trees.