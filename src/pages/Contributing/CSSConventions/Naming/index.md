---
title: 'Naming'
order: 2
---

## Prefixed classes

Following the ITCSS convention, we add a two letters prefixe to all our classes.  
the first letter of the prefixe is the source ID, meaning a letter that tell you that the classe come from our design system. The second letter is the first letter of the ITCSS layer name.

- `.ml-[classname]` : mozaic layout
- `.mt-[classname]` : mozaic typography
- `.mc-[classname]` : mozaic component
- `.mu-[classname]` : mozaic utility



### States classes

BEM entities can have states.

States classes starts with an auxilary verb **be** (or **have** in fiew cases) like `.is-open` or `.has-no-results`

States classes can only be used in combination with another BEM entity :

```css
.mc-accordion.is-open {
  ...;
}

.mc-search__results.has-none {
  ...;
}
```

A state can be defined by the fact that it may change due to user interactions or server response. Modifiers are a variations of an element. For example, a button can have modifiers to be a loader button, with a spinning icon `.mc-button--loader`, but a sate in witch it is waiting for a server response, like `.mc-button--loader.is-loading`.

### Responsives modifiers

Responsive modifiers are classes that apply theire styles only at a certain breakpoint.

they have a sufix `@` follwed by the name of the viewport they apply to `from-xl`

example: `.mu-hidden@from-m`

to be able to work, the @ character need to be escaped in the css files `.mu-hidden\@from-m` but can be called without the backslash on the dom : `<span class="mu-hidden@from-m"> hide me at M screens </span>`




# Variables and design tokens

Design tokens are variables that defines many properties in a json object that are compiled and exported to multiple formats to be used on web and mobile platforms (or any desired format trully).

For css, the tokens are exported as SCSS variables as well as SCSS maps (to give us the abillity the map though them).

## We use two "layers" of tokens :

### 1 - the base, low level layer

To define all the basic values like colors, sizes etc.  
As an example, we define all the possible colors in the same place.

Most of the time, you should not have to use thoses variables directly, because a highter level of variable or a mixin should be available to provide authorized values for the type of property/element you are trying to define.

### 2 - an "elements" level layer

For example, we create a list of authorized values for text-colors or create some tokens to define buttons cosmetic styles. This layer make reference to the base layers values.

In the documentation you may read them expressed as js object keys selectors : `color.button.solid.background` when compiled to SCSS the dots are replaced with simple dashes `-` the scss variable will be `$color-button-solid-background`.

# Mixins and functions

All mixins and functions used to build all the part of the Mozaic design system css are imported into the `all-settings` sub-bundle.

We take great care to create a lot of mixins to build our css framework so that you can mimic the behavior of a classe by applying his properties into another component without the need to import the related SCSS file into your bundle, but also to give you control and extend the existing classes.

There is three types of mixins :

## the set-xxx mixins

> include properties / values

Example :

```sass
.my-class {
    @include set-font-face('regular');
}
```

Output :

```css
.my-class {
  font-familly: LeroyMerlin, arial, sans-serif;
  font-weight: 400;
}
```

## the make-xxx mixins

> create complete classes

Example :

```sass
@include make-flexy-col(1, 2, (s, m));
```

Output :

```css
.ml-flexy__col--1of2 {
  flex: 0 0 50%;
  max-width: 50%;
}

@media screen and (min-width: 576px) {
  .ml-flexy__col--1of2\@from-m {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
```

## the mod-xxx mixins

> that extend exising class with modifiers

Example :

```sass
.mu-hidden {
    @include mod-from-screens(s, m, l) {
        display: none !important;
    }
}
```

Output :

```css
.mu-hidden {
  display: none !important;
}

@media screen and (min-width: 576px) {
  .mu-hidden\@from-m {
    display: none !important;
  }
}

@media screen and (min-width: 1100px) {
  .mu-hidden\@from-l {
    display: none !important;
  }
}
```
