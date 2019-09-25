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
 Always Capitalise the first letter of a select option.
</hintitem>

<hint type="do" title="Always use '--' before and after the first option used as a placeholder with spaces between the dashes and the text.">
    <preview path="src/pages/Components/Select/previews/Select-default" nude=true ></preview>
</hint>


<hintitem dont="true">
  Don't use select with very short list of options, if you have less than 7 options, use radio buttons instead.
</hintitem>

<hintitem dont="true">
  Don't use select if you have more than 15 values. It's recommended to use an autocomplete search field inside a dropdown instead.
</hintitem>

<hintitem dont="true">
  Never use preselected option, it can create an incorrect user data. Please use a button group for the popular values, along with a select for the others.
</hintitem>

### Good to know

> Learn more about the good practices of selects on [this article](https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037).
