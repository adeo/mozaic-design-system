---
title: 'Text input'
order: 1
---
##Preview
 > Inputs are used to **create input fields with text on a single line**. Their states depends on the user interaction or the context.

<!-- #insert here a picture of inputs -->

##Variations
There is no variation of theme or size for input, this atom adapts according to its parent.

## Behaviors
### Standard input states :

| State          | Usage                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| Hover          | When the user hover the input                                                             |
| Focus          | When the user clic inside the input                                                       |
| Disabled       | When the user can't use the input field                                                   |
| Valid          | To show the user that his entry is correct against the criteria determined upstream       |
| Invalid        | To show the user that his entry is invalid against the criteria determined upstream       |



## Do's and don'ts

<hintitem>
    You can cumulate différents states like that :
</hintitem>

<pattern path="src/patterns/--input/input-invalid-event"></pattern>

<hintitem dont=true>
    <strong>Disabled status</strong> can't support any other styles or event
</hintitem>
<pattern path="src/patterns/--input/input-default-disabled"></pattern>


## Accessibility
**Input text must have an explicit label.**
**Always use a label associated width an input <small>remember that a placeholder is not a replacement for a label !</small>**