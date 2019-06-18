---
title: 'Code'
order: 1
---

## Import

To get the `set-box-shadow()` mixin, you need to import `_all-settings.scss`.

```css
// mandatory
@import '../node_modules/mozaic-css/styles/settings-tools/_all-settings';
```

## Basic usage

```css
.example {
    @include set-box-shadow('s');
    @include set-box-shadow('m');
    @include set-box-shadow('l');
}
```