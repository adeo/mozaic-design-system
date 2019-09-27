---
title: 'Code'
order: 1
---

> Flexy is a grid system and a general purpose layout tool based on Flex. It can be used to build page level layout as well as component level one. It is why it is not called "grid" but "flexy".

## Basics

<hintitem>
  Use flexy with a container to create page-level layouts
</hintitem>

<hintitem>
  Use flexy when possible to create flex layouts inside smaller elements ro components
</hintitem>

### Import the grid :

```css
@import 'settings-tools/_all-settings';

@include import-font-families();

@import 'layouts/_l.container'; // you generally want the container as well
@import 'layouts/_l.flexy';
```

`ml-flexy` is very close to the bootstrap flex grid system.
to create a grid, you need 2 elements :

- a grid: `ml-flexy`
- columns: `ml-flexy__col`

```html
<div class="ml-flexy">
  <div class="ml-flexy__col">
    col 1
  </div>

  <div class="ml-flexy__col">
    col 2
  </div>
</div>
```

<hintitem>
  Wrap the grid in a ml-container to set external margins and limit the content's maximum width
</hintitem>

```html
<main class="ml-container">
  <div class="ml-flexy">
    ...
  </div>
</main>
```

### Gutters

In most cases you will need gutters.

When **used with gutters**, `.ml-flexy` uses the negative margin pattern : each column as a padding mesuring half a gutter width, and the containing `.ml-flexy` as a negative margin equal to half a gutter width on both side as well.

```html
<div class="ml-flexy ml-flexy--gutter">
  <div class="ml-flexy__col">
    col 1
  </div>

  <div class="ml-flexy__col">
    col 2
  </div>
</div>
```

### Related tokens :

| token name             | description                                  | value      |
| ---------------------- | -------------------------------------------- | ---------- |
| `size.gutter.screen.s` | the gutter width for smallest devices and up | 16px (1mu) |
| `size.gutter.screen.m` | the gutter width for screen `m` and up       | 32px (2mu) |

<br>

<small>Reminder : mu = MagicUnit. Ex: 3.5mu = MagicUnit \* 3.5</small>

## Columns

Columns are defined by the using the class `.ml-flexy__col` on a direct child of a `.ml-flexy` container.

By default, `.ml-flexy` `flex-wrap` is set to `wrap`, meaning that columns will wrap to the next line when their total width exeeds 100% of the `.ml-flexy` width.

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyWrap"></pattern>

`.ml-flexy__col` is set to `flex: 1` by default, meaning that a `.ml-flexy__col` will take the available width of a `.ml-flexy` container.

Adding 3 `.ml-flexy__col` in a same `.ml-flexy` container will result in 3 columns taking up each 1/3 of the available space.

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyDefaultCol"></pattern>

### Columns widths

you can apply specific columns width using `.ml-flexy__col` modifiers :

| Modifier                  | Width                       |
| ------------------------- | --------------------------- |
| `.ml-flexy__col--1of12`   | 8.3333%                     |
| `.ml-flexy__col--1of6`    | 16.6666%                    |
| `.ml-flexy__col--1of4`    | 25%                         |
| `.ml-flexy__col--1of3`    | 33.3333%                    |
| `.ml-flexy__col--1of2`    | 50%                         |
| `.ml-flexy__col--2of3`    | 66.6666%                    |
| `.ml-flexy__col--3of4`    | 75%                         |
| `.ml-flexy__col--5of6`    | 83.3333%                    |
| `.ml-flexy__col--11of12`  | 91.66666%                   |
| `.ml-flexy__col--initial` | width of the column content |
| `.ml-flexy__col--fill`    | fill the available width    |
| `.ml-flexy__col--full`    | 100%                        |

<br>

<preview path="src/pages/Foundations/Layout/Grid/previews/flexy"></pattern>

### Responsive widths

Apply widths to breakpoints using the `@from-XX` sufix to the widths modifiers.

The available breakpoints modifiers are :

| Modifier                              | breakpoint                     | corresponding device                 |
| ------------------------------------- | ------------------------------ | ------------------------------------ |
| `ml-flexy__col--[size]` (no modifier) | from 0px and up                | mobile / all                         |
| `ml-flexy__col--[size]@from-m`        | **m**: from **576px and up**   | fablet / small tablet and up         |
| `ml-flexy__col--[size]@from-l`        | **l**: from **1100px and up**  | large tablets / small labtops and up |
| `ml-flexy__col--[size]@from-xl`       | **xl**: from **1920px and up** | labtops and up                       |

<br>

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyResponsive"></preview>

## Alignment

You can align columns in a `ml-flexy` using the `ml-flexy--items-[xxx]` modifiers.

Available modifiers are :

| Modifier                  | value                   | behavior                        |
| ------------------------- | ----------------------- | ------------------------------- |
| default (no modifiers)    | align-items: flex-start | top alignment                   |
| `ml-flexy--items-end`     | align-items: flex-end   | bottom alignment                |
| `ml-flexy--items-center`  | align-items: center     | vertically centered             |
| `ml-flexy--items-start`   | align-items: flex-start | top alignment                   |
| `ml-flexy--items-stretch` | align-items: stretch    | all columns use the same height |

<br>

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyAlign"></pattern>

## Pushing a column to the left

You can push a column using the `ml-flexy__col--push-[XofY]` modifiers.

```html
...
<div
  class="
  ml-flexy__col
  ml-flexy__col--1of3
  ml-flexy__col--push-1of3"
>
  <!-- column content -->
</div>
...
```

