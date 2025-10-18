---
title: Task Scheduling and Background Services in Blazor Server
description: Learn how to safely run background tasks, update the UI, and schedule recurring jobs in Blazor Server using hosted services, Quartz.NET, and InvokeAsync.
permalink: /blog/task-scheduling-and-background-services-in-blazor-server
canonical: /blog/task-scheduling-and-background-services-in-blazor-server
image-url: img/blazor-server-background-tasks.png
image-title: Task Scheduling and Background Services in Blazor Server
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: How To Guides
posted-on: 2025-10-18
read-time: 10 min
---

# Task Scheduling and Background Services in Blazor Server

If you've ever tried running background tasks in a Blazor Server app, you've probably noticed that things behave differently than in most .NET apps.  
Some operations appear delayed, UI updates don't happen, or worse you get mysterious exceptions about “threads not associated with the renderer.”  

This post is your complete guide to understanding *why that happens* and *how to fix it properly*. We'll cover how to:

- Safely trigger UI updates from background threads  
- Share data between background code and components  
- Schedule recurring work using **Quartz.NET**  
- Combine everything into a **production-ready architecture**

---

## Why Background Work Is Tricky in Blazor Server

Blazor Server uses a **real-time circuit** to keep the browser and server in sync over SignalR. Each user connection has its own circuit that tracks the UI state and component hierarchy.

That circuit is managed by a **synchronization context**. Think of it like a lane on the highway that only Blazor components can use.  

When you start a background thread or run a `Task.Run()` inside your app, that work happens **outside** this lane. So when the background thread tries to call `StateHasChanged()` directly, Blazor rejects it because it's not running in the right context.

You'll see this familiar error:

```plaintext
InvalidOperationException: The current thread is not associated with the renderer.
```

The fix isn't to avoid background work. It's to **reconnect** your background logic safely back to the Blazor circuit. That's what the next steps will accomplish.

---

## Step 1: The Communication Bridge - DataNotifier

When you have background tasks generating data (reports, cleanup results, updates), your components need a way to *react* when something changes.  
You don't want your background services reaching into UI code directly, that would couple server logic to rendering.

Instead, you create a **decoupled notification system** that simply says “Hey, something changed.” Components can then choose what to do when they hear that.

Here's the pattern:

```csharp
public class DataNotifier
{
    public event Action? OnDataChanged;

    public void NotifyDataChanged() => OnDataChanged?.Invoke();
}
```

This is a lightweight publisher–subscriber (pub–sub) pattern:
- **Background services** publish events by calling `NotifyDataChanged()`.
- **Blazor components** subscribe and refresh when they receive the event.

Register it once as a singleton:

```csharp
builder.Services.AddSingleton<DataNotifier>();
```

Now we have a bridge between long-running code and the UI, but we still need to update the component safely.

---

## Step 2: Updating the UI Safely with InvokeAsync

When an event fires from a background thread, Blazor still doesn't know how to repaint your UI unless the code runs inside the correct synchronization context.

That's where `InvokeAsync()` comes in, it schedules the UI update on the Blazor rendering thread.

Here's a complete example of a Blazor page reacting to `DataNotifier`:

```razor
@page "/reports"
@inject DataNotifier Notifier

<h3>Reports</h3>

<p>This page automatically updates when background jobs finish.</p>

<p><em>Last updated:</em> @lastUpdated</p>

@code {
    private DateTime lastUpdated = DateTime.Now;

    protected override void OnInitialized()
    {
        Notifier.OnDataChanged += OnDataChanged;
    }

    private void OnDataChanged()
    {
        InvokeAsync(() =>
        {
            lastUpdated = DateTime.Now;
            StateHasChanged();
        });
    }

    public void Dispose()
    {
        Notifier.OnDataChanged -= OnDataChanged;
    }
}
```

Whenever a background process calls `NotifyDataChanged()`, this page automatically refreshes safely and predictably.

---

## Step 3: Running Background Work with Hosted Services

So far, we've built the communication layer. Now let's make something actually happen in the background.

