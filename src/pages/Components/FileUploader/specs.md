---
title: 'Specs'
order: 3
---

## Anatomy

=> anatomy image

## Properties

### Layout / size

 Height       | Paddings     | Font-size             | radius           |
 ------------ | ------------ | --------------------- | ---------------- |
 48px (3mu)   | 32px (2mu)   | `size.font.05` (16px) | `radius.m` (4px) |


### Icon / size

| Width and height                   |
| ---------------------------------- |
| 24px (1.5mu)                       |


### Color theme

File uploader states colors according to the theme of the `bordered` buttons :

| State              | Property         | Token                                       |
| ------------------ | ---------------- | ------------------------------------------- |
| **Default**        | background-color | `color.button.bordered.background`          |
| **Default**        | color            | `color.button.bordered.font`                |
| **Default**        | border-color     | `color.button.bordered.border`              |
| **Hover**          | background-color | `color.button.bordered.hover.background`    |
| **Hover**          | color            | `color.button.bordered.hover.font`          |
| **Focus**          | border-color     | `color.button.bordered.focus.border`        |
| **Active**         | background-color | `color.button.bordered.active.background`   |
| **Disabled**       | background-color | `color.button.bordered.disabled.background` |
| **Disabled**       | color            | `color.button.bordered.disabled.font`       |

Except for the list of uploaded files :

| Element            | Property         | Token                                       |
| ------------------ | ---------------- | ------------------------------------------- |
| **Font**           | color            | `color.fileuploader.font`                   |
| **Valid-icon**     | color            | `color.fileuploader.valid`                  |
| **Alert-icon**     | color            | `color.fileuploader.alert`                  |
| **Files-list**     | background       | `color.fileuploader.files.list`             |
| **Files-delete**   | background       | `color.fileuploader.files.delete`           |
