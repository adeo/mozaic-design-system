---
title: 'Select'
order: 6
---

> A select is a selection tool used in forms, allowing user to choose between multiple predefined options.

<preview path="src/pages/Components/Select/previews/Selects" nude="true"></preview>

## Do's and Don'ts

<hintitem>
  Always use a select with a meaningful label.
</hintitem>

<hintitem>
  Always use a select maximum width in relation to the options line length.
</hintitem>

<hintitem>
  It's recommended to use shorts option texts.
</hintitem>

<hintitem>
 Always add ‘-- ’ and ‘ --’ in before and after a first option used as a placeholder and Capitalise the first letter of a select option.
</hintitem>

```html
<option>-- Select an option --</option>
```
<hintitem dont="true">
  Don't use select with very short list of options (for example, 7 values), use radio buttons instead.
</hintitem>

<hintitem dont="true">
  Don't use select with infinite options (for example, more than 15 values), they are hard to scan. It's recommended to use an autocomplete search field inside a dropdown.
</hintitem>

<hintitem dont="true">
  Never use preselected option, it can create an incorrect user data. Please use a button group for the popular values, along with a select for the others.
</hintitem>

### Good to know

> Learn more about the good practices of selects on [this article](https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037).
