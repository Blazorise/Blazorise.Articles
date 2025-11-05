---
title: Handling Complex Forms with Validation and Dynamic Rules
description: Learn how to build enterprise-grade Blazor forms using Blazorise Validation, with async validators, conditional rules, and dynamically generated fields.
permalink: /blog/handling-complex-forms-with-validation-and-dynamic-rules
canonical: /blog/handling-complex-forms-with-validation-and-dynamic-rules
image-url: img/blazorise-complex-forms.png
image-title: Handling Complex Forms with Validation and Dynamic Rules
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: How To Guides
posted-on: 2025-11-05
read-time: 13 min
---

# Handling Complex Forms with Validation and Dynamic Rules

Form validation is one of those features that seems simple, until it isn't.  
In enterprise Blazor applications, validation rules often need to adapt to context, perform server-side checks, and change dynamically based on user input or backend configuration.

This is exactly where **Blazorise Validation** shines.  
Unlike Blazor's built-in `EditForm` and `DataAnnotationsValidator`, Blazorise provides a **standalone validation framework** with its own component model, one that gives you *complete control* over the validation lifecycle.

In this article, we'll go beyond basic examples and look at how Blazorise Validation is structured, why it exists, and how to leverage it for real-world enterprise-grade forms.

---

## Why Blazorise Has Its Own Validation System

In Blazor, the default validation pipeline is tied to `EditForm`, which makes sense for small, self-contained forms. However, that design limits flexibility in several ways:

- It relies on a single model context per form.
- Validation events are triggered only on form submission or field blur.
- Asynchronous and conditional validation requires custom logic outside the standard pipeline.

Blazorise takes a different approach: every form field can have **its own validator**, and multiple validations can be grouped together in a `<Validations>` container.

This separation allows:

- **Declarative rules** using attributes or lambdas
- **Asynchronous checks** with built-in cancellation
- **Dynamic field creation** at runtime
- **Conditional and model-based validation** in the same form

Let's unpack how this works in practice.

---

## The Core: Validation as a Standalone Component

At the heart of Blazorise validation lies the `<Validation>` component.

Each `Validation` encapsulates a single input and its corresponding rule. This modularity allows you to mix and match validators freely.

```razor
<Validation Validator="ValidationRule.IsNotEmpty">
    <TextEdit Placeholder="Enter name">
        <Feedback>
            <ValidationNone>Please enter the name.</ValidationNone>
            <ValidationSuccess>Name looks good!</ValidationSuccess>
            <ValidationError>Enter a valid name!</ValidationError>
        </Feedback>
    </TextEdit>
</Validation>
```

Each `Validation` runs independently, invoking its assigned validator function when the input changes. Blazorise uses the `ValidatorEventArgs` type to represent validation state and pass contextual data to your rule.

The simplest validator is a static one from the `ValidationRule` helper class, like `IsNotEmpty`, `IsEmail`, or `IsNumber`. But you can also define fully custom logic.

```razor
<Validation Validator="ValidateEmail">
    <TextEdit Placeholder="Enter email">
        <Feedback>
            <ValidationNone>Please enter your email address.</ValidationNone>
            <ValidationSuccess>Email format looks good!</ValidationSuccess>
            <ValidationError>Please enter a valid email address.</ValidationError>
        </Feedback>
    </TextEdit>
</Validation>

@code {
    void ValidateEmail( ValidatorEventArgs e )
    {
        var email = Convert.ToString( e.Value );

        // When the field is empty, we show a neutral (none) state
        if ( string.IsNullOrWhiteSpace( email ) )
        {
            e.Status = ValidationStatus.None;
            return;
        }

        // Simple validation rule contains "@" and "."
        bool isValid = email.Contains("@") && email.Contains(".");

        e.Status = isValid
            ? ValidationStatus.Success
            : ValidationStatus.Error;
    }
}
```

### What's Happening Under the Hood

Blazorise runs each validator after the input's `OnInput` or `OnBlur` event (depending on mode).  
The component then updates its `ValidationStatus` and triggers the corresponding feedback slot (`None`, `Success`, or `Error`).  
This design avoids global form state and gives you true **field-level reactivity**.

---

## Asynchronous Validation: The Enterprise Requirement

