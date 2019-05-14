---
title: 'Text input'
order: 1
---

##Preview

> Inputs are used to **create input fields with text on a single line**. Their states depends on the user interaction or the context.

<pattern path="src/patterns/--input/input-preview"></pattern>

## Standard input states :

###Hover

When the user hover the input

<pattern path="src/patterns/--input/input-hover-state"></pattern>

###Focus

When the user clic inside the input

<pattern path="src/patterns/--input/input-focus-state"></pattern>

###Disabled
When the user can't use the input field

<pattern path="src/patterns/--input/input-disabled-state"></pattern>

###Valid
To show the user that his entry is correct against the criteria determined upstream

<pattern path="src/patterns/--input/input-valid-state"></pattern>

###Invalid

To show the user that his entry is invalid against the criteria determined upstream

<pattern path="src/patterns/--input/input-invalid-state"></pattern>

## Do's and don'ts

<hintitem>
    You can cumulate differents states like that :
</hintitem>

<pattern path="src/patterns/--input/input-invalid-event"></pattern>

<hintitem dont=true>
    <strong>Disabled status</strong> can't support any other styles or event
</hintitem>
<pattern path="src/patterns/--input/input-default-disabled"></pattern>

## Accessibility

**Input text must have an explicit label.**
