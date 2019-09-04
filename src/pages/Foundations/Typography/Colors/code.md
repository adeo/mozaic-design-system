---
title: 'Code'
order: 1
---

## the font-color mixin :

Use the `font-color()` mixin to set an othorized text color to an element.

```css
@import 'settings-tools/_all-settings';
@import 'settings-tools/_s.fonts-family.scss';

.example-text {
  @include set-color('dark');
  // is equivalent to :
  color: $color-font-dark;
}
```

## Font color tokens and mixin recap:

| SCSS var                 | mixin                               | color       | hex value |
| ------------------------ | ----------------------------------- | ----------- | --------- |
| `$color-font-primary-01` | `@include set-color('primary-01')` | brand 1     | #78be20   |
| `$color-font-primary-02` | `@include set-color('primary-02')` | brand 2     | #007574   |
| `$color-font-darkest`    | `@include set-color('darkest')`    | black       | #000000   |
| `$color-font-darker`     | `@include set-color('darker')`     | darker grey | #222020   |
| `$color-font-dark`       | `@include set-color('dark')`       | dark grey   | #3c3738   |
| `$color-font-light`      | `@include set-color('light')`      | light grey  | #554f52   |
| `$color-font-lightest`   | `@include set-color('lightest')`   | white       | #ffffff   |