In enterprise systems, many rules can't be validated locally. You might need to check uniqueness against a database or verify a license key against a REST API.

Blazorise supports async validation natively through the `AsyncValidator` parameter.

```razor
@using System.Threading

<Validation AsyncValidator="ValidateNameAsync">
    <TextEdit Placeholder="Enter name">
        <Feedback>
            <ValidationNone>Waiting for input...</ValidationNone>
            <ValidationSuccess>Name is available!</ValidationSuccess>
            <ValidationError>Name already exists.</ValidationError>
        </Feedback>
    </TextEdit>
</Validation>

@code {
    Random random = new();

    async Task ValidateNameAsync( ValidatorEventArgs e, CancellationToken cancellationToken )
    {
        var value = Convert.ToString( e.Value );

        if ( string.IsNullOrWhiteSpace( value ) )
        {
            e.Status = ValidationStatus.Error;
            return;
        }

        cancellationToken.ThrowIfCancellationRequested();

        // Simulate a slow network check
        await Task.Delay( random.Next( 500, 1500 ), cancellationToken );

        e.Status = value.Equals( "admin", StringComparison.OrdinalIgnoreCase )
            ? ValidationStatus.Error
            : ValidationStatus.Success;
    }
}
```

### Behind the Scenes

Blazorise automatically manages **cancellation tokens** for each async validator. If the user types again before the previous request completes, the previous validation is canceled, avoiding race conditions or outdated results.

In practice, this makes Blazorise validators perfect for **live validation against APIs**, something that's notoriously difficult to implement with `EditForm`-based validation.

---

## Model-Based Validation and DataAnnotations

When you have a defined data model, Blazorise's `<Validations>` component can automatically read **DataAnnotation** attributes and perform model-level validation.

```razor
@using System.ComponentModel.DataAnnotations

<Validations Mode="ValidationMode.Auto" Model="@user">
    <Validation>
        <TextEdit Placeholder="Name" @bind-Text="@user.Name">
            <Feedback><ValidationError /></Feedback>
        </TextEdit>
    </Validation>
    <Validation>
        <TextEdit Placeholder="Email" @bind-Text="@user.Email">
            <Feedback><ValidationError /></Feedback>
        </TextEdit>
    </Validation>
</Validations>

@code {
    User user = new();

    public class User
    {
        [Required]
        [StringLength(10, ErrorMessage = "Name too long.")]
        public string? Name { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid email.")]
        public string? Email { get; set; }
    }
}
```

With `Mode="ValidationMode.Auto"`, validation runs automatically on input changes.  
You can switch to `Manual` mode for scenarios where validation should only run when a user clicks “Save” or advances to the next step in a wizard.

### Enterprise Pattern: Combining Models and Manual Rules

One of Blazorise's strengths is that **you can mix model-based and manual validators in the same form**.  
For instance, you can validate static fields with attributes but add async business checks for specific fields, all within a unified `<Validations>` container.

---

## Manual Control and Validation Lifecycle

In more complex flows, multi-step wizards, embedded forms, or conditional groups, you'll often want full programmatic control.  
Blazorise exposes this through the `Validations` reference and manual validation methods.

```razor
<Validations @ref="validations" Mode="ValidationMode.Manual">
    <Validation Validator="@ValidationRule.IsNotEmpty">
        <TextEdit Placeholder="Enter first name" />
    </Validation>
    <Validation Validator="@ValidationRule.IsNotEmpty">
        <TextEdit Placeholder="Enter last name" />
    </Validation>
    <Button Color="Color.Primary" Clicked="Submit">Submit</Button>
</Validations>

@code {
    Validations? validations;

    async Task Submit()
    {
        if ( await validations!.ValidateAll() )
        {
            Console.WriteLine("Form is valid!");
        }
    }
}
```

This gives you **total control** over when and how validation runs.  
You can trigger individual validations, clear them, or batch-validate all fields before saving data to the server.

---

## Conditional Validation: When Rules Depend on State

Not all fields are always relevant. For example, a form might ask for *AlphaCode* only if a user enables a certain feature.  
Blazorise supports these **conditional rules** natively via model validation and UI logic.

