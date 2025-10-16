---
title: Announcing Blazorise 2.0 - [CodeName]
description: Welcome to the Blazorise 2.0 release, packed with exciting new features, optimizations, and support for the latest .NET framework.
permalink: /news/release-notes/200
canonical: /news/release-notes/200
image-url: img/v200.png
image-title: Announcing Blazorise 2.0 - [CodeName]
author-name: Mladen Macanović
author-image: /assets/img/authors/mladen.png
category: News
read-time: 7 min
---

![Announcing Blazorise 2.0 - [CodeName]](img/v200.png)

# Announcing Blazorise 2.0 - [CodeName]

Welcome to the Blazorise 2.0 release, packed with exciting new features, optimizations, and support for the latest .NET framework. Dive into the highlights below to explore how Blazorise 2.0 can enhance your applications.

## Key Blazorise 1.0 Highlights 💡

Here's a summary of what's new in this release:

- DataGridSelectColumn: Multiple support

Dive into each section for a comprehensive overview of these features and learn how they can enhance your projects. We value your feedback and encourage you to share your thoughts as we continue to refine and improve Blazorise.

## Upgrading from 1.7.x to 2.0 👨‍🔧

Upgrade your Blazorise application seamlessly with the following steps:

Update all Blazorise.* package references to 2.0.

Blazorise should now work without any major breaking change to the API, but there are some necessary changes that we had to do to make Blazorise better. Continue reading the Migration section for more details.

## Migration Notes 🛠

A few API changes and behavior updates have been introduced in Blazorise 2.0 to improve consistency and functionality. Here’s a summary:

## New Features & Enhancements 🚀

You may now allow multiple values to be selected in the DataGridSelectColumn. Set the new Multiple parameter to true to enable this feature. Please bind the corresponding array to successfully bind the multiple values.

A new DataGrid utility, the ExpressionCompiler was introduced. 
    This utility allows you to compile expressions and use them in the DataGrid. 
    The ExpressionCompiler can be used together with the DataGridColumnInfo collection provided by the ReadData in order to create Expression based queries (IQueryables) that can in turn be used in ORMs like Entity Framework.

    Visit DataGrid Binding Large Data for more information.

## Final Notes

As always, your feedback is invaluable in guiding future Blazorise development. We encourage you to try out the new features and let us know your thoughts. Thank you for your continued support and enthusiasm for Blazorise, and we look forward to bringing you even more enhancements in future updates!
