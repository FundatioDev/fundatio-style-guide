# Architecture

## Overview

The FUNDATIO Style Guide is divided into two main concerns:

- reusable foundations
- Style Guide documentation and playground

## Reusable foundations

These are the parts intended to be reused by future FUNDATIO products.

### Components

Located in `src/components/`:

- Button
- Card
- Field
- Input
- Textarea

### Styles

Located in `src/styles/`:

- tokens
- reset
- global styles

These files define the visual and behavioral foundation of future products.

## Style Guide playground

The following components exist primarily to demonstrate and document the foundations:

- ColorSwatch
- SpacingScale
- RadiusScale
- ShadowScale
- TypographyScale

The main playground is rendered by `App.tsx`.

## Principle

The Style Guide should provide a foundation, not force every product to have the same interface.

Future products may reuse the foundations while developing their own layouts, patterns and experiences.

> Fundamentos antes da forma.