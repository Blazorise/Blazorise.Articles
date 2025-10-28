---
title: Real-Time Blazor Apps: Integrating SignalR and Blazorise Notifications
description: Learn how to build real-time Blazor Server and Blazor WebAssembly apps using SignalR, and surface live updates through Blazorise Toast notifications and ToastService.
permalink: /blog/real-time-blazor-apps-signalr-and-blazorise-notifications
canonical: /blog/real-time-blazor-apps-signalr-and-blazorise-notifications
image-url: img/blazor-signalr-notifications.png
image-title: Real-Time Blazor Apps with SignalR and Blazorise Notifications
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: How To Guides
posted-on: 2025-10-28
read-time: 11 min
---

# Real-Time Blazor Apps: Integrating SignalR and Blazorise Notifications

If you've ever wanted your Blazor app to **instantly reflect live data** like chats, dashboards, or Kanban task boards, then SignalR is your best friend.

And when you pair it with [Blazorise Toast notifications](docs/components/toast), you can make those updates *visible and friendly* to your users.

In this guide, you’ll learn how to:

- Build real-time connections between clients using **SignalR**
- Broadcast updates from the server or between users
- Use **Blazorise Toasts** and `ToastService` to notify users of live events
- Architect the entire flow cleanly for both **Blazor Server** and **Blazor WebAssembly**

---

## Why SignalR?

SignalR is a real-time communication framework built into ASP.NET Core.
It uses **WebSockets** under the hood (with graceful fallbacks), allowing servers to push updates instantly to connected clients.

Typical use cases include:

- Live chat systems
- Real-time dashboards and analytics
- Stock tickers or auction updates
- Multi-user collaboration (e.g., Kanban boards, document editing)

In Blazor, SignalR fits naturally, especially in **Blazor Server**, which already runs over SignalR internally.

---

## Step 1: Add SignalR to Your Blazor Project

Whether you're using **Blazor Server** or **Blazor WebAssembly Hosted**, the setup is nearly identical.

### Install dependencies

```bash
dotnet add package Microsoft.AspNetCore.SignalR.Client
```

### Define a Hub

A **hub** is a high-level abstraction for two-way communication between server and clients.

Create a `NotificationHub.cs` file in your `Hubs` folder:

```csharp
using Microsoft.AspNetCore.SignalR;

namespace RealTimeBlazorApp.Hubs;

public interface INotificationsClient
{
    Task ReceiveMessage( string user, string message );
    Task ReceiveChange( string title, string content );
}

public class NotificationHub : Hub<INotificationsClient>
{
    public Task SendMessage( string user, string message )
        => Clients.All.ReceiveMessage( user, message );

    public Task NotifyChange( string title, string content )
        => Clients.All.ReceiveChange( title, content );
}
```

---

### Register the Hub in `Program.cs`

Add the following to your app configuration:

```csharp
var builder = WebApplication.CreateBuilder( args );

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// Add SignalR
builder.Services.AddSignalR();

builder.Services.AddResponseCompression( opts =>
{
    opts.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(
        ["application/octet-stream"] );
} );

builder.Services
    .AddBlazorise( options =>
    {
        options.Immediate = true;
    } )
    .AddBootstrap5Providers()
    .AddFontAwesomeIcons();

builder.Services.AddSingleton<TaskUpdateService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if ( !app.Environment.IsDevelopment() )
{
    app.UseExceptionHandler( "/Error" );
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseAntiforgery();

app.MapStaticAssets();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.UseResponseCompression();
app.MapHub<NotificationHub>( "/notificationHub" );

app.Run();
```

Now your SignalR hub is ready to broadcast updates.

---

## Step 2: Connect to the Hub from Blazor

On the client side (in a Blazor component), we’ll create a `HubConnection` that listens for messages and displays notifications using **Blazorise Toasts**.

### Example: Real-Time Notification Listener

Create a component called `LiveNotifications.razor`:

```razor
@using Microsoft.AspNetCore.SignalR.Client
@inject IToastService ToastService
@inject NavigationManager Navigation
@implements IAsyncDisposable

<Heading>Real-Time Notifications</Heading>

@if ( messages.Count == 0 )
{
    <Paragraph>
        No messages yet...
    </Paragraph>
}
else
{
    <UnorderedList>
        @foreach ( var msg in messages )
        {
            <UnorderedListItem>@msg</UnorderedListItem>
        }
    </UnorderedList>
}

@code {
    private HubConnection? hubConnection;
    private List<string> messages = new();

    protected override async Task OnInitializedAsync()
    {
        hubConnection = new HubConnectionBuilder()
            .WithUrl( Navigation.ToAbsoluteUri( "/notificationHub" ) )
            .WithAutomaticReconnect()
            .Build();

        hubConnection.On<string, string>( "ReceiveMessage", async ( user, message ) =>
        {
            messages.Add( $"{user}: {message}" );
            await ToastService.Info( $"New message from {user}", message );
            await InvokeAsync( StateHasChanged );
        } );

        hubConnection.On<string, string>( "ReceiveChange", async ( title, content ) =>
        {
            await ToastService.Success( title, content );
        } );

        await hubConnection.StartAsync();
    }

    public async ValueTask DisposeAsync()
    {
        if ( hubConnection is not null )
            await hubConnection.DisposeAsync();
    }
}
```

This component listens for two events:
- **ReceiveMessage** - displays a toast with user messages
- **ReceiveChange** - displays a toast for general system or data changes

---

## Step 3: Trigger Updates from the Server

