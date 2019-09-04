---
title: 'Code'
order: 1
---

## Import

To get the `set-box-shadow()` mixin, you need to import `_all-settings.scss`.

```css
// mandatory
@import 'settings-tools/_all-settings';
@import 'settings-tools/_s.fonts-family.scss';
```

## Basic usage

```css
.example {
    @include set-box-shadow('s');
    @include set-box-shadow('m');
    @include set-box-shadow('l');
}
```