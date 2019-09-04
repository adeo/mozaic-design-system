---
title: 'Code'
order: 2
---

## Import

Import the settings and the radio `scss` files.

```css
@import 'settings-tools/_all-settings';
@import 'settings-tools/_s.fonts-family.scss';
@import 'components/_c.radio';
```

## Basic usage

To create a classic radio you have one main class to apply `mc-radio`.

```html
<input type="radio" class="mc-radio" name="example" />
```

<preview path="src/pages/Components/Radio/previews/radio-default"></preview>

## Behaviors

### Standard input states :

- `hover`
- `focus`
- `checked`
- `disabled`

<preview path="src/pages/Components/Radio/previews/radio-state"></preview>
