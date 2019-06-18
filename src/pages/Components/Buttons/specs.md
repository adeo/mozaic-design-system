---
title: 'Specs'
order: 3
---

## Anatomy

![presentation-buttons](Buttons-documentation.png)

## Properties

### Layout / sizes

| Size name                   | Height       | Paddings     | Font-size             | radius           |
| --------------------------- | ------------ | ------------ | --------------------- | ---------------- |
| **Small**                   | 32px (2mu)   | 16px (1mu)   | `size.font.04` (14px) | `radius.m` (4px) |
| **Medium** _(Default size)_ | 48px (3mu)   | 32px (2mu)   | `size.font.05` (16px) | `radius.m` (4px) |
| **Large**                   | 56px (3.5mu) | 40px (2.5mu) | `size.font.06` (18px) | `radius.m` (4px) |

### Color themes

Available themes are :

- `solid`
- `solid-secondary`
- `solid-primary-campus`
- `solid-danger`
- `bordered`
- `bordered-secondary`
- `bordered-primary-campus`
- `bordered-danger`

buttons states colors are defnied for each theme :

| State        | Property         | Token                                      |
| ------------ | ---------------- | ------------------------------------------ |
| **Default**  | background-color | `color.button.[theme].background`          |
| **Default**  | color            | `color.button.[theme].font`                |
| **Default**  | border-color     | `color.button.[theme].border`              |
| **Hover**    | background-color | `color.button.[theme].hover.background`    |
| **Hover**    | color            | `color.button.[theme].hover.font`          |
| **Focus**    | border-color     | `color.button.[theme].focus.border`        |
| **Active**   | background-color | `color.button.[theme].active.background`   |
| **Disabled** | background-color | `color.button.[theme].disabled.background` |
| **Disabled** | color            | `color.button.[theme].disabled.font`       |