In .NET, the easiest way to run continuous or recurring background logic is with a **Hosted Service** specifically, a class that inherits from `BackgroundService`.

A `BackgroundService` runs independently of your UI, starting when the app starts, and continues until the app shuts down.

Example:

```csharp
public class ReportGeneratorService : BackgroundService
{
    private readonly ILogger<ReportGeneratorService> _logger;
    private readonly DataNotifier _notifier;

    public ReportGeneratorService(ILogger<ReportGeneratorService> logger, DataNotifier notifier)
    {
        _logger = logger;
        _notifier = notifier;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Generating daily report at {time}", DateTimeOffset.Now);

            // Simulate report work
            await Task.Delay(TimeSpan.FromSeconds(10), stoppingToken);

            // Notify UI
            _notifier.NotifyDataChanged();
        }
    }
}
```

Register it like this:

```csharp
builder.Services.AddHostedService<ReportGeneratorService>();
```

This alone gives you a working background system. Every 10 seconds, a new report is “generated,” and the UI updates.

But we can make it smarter.

---

## Step 4: When You Need Scheduling - Enter Quartz.NET

Timers and while-loops are fine for small jobs, but what if you need something like:

- Run a job every day at 7 AM  
- Clean up expired sessions every hour  
- Sync data every Monday at midnight  

That's when you need **Quartz.NET**, a powerful, production-grade job scheduler for .NET.

Quartz uses **CRON expressions** to define when jobs should run. For example:

| Expression | Meaning |
|-------------|----------|
| `0 0 * * * ?` | Every hour |
| `0 0 7 * * ?` | Every day at 7 AM |
| `0 0 0 ? * MON` | Every Monday at midnight |

---

### Program.cs - Registering Quartz

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Quartz;
using BlazorServerBackgroundTasks.Services;
using BlazorServerBackgroundTasks.Jobs;
using BlazorServerBackgroundTasks.Shared;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

builder.Services.AddSingleton<DataNotifier>();
builder.Services.AddSingleton<IReportGenerator, ReportGenerator>();

builder.Services.AddQuartz(q =>
{
    q.UseMicrosoftDependencyInjectionJobFactory();

    // Example hourly cleanup job
    var cleanupJobKey = new JobKey("cleanupJob");
    q.AddJob<CleanupJob>(opts => opts.WithIdentity(cleanupJobKey));
    q.AddTrigger(opts => opts
        .ForJob(cleanupJobKey)
        .WithIdentity("cleanupJob-trigger")
        .WithCronSchedule("0 0 * * * ?")); // every hour
});

builder.Services.AddQuartzHostedService(opt => opt.WaitForJobsToComplete = true);
builder.Services.AddHostedService<ReportGeneratorService>();

var app = builder.Build();
app.UseStaticFiles();
app.UseRouting();
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");
app.Run();
```

This sets up Quartz to run `CleanupJob` every hour, plus our hosted service for daily reports.

---

### ReportGeneratorService.cs - Scheduling Quartz Jobs at Runtime

You can mix Quartz with your own hosted services. In this example, our hosted service schedules a **DailyReportJob** dynamically at 7 AM every day, and also triggers it immediately when the app starts.

```csharp
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Quartz;
using BlazorServerBackgroundTasks.Jobs;

namespace BlazorServerBackgroundTasks.Services
{
    public class ReportGeneratorService : BackgroundService
    {
        private readonly ILogger<ReportGeneratorService> _logger;
        private readonly ISchedulerFactory _schedulerFactory;

