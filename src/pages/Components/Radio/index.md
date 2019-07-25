---
title: 'Radio'
order: 8
---

> Radios are components that, unlike checkboxes, can't be used alone. They are used to select **a single option from a list**.

<preview path="src/pages/Components/Radio/previews/intro" nude="true"></preview>

## Behaviors

The radio list must be short and allows the user to quickly scan the different possible options. If the list is long, it's better to use a dropdown, or another component who's more appropriate to the context.

It's better to define a default selected radio with an option more appropriate with the user need, or choose the most selected option.

Only one radio can be selected. By clicking on a radio, it automatically de-selects the one previously selected.

## Do & dont's

<hintitem>
    A list of radio buttons includes always minimum two options.
</hintitem>

<hintitem dont="true">
    Never use the radio alone. You should always use it with a label.
</hintitem>

<hintitem dont="true">
    Don't use a radio button to accept mentions. It's more appropriate to use a checkbox.
</hintitem>
