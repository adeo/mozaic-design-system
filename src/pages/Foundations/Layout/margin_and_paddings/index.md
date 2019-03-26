---
title: 'Margins and Paddings'
order: 4
---

<hintitem>
  You should use a multiple of the magic unit as margins and paddings
</hintitem>
<hintitem>
  You should remove border sizes from the vertical paddings values
</hintitem>

<br/>

## Removing border sizes from vertical paddings

For exemple, take a button. If your button have a 2x magic-unit height (32px)
you have :

- 1px borders
- 1.5x magic-unit line-height
- your padding top and bottom would be 0.25x magic-unit minus 1px
