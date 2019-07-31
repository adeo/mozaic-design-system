---
title: 'Code'
order: 2
---

## Import

Import the settings and the select `scss` files.

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.select';
```

## Basic usage

Apply the classes `mc-select` on the native element of the select as in the following example :

```html
<div class="example">
  <select class="mc-select">
    <option value="" selected>Choose an option</option>
    <option value="option1">option1</option>
    <option value="option1">option2</option>
    <option value="option1">option3</option>
  </select>
</div>
```

<preview path="src/pages/Components/Select/previews/Select-default"></preview>


## Behaviors

### Standard select states :

- `hover`
- `focus`
- `disabled`
- `is-valid`
- `is-invalid`


<preview path="src/pages/Components/Select/previews/Select-all-states"></preview>

## Default options
 By default, you can select all options. **Each one must have a value attribute filled** which will be sent to server when the option is selected by the user. The select element hasn't placeholder, so the first option is displayed by default.
 
 ```html
<div class="example">
  <select class="mc-select">
    <option value="option1">option displayed by default</option>
    <option value="option2">option2</option>
    <option value="option3">option3</option>
  </select>
</div>
```

## Preselected options
You can choose to select an option by default by applying a `selected` attribute on it, or simply disable it with `disabled` with inline code example.<br >

<preview path="src/pages/Components/Select/previews/Select-option-preselected"></preview>

## accessibility and semantic

Use `<option>` for elements of your list `<select>`.<br >
Each `<option>` element should have a value attribute with data.
 

<hintitem>
  You must always use the native select element.
</hintitem>

<hintitem dont="true">
Never use the `multiple` attribute on a select, prefer checkboxes instead.
</hintitem>
<hintitem dont="true">
Don't use the `hidden` attribute on an option because it is not suproted by Safari.
</hintitem>