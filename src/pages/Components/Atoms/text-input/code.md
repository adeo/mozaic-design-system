---
title: 'Code'
order: 2
---

## Import

First of all, you need to import the `.scss` file.

```scss
@import 'settings-tools/_all-settings';
@import 'atoms/_a.input';
```

## Basic usage

<!-- ### Apply CSS Class -->

To create an input you have one main class to apply `ga-input`

```html
<input type="text" class="ga-input" placeholder="Empty" name="example" />
```

<pattern path="src/patterns/--input/input-default"></pattern>

## Behaviors

### Standard input states :

- `hover`
- `focus`
- `disabled`
- `is-valid`
- `is-invalid`

<pattern path="src/patterns/--input/input-state"></pattern>

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

<hintitem dont=true>
    <strong>Disabled status</strong> can't support any other styles or event
</hintitem>

## Accessibility and semantic

**Do not forget to use labels.**

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

**It is strongly recommended to use the [WAI-ARIA writing practices](https://www.w3.org/TR/wai-aria-practices/).**

```html
<label for="myExample">My example</label>
<input
  id="myExample"
  type="text"
  class="ga-input"
  placeholder="Empty"
  name="example"
  aria-required="false"
/>
```

<!-- ### Manage event
<hintitem>
    Input supports <code>hover</code> and <code>focus</code> event
</hintitem>

Events are manage using `:hover` and `:focus` CSS pseudo-class.

<br/>

<pattern path="src/patterns/--input/input-default-event"></pattern>

### Manage validation state

To indicate the validation state of your input like valid or invalid. You can use two state CSS Classes :
* `is-valid`
* `is-invalid`

<pattern path="src/patterns/--input/input-state"></pattern>

<br/>

---

> Note that <strong>if you try to apply those CSS classes to an unsupported input type.</strong> It could work but you should find something which better suits to your needs in the documentation. -->
