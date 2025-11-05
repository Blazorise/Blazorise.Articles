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

Blazorise provides one of the **most powerful and flexible validation systems** in the Blazor ecosystem.

Unlike the default `EditForm`-based validation, Blazorise uses its own independent and composable components- allowing both **simple declarative validation** and **advanced dynamic form logic**.

In this deep dive, we'll explore:

- Core validation concepts in Blazorise
- Asynchronous and dynamic validation rules
- Model-based validation with DataAnnotations
- Programmatic and conditional validation for complex enterprise scenarios

---

## Step 1: Basic Validation

The simplest Blazorise validation pattern uses the `<Validation>` component and a `Validator` delegate.

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

<Validation Validator="ValidateEmail">
    <TextEdit Placeholder="Enter email">
        <Feedback>
            <ValidationNone>Please enter the email.</ValidationNone>
            <ValidationSuccess>Email is valid.</ValidationSuccess>
            <ValidationError>Enter a valid email!</ValidationError>
        </Feedback>
    </TextEdit>
</Validation>

@code {
    void ValidateEmail( ValidatorEventArgs e )
    {
        var email = Convert.ToString( e.Value );

        e.Status = string.IsNullOrEmpty( email )
            ? ValidationStatus.None
            : email.Contains( "@" )
                ? ValidationStatus.Success
                : ValidationStatus.Error;
    }
}
```

This is the **core pattern**: each `Validation` wraps an input component and defines its own logic, with feedback templates for each state.

---

## Step 2: Async Validation (Server or API Calls)

Enterprise forms often require **asynchronous validation**, such as checking if a username or email already exists.

```razor
@using System.Threading

<Validation AsyncValidator="ValidateNameAsync">
    <TextEdit Placeholder="Enter name">
        <Feedback>
            <ValidationNone>Waiting for input...</ValidationNone>
            <ValidationSuccess>Name available!</ValidationSuccess>
            <ValidationError>Name already taken!</ValidationError>
        </Feedback>
    </TextEdit>
</Validation>

@code {
    Random random = new();

    async Task ValidateNameAsync( ValidatorEventArgs e, CancellationToken cancellationToken )
    {
        var value = Convert.ToString( e.Value );

        if ( string.IsNullOrEmpty( value ) )
        {
            e.Status = ValidationStatus.Error;
            return;
        }

        cancellationToken.ThrowIfCancellationRequested();

        // Simulate an API call
        await Task.Delay( random.Next( 500, 1500 ), cancellationToken );

        e.Status = value.Equals( "admin", StringComparison.OrdinalIgnoreCase )
            ? ValidationStatus.Error
            : ValidationStatus.Success;
    }
}
```

Blazorise automatically handles **cancellation tokens**, meaning if the user keeps typing, older validation calls are canceled to prevent race conditions.

---

## Step 3: Pattern-Based Validation

For quick client-side checks, Blazorise also supports pattern validation without writing code:

```razor
<Validation UsePattern Pattern="[A-Za-z]{3,}">
    <TextEdit Placeholder="At least 3 letters">
        <Feedback>
            <ValidationError>Pattern does not match!</ValidationError>
        </Feedback>
    </TextEdit>
</Validation>
```

This uses standard HTML regex-based validation for lightweight form rules.

---

## Step 4: Model-Based Validation with DataAnnotations

For complex forms, you can bind an entire model to a `<Validations>` container. Blazorise automatically reads **DataAnnotation** attributes.

```razor
@using System.ComponentModel.DataAnnotations

