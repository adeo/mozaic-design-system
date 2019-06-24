---
title: 'Code'
order: 2
---

## Import

Import the settings and the text-input `scss` files.

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.text-input';
```

## Basic usage

### Supported input types

<ul>
    <li><code>text</code></li>
    <li><code>email</code></li>
    <li><code>date</code></li>
    <li><code>password</code></li>
    <li><code>number</code></li>
    <li><code>tel</code></li>
    <li><code>number</code></li>
    <li><code>search</code></li>
</ul>

> Note that **if you try to apply those CSS classes to an unsupported input type**. It could work but you should find something which better suits to your needs in the documentation.

To create an input you have one main class to apply `mc-text-input`.

```html
<input type="text" class="mc-text-input" placeholder="Empty" name="example" />
```

<preview path="src/pages/Components/TextInput/previews/input-default"></preview>

## Behaviors

### Standard input states :

- `hover`
- `focus`
- `disabled`
- `is-valid`
- `is-invalid`

<preview path="src/pages/Components/TextInput/previews/input-state"></preview>

## Do's and don'ts

<hintitem>
    You can cumulate states like that :
</hintitem>

```html
<input
  type="text"
  class="mc-text-input is-invalid is-hover"
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
  class="mc-text-input"
  placeholder="Empty"
  name="example"
/>
```