All columns widths (numerical) are available as push values from `1of12`, `1of6`, `1of4` ... to `11of12`

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyPush"></pattern>

### Responsive push modifiers

Apply widths to breakpoints using the `@from-XX` sufix to the widths modifiers.

The available breakpoints modifiers are :

| Modifier                                   | breakpoint                     | corresponding device                 |
| ------------------------------------------ | ------------------------------ | ------------------------------------ |
| `ml-flexy__col--push-[size]` (no modifier) | from 0px and up                | mobile / all                         |
| `ml-flexy__col--push-[size]@from-m`        | **m**: from **576px and up**   | fablet / small tablet and up         |
| `ml-flexy__col--push-[size]@from-l`        | **l**: from **1100px and up**  | large tablets / small labtops and up |
| `ml-flexy__col--push-[size]@from-xl`       | **xl**: from **1920px and up** | labtops and up                       |

## Nesting flexy grids

You can either nest flexy grids by creating a new `.ml-flexy` grid inside a column, or by directly applying a `.ml-flexy` class on a `.ml-flexy__column` element.

```html
...
<div class="ml-flexy__col">
  <div class="ml-flexy">
    <!-- nested inside -->
  </div>
</div>
<div class="ml-flexy__col ml-flexy">
  <!-- the column is a also a flexy -->
</div>
...
```

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyNested"></pattern>

## Columns Order

Use the `ml-flexy__col--last` and `ml-flexy__col--first` modifier to reorder columns.

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyOrder"></pattern>

## Use flexy to center vertically and horizontally

Use the `ml-flexy--space-around` and the `ml-flexy--items-center` modifier on a `ml-flexy` element to center vertically and horizontally elements.

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyCentered"></pattern>

## Customisation and mixins

There is 8 available mixins that you can work with to help you create layouts :

- `set-flexy` : add flex properties to a container (similar than `.ml-flexy`)
- `set-flexy-width` : add a width properties to a flex child (similar than `.ml-flexy__col--XofX`)
- `set-flexy-gutter` and `set-flexy-col-gutter` : add gutters to the a flex container and his child
- `set-flexy-col-push` : add a margin left to a flex child (similar than `.ml-flexy__col--push-XofX`)
- `make-flexy-col` : create a new column width of type `.ml-flexy__col--XofX`
- `make-flexy-custom-col` : create custom columns (with any properties you whant `.ml-flexy__col--XXX`)
- `make-flexy-col-push` : create a new column push of type `.ml-flexy__col--push-XofX`

### The set-flexy-xxx mixins

<hintitem>
Use the set-flexy-xxx to mimic the behavior of a grid without applying classes on the dom
</hintitem>

Example : Create a blog post layout with an image and a text. From tablet screens, put the text in front of the image.

```css
@import 'settings-tools/_all-settings';

@include import-font-families();


.post-item {
  $gutter: $mu200;
  /* set flex */
  @include set-flexy(); /* add the gutter to the parent */
  @include set-flexy-gutter($gutter);

  &__image,
  &__body {
    /* add the gutter to the childs */
    @include set-flexy-col-gutter($gutter);
  }

  &__image {
    @include set-flexy-width(1, 1); // 100%

    @include set-from-screen(m) {
      // will output a 1of4 equivalent = 25% width
      @include set-flexy-width(1, 4);
    }
  }

  &__body {
    @include set-flexy-width(1, 1); // 100%

    @include set-from-screen(m) {
      // will output a 1of4 equivalent = 25% width
      @include set-flexy-width(3, 4);
    }
  }
}
```

#### set-flexy-xxx mixins parameters

- `set-flexy` : no argument required
- `set-flexy-width` : `$portion`: required - integer, `$of`: required - integer
- `set-flexy-gutter` and `set-flexy-col-gutter` : `$gutter` : required - a `rem` value of the total gutter width
- `set-flexy-col-push` : `$portion`: required - integer, `$of`: required - integer

### The make-flexy-xxx mixins

<hintitem>
Use the make-flexy-xxx to create aditional columns and options to the grid system
</hintitem>

#### Make-flexy-xxx mixins parameters

- `make-flexy-col` : create a new column width of type `.ml-flexy__col--XofX`
- `make-flexy-custom-col` : create custom columns (with any properties you whant `.ml-flexy__col--XXX`)
- `make-flexy-col-push` : create a new column push of type `.ml-flexy__col--push-XofX`

#### Example : adding columns to the flexy grid

Please consider that you need to keep the import order clean and that you should add your grid extension right after the import of flexy.

We advise you to create a new scss file that contain your extensions:

`src/_l.flexy-extend.scss`

```css
/*
create a column of 12.5% width
named ml-flexy__col--1of8
with responsive modifiers for all majors screens sizes
*/
@include make-flexy-col(1, 8, $major-screens);

/*
create a custom column of 320px width
named ml-flexy__col--ads
with no responsive modifiers
*/
@include make-flexy-custom-col('ads') {
  flex: 0 0 320px;
  max-width: 320px;
}

/*
create a push value of 12.5%
named ml-flexy__col--push-1of8
with responsive modifiers for all majors screens sizes
*/
@include make-flexy-col-push(1, 8, $major-screens);
```

then import it in your main bundle

`src/main-bundle.scss`

```css
@import 'settings-tools/_all-settings';

@include import-font-families();

...
@import 'layouts/_l.flexy';
@import 'src/_l.flexy-extend'; // insert it right after
@import 'layouts/_l.other-layout';
...
```
