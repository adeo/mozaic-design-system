---
title: 'Code'
order: 2
---

## Import

Import the settings and the text-input `scss` files.

```scss
@import '../node_modules/garden-css/styles/settings-tools/_all-settings';
@import '../node_modules/garden-css/styles/atoms/_a.text-input';
```

## Basic usage

<!-- ### Apply CSS Class -->

To create an input you have one main class to apply `ga-input`.

```html
<input type="text" class="ga-input" placeholder="Empty" name="example" />
```

<preview path="src/pages/Components/Atoms/TextInput/previews/input-default"></preview>

## Behaviors

### Standard input states :

- `hover`
- `focus`
- `disabled`
- `is-valid`
- `is-invalid`

<preview path="src/pages/Components/Atoms/TextInput/previews/input-state"></preview>

## Do's and don'ts

<hintitem>
    You can cumulate states like that :
</hintitem>

```html
<input
  type="text"
  class="ga-input is-invalid is-hover"
  placeholder="Empty"
  name="example"
/>
```

## Accessibility and semantic

**Always use a label with an input.**

```html
<label for="myExample">My example</label>
<input
  id="myExample"
  type="text"
  class="ga-input"
  placeholder="Empty"
  name="example"
/>
```