        public ReportGeneratorService(ILogger<ReportGeneratorService> logger, ISchedulerFactory schedulerFactory)
        {
            _logger = logger;
            _schedulerFactory = schedulerFactory;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("ReportGeneratorService starting...");
            var scheduler = await _schedulerFactory.GetScheduler(stoppingToken);

            var jobKey = new JobKey("dailyReportJob");
            var job = JobBuilder.Create<DailyReportJob>()
                                .WithIdentity(jobKey)
                                .Build();

            var trigger = TriggerBuilder.Create()
                .WithIdentity("dailyReportJob-trigger")
                .WithCronSchedule("0 0 7 * * ?") // 7 AM every day
                .Build();

            if (!await scheduler.CheckExists(jobKey, stoppingToken))
            {
                await scheduler.ScheduleJob(job, trigger, stoppingToken);
                _logger.LogInformation("Scheduled DailyReportJob at 07:00.");
            }

            await scheduler.TriggerJob(jobKey, cancellationToken: stoppingToken); // Run once immediately
        }
    }
}
```

---

### DailyReportJob.cs

This Quartz job performs the work and notifies the UI when done.

```csharp
using Microsoft.Extensions.Logging;
using Quartz;
using BlazorServerBackgroundTasks.Services;
using BlazorServerBackgroundTasks.Shared;

namespace BlazorServerBackgroundTasks.Jobs
{
    public class DailyReportJob : IJob
    {
        private readonly ILogger<DailyReportJob> _logger;
        private readonly IReportGenerator _reportGenerator;
        private readonly DataNotifier _notifier;

        public DailyReportJob(ILogger<DailyReportJob> logger, IReportGenerator reportGenerator, DataNotifier notifier)
        {
            _logger = logger;
            _reportGenerator = reportGenerator;
            _notifier = notifier;
        }

        public async Task Execute(IJobExecutionContext context)
        {
            _logger.LogInformation("DailyReportJob running...");
            await _reportGenerator.GenerateDailyReportAsync(context.CancellationToken);
            _notifier.NotifyDataChanged();
            _logger.LogInformation("DailyReportJob complete; UI updated.");
        }
    }
}
```

---

### CleanupJob.cs

This one runs every hour and demonstrates that multiple background tasks can coexist cleanly.

```csharp
using Microsoft.Extensions.Logging;
using Quartz;
using BlazorServerBackgroundTasks.Shared;

namespace BlazorServerBackgroundTasks.Jobs
{
    public class CleanupJob : IJob
    {
        private readonly ILogger<CleanupJob> _logger;
        private readonly DataNotifier _notifier;

        public CleanupJob(ILogger<CleanupJob> logger, DataNotifier notifier)
        {
            _logger = logger;
            _notifier = notifier;
        }

        public async Task Execute(IJobExecutionContext context)
        {
            _logger.LogInformation("CleanupJob performing maintenance...");
            await Task.Delay(500, context.CancellationToken);
            _notifier.NotifyDataChanged();
            _logger.LogInformation("CleanupJob finished; UI notified.");
        }
    }
}
```

---

### IReportGenerator.cs & ReportGenerator.cs

Encapsulating your business logic keeps your jobs clean and testable.

```csharp
public interface IReportGenerator
{
    Task GenerateDailyReportAsync(CancellationToken cancellationToken);
}

public class ReportGenerator : IReportGenerator
{
    private readonly ILogger<ReportGenerator> _logger;

    public ReportGenerator(ILogger<ReportGenerator> logger)
    {
        _logger = logger;
    }

    public async Task GenerateDailyReportAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("Generating report...");
        await Task.Delay(2000, cancellationToken);
        _logger.LogInformation("Report generation complete.");
    }
}
```

---

## Step 5: Putting It All Together

Here's the big picture:

1. **Blazor's rendering thread** can only update the UI through its synchronization context.  
2. **DataNotifier** bridges the gap between background tasks and UI components.  
3. **Hosted Services** handle recurring or continuous work in the background.  
4. **Quartz.NET** provides precise, time-based scheduling.  
5. **InvokeAsync(StateHasChanged)** ensures updates are safe and synchronized.

With these pieces, you can run anything from nightly reports to real-time system monitoring, while keeping your Blazor Server UI perfectly in sync.

---

**💡 Tip:**  
This same pattern, shared data service, background processing, and safe UI updates, underpins the [Blazorise Scheduler](docs/extensions/scheduler).  
It's how recurring appointments stay accurate even when running complex background logic.