```razor
@using System.ComponentModel.DataAnnotations

<Validations Model="@Company" Mode="ValidationMode.Auto">
    <Validation>
        <Field>
            <FieldLabel>Name</FieldLabel>
            <FieldBody>
                <TextEdit @bind-Text="@Company.Name">
                    <Feedback><ValidationError /></Feedback>
                </TextEdit>
            </FieldBody>
        </Field>
    </Validation>

    <Field>
        <Switch @bind-Checked="@Company.UseAlphaCode">Use AlphaCode</Switch>
    </Field>

    @if (Company.UseAlphaCode)
    {
        <Validation>
            <TextEdit Placeholder="AlphaCode" @bind-Text="@Company.AlphaCode">
                <Feedback><ValidationError /></Feedback>
            </TextEdit>
        </Validation>
    }
    else
    {
        <Validation>
            <TextEdit Placeholder="BetaCode" @bind-Text="@Company.BetaCode">
                <Feedback><ValidationError /></Feedback>
            </TextEdit>
        </Validation>
    }
</Validations>

@code {
    CompanyInfo Company = new() { UseAlphaCode = true };

    public class CompanyInfo : IValidatableObject
    {
        [Required(ErrorMessage = "Name is required")]
        public string? Name { get; set; }

        public bool UseAlphaCode { get; set; }
        public string? AlphaCode { get; set; }
        public string? BetaCode { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext context)
        {
            if (UseAlphaCode && string.IsNullOrWhiteSpace(AlphaCode))
                yield return new ValidationResult("AlphaCode is required", new[] { nameof(AlphaCode) });

            if (!UseAlphaCode && string.IsNullOrWhiteSpace(BetaCode))
                yield return new ValidationResult("BetaCode is required", new[] { nameof(BetaCode) });
        }
    }
}
```

This approach allows your validation logic to remain **declarative and self-contained**, perfect for business models with mutually exclusive properties.

---

## Dynamic Forms and Runtime Rules

A common enterprise challenge is rendering form fields dynamically from metadata or server-side configuration.  
Because each field in Blazorise can define its own validator delegate, it's easy to generate forms programmatically.

```razor
<Validations @ref="@ValidationsRef" Mode="ValidationMode.Manual">
    @foreach ( var field in Fields )
    {
        <Validation Validator="@field.Validator">
            <TextEdit Placeholder="@field.Placeholder" @bind-Text="@field.Value">
                <Feedback><ValidationError>@field.ErrorMessage</ValidationError></Feedback>
            </TextEdit>
        </Validation>
    }
</Validations>

<Button Color="Color.Primary" Clicked="ValidateAll">Validate</Button>

@code {
    record DynamicField( string Placeholder, Action<ValidatorEventArgs> Validator, string ErrorMessage )
    {
        public string Value { get; set; }
    }

    List<DynamicField> Fields = new()
    {
        new("Full name", e => e.Status = string.IsNullOrEmpty($"{e.Value}") ? ValidationStatus.Error : ValidationStatus.Success, "Name is required"),
        new("Email", e => e.Status = $"{e.Value}".Contains("@") ? ValidationStatus.Success : ValidationStatus.Error, "Invalid email")
    };

    Validations ValidationsRef;

    async Task ValidateAll()
    {
        foreach ( var field in Fields )
        {
            var args = new ValidatorEventArgs( field.Value );
            field.Validator( args );
        }

        await ValidationsRef.ValidateAll();
    }
}
```

This flexibility makes Blazorise suitable for systems that need to **define forms dynamically**, such as configuration dashboards, workflow builders, or admin panels.

---

## Summary: A Validation System Designed for Real-World Use

Blazorise validation is not a thin layer over `EditForm`; it's an entirely new model designed for composability and flexibility.

It enables you to:

- Define validation rules directly on inputs, not forms.
- Mix async, pattern, and DataAnnotation-based rules seamlessly.
- Handle dynamic, model-driven, or metadata-based forms.
- Fully control validation timing and flow.

In short: **it's validation the way enterprise Blazor apps actually need it to work**.

---

## Source Code

All examples from this article are available in our [Blazorise Samples repository](https://github.com/Megabit/Blazorise-Samples/tree/main/ComplexFormsValidation).

---

💡 **Tip:**  
Combine Blazorise Validation with [Modal](docs/components/modal) or [DataGrid](docs/extensions/datagrid) to create adaptive, user-friendly enterprise forms that guide users dynamically through complex workflows.