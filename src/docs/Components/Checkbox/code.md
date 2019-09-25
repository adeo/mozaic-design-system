---
title: 'Code'
order: 2
---

## Import

Import the settings and the checkbox `scss` files.

```css
@import 'settings-tools/_all-settings';

@include import-font-families();

@import 'components/_c.checkbox';
```

## Basic usage

To create a classic checkbox you have one main class to apply `mc-checkbox`.

```html
<input type="checkbox" class="mc-checkbox" name="example" />
```

### Standard input states :

- `:hover`
- `:focus`
- `:checked`
- `:disabled`
- `.is-invalid`

<preview path="src/pages/Components/Checkbox/previews/intro"></preview>