<Validations Mode="ValidationMode.Auto" Model="@user">
    <Validation>
        <Field Horizontal>
            <FieldLabel ColumnSize="ColumnSize.Is2">Full Name</FieldLabel>
            <FieldBody ColumnSize="ColumnSize.Is10">
                <TextEdit Placeholder="First and last name" @bind-Text="@user.Name">
                    <Feedback><ValidationError /></Feedback>
                </TextEdit>
            </FieldBody>
        </Field>
    </Validation>

    <Validation>
        <Field Horizontal>
            <FieldLabel ColumnSize="ColumnSize.Is2">Email</FieldLabel>
            <FieldBody ColumnSize="ColumnSize.Is10">
                <TextEdit Placeholder="Enter email" @bind-Text="@user.Email">
                    <Feedback><ValidationError /></Feedback>
                </TextEdit>
            </FieldBody>
        </Field>
    </Validation>

    <Validation>
        <Field Horizontal>
            <FieldLabel ColumnSize="ColumnSize.Is2">Password</FieldLabel>
            <FieldBody ColumnSize="ColumnSize.Is10">
                <TextEdit Role="TextRole.Password" Placeholder="Password" @bind-Text="@user.Password">
                    <Feedback><ValidationError /></Feedback>
                </TextEdit>
            </FieldBody>
        </Field>
    </Validation>

    <Validation>
        <Field Horizontal>
            <FieldLabel ColumnSize="ColumnSize.Is2">Confirm Password</FieldLabel>
            <FieldBody ColumnSize="ColumnSize.Is10">
                <TextEdit Role="TextRole.Password" Placeholder="Retype password" @bind-Text="@user.ConfirmPassword">
                    <Feedback><ValidationError /></Feedback>
                </TextEdit>
            </FieldBody>
        </Field>
    </Validation>
</Validations>

@code {
    User user = new();

    public class User
    {
        [Required]
        [StringLength(10, ErrorMessage = "Name is too long.")]
        public string? Name { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid email.")]
        public string? Email { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 5, ErrorMessage = "Must be between 5 and 8 characters.")]
        public string? Password { get; set; }

        [Compare("Password")]
        public string? ConfirmPassword { get; set; }
    }
}
```

💡 **Tip:**  
You can combine manual and model-based validations in the same form.

---

## Step 5: Manual Validation Mode

If you need programmatic control (e.g., wizard steps or save buttons), use **`ValidationMode.Manual`**.

```razor
<Validations @ref="validations" Mode="ValidationMode.Manual">
    <Validation Validator="@ValidationRule.IsNotEmpty">
        <Field><TextEdit Placeholder="Enter first name" /></Field>
    </Validation>

    <Validation Validator="@ValidationRule.IsNotEmpty">
        <Field><TextEdit Placeholder="Enter last name" /></Field>
    </Validation>

    <Button Color="Color.Primary" Clicked="Submit">Submit</Button>
</Validations>

@code {
    Validations? validations;

    async Task Submit()
    {
        if (await validations!.ValidateAll())
        {
            // proceed with business logic
            Console.WriteLine("Form is valid!");
        }
    }
}
```

This approach is ideal for **multi-step or conditionally visible forms** where you don't want auto-validation.

---

## Step 6: Conditional Validation Rules (Dynamic Forms)

Blazorise supports **dynamic field visibility and conditional rules**.

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

    <Fields>
        @if (Company.UseAlphaCode)
        {
            <Validation>
                <Field>
                    <FieldLabel>AlphaCode</FieldLabel>
                    <FieldBody>
                        <TextEdit @bind-Text="@Company.AlphaCode">
                            <Feedback><ValidationError /></Feedback>
                        </TextEdit>
                    </FieldBody>
                </Field>
            </Validation>
        }
        else
        {
            <Validation>
                <Field>
                    <FieldLabel>BetaCode</FieldLabel>
                    <FieldBody>
                        <TextEdit @bind-Text="@Company.BetaCode">
                            <Feedback><ValidationError /></Feedback>
                        </TextEdit>
                    </FieldBody>
                </Field>
            </Validation>
        }
    </Fields>
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

The validation automatically adapts to whichever field is visible.

---

## Step 7: Dynamic Form Generation at Runtime

For fully dynamic enterprise forms, you can generate fields and attach validators at runtime.

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

This approach allows full **metadata-driven form generation** (e.g., API-configurable UIs).

---

## Conclusion

Blazorise provides a **complete validation framework** for any form complexity, from simple field checks to dynamic, model-driven, async validation across large enterprise forms.

Key takeaways:

- Use `<Validation>` for single-field rules
- Use `<Validations>` for multi-field or model-bound forms
- Combine async, pattern, and conditional logic
- Control flow programmatically with manual mode
- Build reusable validation patterns for your entire system

---

💡 **Tip:**  
Combine Blazorise Validation with [Modal](docs/components/modal) and [DataGrid](docs/extensions/datagrid) to create adaptive, user-friendly enterprise data forms.