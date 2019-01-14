---
title: 'Grid System'
order: 1
---

> The grid system allow you to **build pages and components easily** without thinking about browser compatibility and respect of sketch layout design

## The grid mixin

To create a grid system you can use the `newGrid` mixin. You have to define some arguments when you implement it.


Those arguments are :
* number of column : `number`
* IE 11 Support : `boolean`
* Gutter width (px) : `number`
* Grid container width ( you should precise the unit - px or % ) : `string`


<pattern path="src/patterns/exemple/--grid/grid"></pattern>

### Implementation in a breakpoint

In the `newGrid` mixin you can also define an optional argument. It allow you to create some specific grid CSS Class.

In the example below you can see that the mixin in the breakpoint have a 5th argument which is `l`.
This character is use in the grid system CSS Class name.
<pattern path="src/patterns/exemple/--grid/grid-breakpoint"></pattern>