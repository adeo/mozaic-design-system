---
title: 'Code'
order: 2
---

## Import

Import the settings and the checkbox `scss` files.

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.checkbox';
```

## Basic usage

To create a classic checkbox you have one main class to apply `mc-checkbox`.

```html
<input type="checkbox" class="mc-checkbox" name="example" />
```

<preview path="src/pages/Components/Checkbox/previews/intro"></preview>

## Behaviors

### Standard input states :

- `hover`
- `focus`
- `disabled`
- `is-valid`
- `is-invalid`

<preview path="src/pages/Components/Checkbox/previews/checkbox-state"></preview>
