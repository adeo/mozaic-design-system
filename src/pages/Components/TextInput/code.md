---
title: 'Code'
order: 2
---

## Import

Import the settings and the text-input `scss` files.

```css
@import 'settings-tools/_all-settings';
@import 'settings-tools/_s.fonts-family.scss';
@import 'components/_c.text-input';
```

## Basic usage

### Supported input types

- `text`
- `email`
- `date`
- `password`
- `number`
- `tel`
- `number`
- `search`

> Note that **if you try to apply those CSS classes to an unsupported input type**. It could work but you should find something which better suits to your needs in the documentation.

To create an input you have one main class to apply `mc-text-input`.

```html
<input type="text" class="mc-text-input" placeholder="Empty" name="example" />
```

<preview path="src/pages/Components/TextInput/previews/input-default"></preview>

## Behaviors

### Standard input states :

- `:hover`
- `:focus`
- `:disabled`
- `.is-valid`
- `.is-invalid`

<preview path="src/pages/Components/TextInput/previews/input-state"></preview>

## Using a left icon

To add a left icon, you need to import `'components/_c.left-icon-input'` after the `components/_c.text-input`.

```css
@import 'settings-tools/_all-settings';
@import 'settings-tools/_s.fonts-family.scss';
@import 'components/_c.text-input';
@import 'components/_c.left-icon-input';
```

Wrap your input and use a 24px icon size :

```html
<div class="mc-left-icon-input">
  <svg class="mc-left-icon-input__icon">
    <use xlink:href="#iconS" />
  </svg>
  <input type="text" class="mc-left-icon-input__input mc-text-input" />
</div>
```

<preview path="src/pages/Components/TextInput/previews/left-icon-input"></preview>

## Accessibility and semantic

**Always use a label with an input.**

```html
<label for="myExample">My example</label>
<input
  id="myExample"
  type="text"
  class="mc-text-input"
  placeholder="Empty"
  name="example"
/>
```
