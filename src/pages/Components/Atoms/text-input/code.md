---
title: 'Code'
order: 2
---

## Import

Import the settings and the text-input `scss` files.

```scss
@import 'settings-tools/_all-settings';
@import 'atoms/_a.text-input';
```
## Basic usage
<!-- ### Apply CSS Class -->
To create an input you have one main class to apply `ga-input`.

```html
 <input type="text" class="ga-input" placeholder="Empty" name="example"/>
```
<pattern path="src/patterns/--input/input-default"></pattern>

## Behaviors
### Standard input states :

* `hover`
* `focus`
* `disabled`
* `is-valid`
* `is-invalid`

<pattern path="src/patterns/--input/input-state"></pattern>


## Do's and don'ts

<hintitem>
    You can cumulate states like that :
</hintitem>

```html
<input type="text" class="ga-input is-invalid is-hover" placeholder="Empty" name="example"/>
```

## Accessibility and semantic

**Always use a label with an input.**
```html
<label for="myExample">My example</label>
<input id="myExample" type="text" class="ga-input" placeholder="Empty" name="example"/>
```
**Always use the [WAI-ARIA writing practices](https://www.w3.org/TR/wai-aria-practices/), the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities.**

```html
<label for="myExample">My example</label>
<input id="myExample" type="text" class="ga-input" placeholder="Empty" name="example" aria-required="false"/>
```