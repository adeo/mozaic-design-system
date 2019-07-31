---
title: 'Code'
order: 2
---

## Import

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.textarea';
```

## Basic usage

Apply the classes `mc-textarea` on a standard `textarea` html tag :

```html
<textarea
  class="mc-textarea"
  name="foo"
  id="foo"
  rows="4"
  placeholder="placeholder"
></textarea>
```

<preview path="src/pages/Components/TextArea/previews/TextArea"></preview>

### Standard input states :

- `:hover`
- `:focus`
- `:disabled`
- `.is-valid`
- `.is-invalid`

## accessibility and semantic

<hintitem>
  Always use textarea html tag for multi-line text
</hintitem>
<hintitem>
  Use the rows attribute to set the textarea height
</hintitem>
<hintitem>
  Provide minlength and/or maxlength attributes if a text lenght is required from the user
</hintitem>
<hintitem dont="true">
  Never use the resize: none attribute for standards forms
</hintitem>
<hintitem dont="true">
  Never use vertical-align: baseline
</hintitem>
