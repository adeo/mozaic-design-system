---
title: 'Code'
order: 1
---

## Import

To get the `set-border-radius()` mixin, you need to import `_all-settings.scss`.

```css
// mandatory
@import 'settings-tools/_all-settings';
@import 'settings-tools/_s.fonts-family.scss';
```

## Basic usage

```css
.example {
    @include set-border-radius('s');
    @include set-border-radius('m');
    @include set-border-radius('l');
}
```