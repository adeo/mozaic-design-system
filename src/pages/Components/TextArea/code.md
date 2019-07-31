---
title: 'Code'
order: 2
---

## Import

```css
@import 'settings-tools/_all-settings';
@import '...';
```

## Basic usage

Apply the classes...

```html
<div class="class">Label</div>
```

<preview path="src/pages/Components/TextArea/previews/TextArea"></preview>

### Standard input states :

- `:hover`
- `:focus`
- `:disabled`
- `.is-valid`
- `.is-invalid`

## Extension and customization

how to use the mixins and function to customize

## accessibility and semantic

<hintitem>
  Always use textarea html tag for multi-line text
</hintitem>
<hintitem>
  Prefer the rows attribute to set the textarea height than using CSS
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