From any part of your app-controllers, background services, or even hosted jobs, you can **broadcast** events through the hub context.

Example: notify users when a task is updated.

```csharp
using Microsoft.AspNetCore.SignalR;
using RealTimeBlazorApp.Hubs;

namespace RealTimeBlazorApp.Services;

public class TaskUpdateService
{
    private readonly IHubContext<NotificationHub> _hubContext;

    public TaskUpdateService( IHubContext<NotificationHub> hubContext )
    {
        _hubContext = hubContext;
    }

    public async Task NotifyTaskUpdatedAsync( string taskName, string status )
    {
        await _hubContext.Clients.All.SendAsync( "ReceiveChange", "Task Updated", $"{taskName} is now {status}" );
    }
}

```

Register it in `Program.cs`:

```csharp
builder.Services.AddSingleton<TaskUpdateService>();
```

And call it anywhere, for example from a background service or API endpoint:

```csharp
await _taskUpdateService.NotifyTaskUpdatedAsync("UI Review", "Completed");
```

Every connected client instantly receives a **toast notification** via the `ToastService`.

---

## Step 4: Using ToastService for Live Feedback

Blazorise’s `ToastService` is the easiest way to show user-friendly notifications dynamically.

Add the Toast container in your `Routes.razor` or `_Host.cshtml`:

```razor
<Router AppAssembly="typeof(Program).Assembly">
    <Found Context="routeData">
        <RouteView RouteData="routeData" DefaultLayout="typeof(Layout.MainLayout)" />
        <FocusOnNavigate RouteData="routeData" Selector="h1" />
    </Found>
</Router>

<ToastProvider />
```

This ensures all toast notifications, whether user messages or system updates, show globally across your app.

---

## Step 5: Extending to Dashboards and Collaboration Boards

Once your real-time infrastructure is ready, you can reuse it for more advanced scenarios.

### Real-Time Dashboard Example

Broadcast live data points from a server background service:

```csharp
using Microsoft.AspNetCore.SignalR;
using RealTimeBlazorApp.Hubs;

namespace RealTimeBlazorApp.Services;

public class DashboardUpdateService : BackgroundService
{
    private readonly IHubContext<NotificationHub> _hub;

    public DashboardUpdateService( IHubContext<NotificationHub> hub )
    {
        _hub = hub;
    }

    protected override async Task ExecuteAsync( CancellationToken stoppingToken )
    {
        var rand = new Random();

        while ( !stoppingToken.IsCancellationRequested )
        {
            var cpu = rand.Next( 10, 90 );
            var mem = rand.Next( 20, 80 );
            await _hub.Clients.All.SendAsync( "ReceiveChange", "System Metrics", $"CPU: {cpu}%, Memory: {mem}%" );
            await Task.Delay( 3000, stoppingToken );
        }
    }
}
```

and don't forget to register it in your `Program.cs`.

```csharp
builder.Services.AddHostedService<DashboardUpdateService>();
```

In your UI, the toast notifications will continuously reflect system metrics.

---

### Task Board Example

For a Kanban-style board, you could have multiple users connected. When one user updates a task, all others instantly see it.

```csharp
public async Task UpdateTaskAsync(TaskItem item)
{
    await _hubContext.Clients.All.SendAsync("ReceiveChange", "Task Board", $"{item.Title} moved to {item.Status}");
}
```

This creates an effortless collaborative experience.

---

## Step 6: Handling Reconnection Gracefully

SignalR connections can drop (e.g., due to network changes).
By enabling `.WithAutomaticReconnect()`, Blazor will retry automatically.

You can also react to reconnection events:

```csharp
hubConnection.Closed += async error =>
{
    await ToastService.Warning( "Disconnected", "Attempting to reconnect..." );
    // SignalR auto-reconnect kicks in if configured; no manual start needed
};

hubConnection.Reconnecting += async error =>
{
    await ToastService.Warning( "Connection lost", "Attempting to reconnect..." );
};

hubConnection.Reconnected += async connectionId =>
{
    await ToastService.Success( "Reconnected", "Real-time updates restored" );
};
```

---

## Step 7: Putting It All Together

Here’s the overall architecture:

1. **NotificationHub** – central SignalR hub broadcasting messages
2. **ToastService + ToastProvider** – display system and user updates
3. **Server-side services** – broadcast events when data changes
4. **Client components** – connect to the hub and react to messages
5. **Optional background services** – emit recurring data updates

---

### Result

Your users will experience **instant feedback**, **real-time awareness**, and **a professional polish**, without manual refreshes.

This approach works seamlessly with:
- **Blazor Server** (simplest setup)
- **Blazor WebAssembly Hosted** (client connects directly to hub)
- **Blazor Hybrid (MAUI)** (same SignalR connection principles)

---

## Conclusion

With just a few lines of setup, SignalR and Blazorise Toasts turn your Blazor app into a **live, reactive experience**.

- Use SignalR hubs to broadcast real-time updates
- Use Blazorise Toasts to notify users visually
- Combine both for dashboards, chats, and multi-user collaboration

## Source Code

The full source-code of the blog post can be found on our [GitHub](https://github.com/Megabit/Blazorise-Samples/tree/main/RealTimeBlazorApp) repository.

---

**💡 Tip:**  
If you’re building more complex reactive interfaces, combine this pattern with the [Blazorise DataGrid](docs/extensions/datagrid) or [Scheduler](docs/extensions/scheduler) components to visualize live updates directly within structured data views.