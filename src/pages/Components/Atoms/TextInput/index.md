---
title: 'Text input'
order: 1
---

##Preview

> Inputs are used to **create input fields with text on a single line**. Their states depends on the user interaction or the context.

<preview path="src/pages/Components/Atoms/TextInput/previews/input-preview"></preview>

## Standard input states :

###Hover

When the input is hovered due to user navigation.

<preview path="src/pages/Components/Atoms/TextInput/previews/input-hover-state"></preview>

###Focus

When the input is in focus. It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's "tab" key.

<preview path="src/pages/Components/Atoms/TextInput/previews/input-focus-state"></preview>

###Disabled
When the input field is inactive or inaccessible. It is usually used when the input, for some reason, is forbidden or blocked to be edited.

<preview path="src/pages/Components/Atoms/TextInput/previews/input-disabled-state"></preview>

###Valid
When the entry is correct against the criteria determined upstream.

<preview path="src/pages/Components/Atoms/TextInput/previews/input-valid-state"></preview>

###Invalid

When the entry is invalid against the criteria determined upstream.

<preview path="src/pages/Components/Atoms/TextInput/previews/input-invalid-state"></preview>

## Do's and don'ts

<hintitem>
You can cumulate différents states like that :
</hintitem>
<preview path="src/pages/Components/Atoms/TextInput/previews/input-invalid-event"></preview>

<hintitem dont=true>
when <strong>disabled</strong>, an input field can never display any other state styles.
</hintitem>

<preview path="src/pages/Components/Atoms/TextInput/previews/input-default-disabled"></preview>

## Accessibility

- **Input text must have an explicit label.**
- **Always use a label associated with an input <small>remember that a placeholder is not a replacement for a label !**</small>
