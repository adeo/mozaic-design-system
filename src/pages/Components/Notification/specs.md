---
title: 'Specs'
order: 3
---

## Anatomy

![Notifications--Specs.png](Notifications--Specs.png)

## Properties

### Layout / size

| Height          | Paddings                            | Font-size                                          | radius           |
| --------------- | ----------------------------------- | -------------------------------------------------- | ---------------- |
| Depends on text | left: 64px(4mu) others: 24px(1.5mu) | `size.font.04` (14px) title: `size.font.06` (16px) | `radius.m` (4px) |

### Icon / size

| Width and height              |
| ----------------------------- |
| - Main icon 32px (2mu)        |
| - Closable icon 24px (1.5mu)  |

### States

Available states:

- `information` (default)
- `success`
- `warning`
- `danger`

Notification state colors for each state:

| State           | Property         | Token                                         | Hex Value
| --------------- | ---------------- | --------------------------------------------- | ------------- |
| **Information** | background-color | `color.notification.information.background`   | #ecfcfd
| **Information** | border-color     | `color.notification.information.border`       | #25a8d0
| **Information** | color            | `color.notification.font`                     | #000000
| **Success**     | background-color | `color.notification.success.background`       | #eaf3e2
| **Success**     | border-color     | `color.notification.success.border`           | #78be20
| **Success**     | color            | `color.notification.font`                     | #000000
| **Warning**     | background-color | `color.notification.warning.background`       | #fff5eb
| **Warning**     | border-color     | `color.notification.warning.border`           | #fc961e
| **Warning**     | color            | `color.notification.font`                     | #000000
| **Danger**      | background-color | `color.notification.danger.background`        | #feedee
| **Danger**      | border-color     | `color.notification.danger.border`            | #df382b
| **Danger**      | color            | `color.notification.font`                     | #000000
