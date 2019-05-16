---
title: 'Text input'
order: 1
---
##Preview

> Inputs are used to **create input fields with text on a single line**. Their states depends on the user interaction or the context.

<pattern path="src/patterns/--input/input-preview"></pattern>

## Standard input states :

###Hover

When the input is hovered due to user navigation.

<pattern path="src/patterns/--input/input-hover-state"></pattern>

###Focus

When the input is in focus. It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's "tab" key.

<pattern path="src/patterns/--input/input-focus-state"></pattern>

###Disabled
When the input field is inactive or inaccessible. It is usually used when the input, for some reason, is forbidden or blocked to be edited.

<pattern path="src/patterns/--input/input-disabled-state"></pattern>

###Valid
When the entry is correct against the criteria determined upstream.

<pattern path="src/patterns/--input/input-valid-state"></pattern>

###Invalid

When the entry is invalid against the criteria determined upstream.

<pattern path="src/patterns/--input/input-invalid-state"></pattern>

## Do's and don'ts

<hintitem>
You can cumulate différents states like that :
</hintitem>
<pattern path="src/patterns/--input/input-invalid-event"></pattern>

<hintitem dont=true>
when <strong>disabled</strong>, an input field can never display any other state styles.
</hintitem>
<pattern path="src/patterns/--input/input-default-disabled"></pattern>

## Accessibility
* **Input text must have an explicit label.**
* **Always use a label associated with an input <small>remember that a placeholder is not a replacement for a label !**</small>
