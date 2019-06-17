---
title: 'CSS conventions'
order: 8
---

# ITCSS

## Introduction

> ITCSS stand for **Inverted Triangle architecture for CSS**, it is a way to better manage specificity and to categorise styles.

- A sane, scalable, managed architecture.
- A school-of-thought, not a library.
- A meta framework; a framework for frameworks.

The layers are organised in an order following those metrics :

- From the generic to the explicit.
- From low specificity to high specificity.
- From global reach to localized reach.

### The ITCSS architecture layers

Please note that we use a slightly modified ITCSS architecture from the original

1. **Settings**: Global variables, config switches.
2. **Tools**: Global mixins and functions.
3. **Generic**: Ground-zero styles (Normalize.css, resets, box-sizing).
4. **Base/Elements**: Unclassed HTML elements (tag selectors).
5. **Layouts**: Cosmetic-free design patterns for layout purposes (like grid, or spacing).
6. **Components**: Designed components, chunks of UI.
7. **Utilities**: Helpers and overrides (mostly single properties classes with !important on them).

## Follow ITCSS order for importing your files

Note that all `settings` and `tools` are bundled into a file nammed `all-settings`.
This file is the only file required by all other files.
This File will not output any css when compiled appart from the font-faces declarations.

```css
/* mandatory */
@import '@mozaic-ds/styles/settings-tools/_all-settings';

/* Generics */
@import '@mozaic-ds/styles/generics/_g.reset.scss';
@import '@mozaic-ds/styles/generics/_g.box-sizing.scss';

/* Elements */
@import '@mozaic-ds/styles/elements/_e.inputs.scss';
@import '@mozaic-ds/styles/elements/_e.headings.scss';
@import '@mozaic-ds/styles/elements/_e...scss';

/* Layouts */
@import '@mozaic-ds/styles/layouts/_l.grid.scss';
@import '@mozaic-ds/styles/layouts/_l.flex.scss';
@import '@mozaic-ds/styles/layouts/_l....scss';

/* Components */
@import '@mozaic-ds/styles/components/_c.buttons.scss';
@import '@mozaic-ds/styles/components/_c.input-text.scss';
@import '@mozaic-ds/styles/components/_c....scss';

/* Utilities */
@import '@mozaic-ds/styles/elements/_u.spaces.scss';
@import '@mozaic-ds/styles/elements/_u.text-align.scss';
@import '@mozaic-ds/styles/elements/_u....scss';
```

# Naming conventions

## Prefixed classes

Following the ITCSS convention, we add a two letters prefixe to all our classes.  
the first letter of the prefixe is the source ID, meaning a letter that tell you that the classe come from our design system. The second letter is the first letter of the ITCSS layer name.

- `.gl-[classname]` : garden layout
- `.gc-[classname]` : garden component
- `.gu-[classname]` : garden utility

## BEM (Blocks / Elements / Modifiers)

### Introduction

BEM was created by **Yandex**, the "Russian Google" in 2009.

> It is a **component based architecture** and naming convention that stand for **Block / Element / Modifier** and relies **only on classes** to create meaningful scalables architectures.

We will explain the basics here, but we recommend developers on learning BEM : [read the full documentation](https://en.bem.info).

Note that in the following examples, the prefixes are symbolised by `pr` in front of the classes.

### Blocks

> You can think of them as components, they are reusable pieces of interface.

#### css/scss syntax :

```css
.pr-block-name {
  ...;
}
```

<br/>

![blocks](blocks.png)

<br/>

<hintitem>
    Blocks can be nested in one another
</hintitem>
<hintitem>
    Blocks can be moved between pages and projects
</hintitem>
<hintitem>
    An interface can contain mulitple instances of the same block
</hintitem>

### Elements

> A constituant of a block, or children

#### css/scss syntax :

```css
.pr-block-name__element-name {
  ...;
}
```

<br/>

![elements](elements.png)

<br/>

<hintitem dont="true">
    An element can't be used outside of his block.
</hintitem>

### Modifiers

> A BEM entity that defines a variation in appearance and behavior of a block or an element.

```css
.pr-block-name--modifier-name {
  ...;
}
.pr-block-name__element-name--modifier-name {
  ...;
}
```

<br/>

![modifiers](modifiers.png)

<br/>

### States classes

BEM entities can have states.

States classes starts with an auxilary verb **be** (or **have** in fiew cases) like `.is-open` or `.has-no-results`

States classes can only be used in combination with another BEM entity :

```css
.gc-accordion.is-open {
  ...;
}

.gc-search__results.has-none {
  ...;
}
```

A state can be defined by the fact that it may change due to user interactions or server response. Modifiers are a variations of an element. For example, a button can have modifiers to be a loader button, with a spinning icon `.gc-button--loader`, but a sate in witch it is waiting for a server response, like `.gc-button--loader.is-loading`.

### Responsives modifiers

Responsive modifiers are classes that apply theire styles only at a certain breakpoint.

they have a sufix `@` follwed by the name of the viewport they apply to `from-xl`

example: `.gu-hidden@from-m`

to be able to work, the @ character need to be escaped in the css files `.gu-hidden\@from-m` but can be called without the backslash on the dom : `<span class="gu-hidden@from-m"> hide me at M screens </span>`

### why BEM ?

Just by looking at a piece of markup :

- you can know witch classes are related to others
- you can also know in witch file they are defined, reducing headache
- you can understand the role of the classes (And therefore better follow the SRP)

Following theses practices will help you:

- make decision about emplacement easily
- get self documented code, and logically reduce the need for CSS documentation
- keep specificity low (because most of your selectors will only be composed of one classe)
- make class colision almost impossible (all classes will be uniques)
- making it safer to have multiple sources of code (any CSS frameworks mixed with our own)

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

All mixins and functions used to build all the part of the Garden design system css are imported into the `all-settings` sub-bundle.

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
.gl-flexy__col--1of2 {
  flex: 0 0 50%;
  max-width: 50%;
}

@media screen and (min-width: 576px) {
  .gl-flexy__col--1of2\@from-m {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
```

## the mod-xxx mixins

> that extend exising class with modifiers

Example :

```sass
.gu-hidden {
    @include mod-from-screens(s, m, l) {
        display: none !important;
    }
}
```

Output :

```css
.gu-hidden {
  display: none !important;
}

@media screen and (min-width: 576px) {
  .gu-hidden\@from-m {
    display: none !important;
  }
}

@media screen and (min-width: 1100px) {
  .gu-hidden\@from-l {
    display: none !important;
  }
}
```
