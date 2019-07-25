---
title: 'Code'
order: 2
---

## Import

Import the settings and the radio `scss` files.

```css
@import 'settings-tools/_all-settings';
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
- `disabled`
- `is-valid`
- `is-invalid`

<preview path="src/pages/Components/Radio/previews/radio-state"></preview>

## Behaviors :

### Hover

When the radio is hovered due to user navigation.

<preview path="src/pages/Components/Radio/previews/radio-hover-state" nude="true"></preview>

### Focus

When the radio is in focus. It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's "tab" key.

<preview path="src/pages/Components/Radio/previews/radio-focus-state" nude="true"></preview>

### Disabled

When the radio field is inactive or inaccessible. It is usually used when the input, for some reason, is forbidden or blocked to be edited.

<preview path="src/pages/Components/Radio/previews/radio-disabled-state" nude="true"></preview>

### Valid

When the radio is checked

<preview path="src/pages/Components/Radio/previews/radio-valid-state" nude="true"></preview>

### Invalid

When the radio should be checked

<preview path="src/pages/Components/Radio/previews/radio-invalid-state" nude="true"></preview>
