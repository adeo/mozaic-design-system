---
title: 'Text input'
order: 1
---
##Preview
 > Inputs are used to **create input fields with text on a single line**. Their states depends on the user interaction or the context.

## Behaviors
### Standard input states :

| State          | Usage                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| Hover          | When the input is hovered due to user navigation.                                         |
| Focus          | When the input is focused due to user navigation.                                         |
| Disabled       | When the input field is inactive or inaccessible                                          |
| Valid          | When the entry is correct against the criteria determined upstream                        |
| Invalid        | When the entry is invalid against the criteria determined upstream                        |


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