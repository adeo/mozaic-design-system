---
title: 'Code'
order: 1
---

# Using magic unit in SCSS :

The magic unit is a `scss` variable generated from tokens: `$magic-unit` .

this variable is an unitless value equal to `16` .

## Why an unitless value ?

First, we whant to express sizes in `rem` units.
If you don't know why, [read this first](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)

### So, what's the problem ?

Well, depending on the team code base that use it, the value of `1rem` may be different... The value of `1rem` is defined by the `font-size` property attached to the root element (html on the web).

```css
/* it's not uncommon to see this */
html {
  font-size: 62.5%; /* 62.5% of 16px is 10px */
}

.my-element {
  margin-bottom: 1.6rem; /* 16px, easier for px/rem convertions */
}
```

by default, the `rem` is equal to `16px` :

```css
html {
  /* ...nothing here redifining the font-size */
}

.my-element {
  margin-bottom: 1.6rem; /* 1.6 x 16px = 25,6px... yerk! */
}
```

### Ok, so how do we make this work ?

We added a token where you can define your local pixel value of `1rem`. It's exposed in scss as `$local-rem-value`. This value is set to `16` by default. Then, to get a rem value of `$magic-unit`, we divide it by `$local-rem-value` :

```css
@import 'settings-tools/all-settings';

.my-element {
  /* suposing your rem equal 16px */
  margin-bottom: ($magic-unit/$local-rem-value) * 1rem; /* return 1rem = 16px */

  /* suposing your rem equal 10px */
  margin-bottom: ($magic-unit/$local-rem-value) * 1rem; /* return 1.6rem = 16px */
}
```

To make things easier, we created a sass function that do that for you :

**the `to-rem()` sass function :**

```css
@import 'settings-tools/all-settings';
/* your rem ($local-rem-value) can by equal either to 10px or 16px */
.my-element {
  margin-bottom: to-rem($magic-unit); /* return 1.6rem or 1rem = 16px */
}
```

## You got it ! But there is more :

We created multiple things to help you work better with the magic unit :

- the function `magic-unit()`
- the function `magic-unit-rem()`
- the variables `$mu025` to `$mu1000`

here their respectives API :

### The magic-unit function :

> the **magic-unit function** return an **unitless** multiplictaion of the magic unit **expressed in px**, and expect a **multiplier** parameter.

folowing the rules of granularity, it will accept a multiplier parameter:

- of 0.25 increments for multiplier less than 2
- of 0.5 increments for multipliers greater than 2 and less than 4
- integers for multipliers greater than 4

**it is particularily usefull when you need to make calculations.**

Imagine you create a button. You whant it to have exactly 2.5 x magic-unit height when on one line, but still be able to grow in unexpected uses-cases, if the text is forced on two lines.

One valid approach could be the folowing :

```css
@import 'settings-tools/all-settings';

.my-button {
  // define local variables
  $vertical-paddings: magic-unit(0.5);
  $desired-total-height: magic-unit(2.5);

  padding-top: to-rem($vertical-paddings);
  padding-bottom: to-rem($vertical-paddings);
  line-height: to-rem($desired-total-height - ($vertical-paddings * 2));
}
```

<hint type="dont">
    <hintitem dont="true">
        Dont use an invalid multiplier parameter : <code>magic-unit(0.6792)</code>. <br>The magic-unit function will throw an error and prevent the css compilation
    </hintitem>
    <hintitem dont="true">
        Avoid using custom multiplications : <code>magic-unit*12</code>. <br> that way you can be sure to use an authorized value.
    </hintitem>
</hint>

### The magic-unit-rem function :

> the **magic-unit-rem function** behave exactly as the magic-unit function does, exept **it return a rem value**.

It basically just do the `to-rem()` part for you

```css
@import 'settings-tools/all-settings';

.my-element {
  margin-bottom: magic-unit-rem(0.25);
  /* is equivalent to */
  margin-bottom: to-rem(magic-unit(0.25));
}
```

### The shorthands variables :

> the **shorthands variables** behave exactly as the magic-unit-rem, but in a variable form factor.
