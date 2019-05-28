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

```scss
@import 'settings-tools/_all-settings';
@import 'layouts/_l.container'; // you generally want the container as well
@import 'layouts/_l.flexy';
```

`gl-flexy` is very close to the bootstrap flex grid system.
to create a grid, you need 2 elements :

- a grid: `gl-flexy`
- columns: `gl-flexy__col`

```html
<div class="gl-flexy">
  <div class="gl-flexy__col">
    col 1
  </div>

  <div class="gl-flexy__col">
    col 2
  </div>
</div>
```

<hintitem>
  Wrap the grid in a gl-container to set external margins and limit the content's maximum width
</hintitem>

```html
<main class="gl-container">
  <div class="gl-flexy">
    ...
  </div>
</main>
```

### Gutters

In most cases you will need gutters.

When **used with gutters**, `.gl-flexy` uses the negative margin pattern : each column as a padding mesuring half a gutter width, and the containing `.gl-flexy` as a negative margin equal to half a gutter width on both side as well.

```html
<div class="gl-flexy gl-flexy--gutter">
  <div class="gl-flexy__col">
    col 1
  </div>

  <div class="gl-flexy__col">
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

Columns are defined by the using the class `.gl-flexy__col` on a direct child of a `.gl-flexy` container.

By default, `.gl-flexy` `flex-wrap` is set to `wrap`, meaning that columns will wrap to the next line when their total width exeeds 100% of the `.gl-flexy` width.

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyWrap"></pattern>

`.gl-flexy__col` is set to `flex: 1` by default, meaning that a `.gl-flexy__col` will take the available width of a `.gl-flexy` container.

Adding 3 `.gl-flexy__col` in a same `.gl-flexy` container will result in 3 columns taking up each 1/3 of the available space.

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyDefaultCol"></pattern>

### Columns widths

you can apply specific columns width using `.gl-flexy__col` modifiers :

| Modifier                  | Width                       |
| ------------------------- | --------------------------- |
| `.gl-flexy__col--1of12`   | 8.3333%                     |
| `.gl-flexy__col--1of6`    | 16.6666%                    |
| `.gl-flexy__col--1of4`    | 25%                         |
| `.gl-flexy__col--1of3`    | 33.3333%                    |
| `.gl-flexy__col--1of2`    | 50%                         |
| `.gl-flexy__col--2of3`    | 66.6666%                    |
| `.gl-flexy__col--3of4`    | 75%                         |
| `.gl-flexy__col--5of6`    | 83.3333%                    |
| `.gl-flexy__col--11of12`  | 91.66666%                   |
| `.gl-flexy__col--initial` | width of the column content |
| `.gl-flexy__col--fill`    | fill the available width    |
| `.gl-flexy__col--full`    | 100%                        |

<br>

<preview path="src/pages/Foundations/Layout/Grid/previews/flexy"></pattern>

### Responsive widths

Apply widths to breakpoints using the `@from-XX` sufix to the widths modifiers.

The available breakpoints modifiers are :

| Modifier                              | breakpoint                     | corresponding device                 |
| ------------------------------------- | ------------------------------ | ------------------------------------ |
| `gl-flexy__col--[size]` (no modifier) | from 0px and up                | mobile / all                         |
| `gl-flexy__col--[size]@from-m`        | **m**: from **576px and up**   | fablet / small tablet and up         |
| `gl-flexy__col--[size]@from-l`        | **l**: from **1100px and up**  | large tablets / small labtops and up |
| `gl-flexy__col--[size]@from-xl`       | **xl**: from **1920px and up** | labtops and up                       |

<br>

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyResponsive"></preview>

## Alignment

You can align columns in a `gl-flexy` using the `gl-flexy--items-[xxx]` modifiers.

Available modifiers are :

| Modifier                  | value                   | behavior                        |
| ------------------------- | ----------------------- | ------------------------------- |
| default (no modifiers)    | align-items: flex-start | top alignment                   |
| `gl-flexy--items-end`     | align-items: flex-end   | bottom alignment                |
| `gl-flexy--items-center`  | align-items: center     | vertically centered             |
| `gl-flexy--items-start`   | align-items: flex-start | top alignment                   |
| `gl-flexy--items-stretch` | align-items: stretch    | all columns use the same height |

<br>

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyAlign"></pattern>

## Pushing a column to the left

You can push a column using the `gl-flexy__col--push-[XofY]` modifiers.

```html
...
<div
  class="
  gl-flexy__col
  gl-flexy__col--1of3
  gl-flexy__col--push-1of3"
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
| `gl-flexy__col--push-[size]` (no modifier) | from 0px and up                | mobile / all                         |
| `gl-flexy__col--push-[size]@from-m`        | **m**: from **576px and up**   | fablet / small tablet and up         |
| `gl-flexy__col--push-[size]@from-l`        | **l**: from **1100px and up**  | large tablets / small labtops and up |
| `gl-flexy__col--push-[size]@from-xl`       | **xl**: from **1920px and up** | labtops and up                       |

## Nesting flexy grids

You can either nest flexy grids by creating a new `.gl-flexy` grid inside a column, or by directly applying a `.gl-flexy` class on a `.gl-flexy__column` element.

```html
...
<div class="gl-flexy__col">
  <div class="gl-flexy">
    <!-- nested inside -->
  </div>
</div>
<div class="gl-flexy__col gl-flexy">
  <!-- the column is a also a flexy -->
</div>
...
```

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyNested"></pattern>

## Columns Order

Use the `gl-flexy__col--last` and `gl-flexy__col--first` modifier to reorder columns.

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyOrder"></pattern>

## Use flexy to center vertically and horizontally

Use the `gl-flexy--space-around` and the `gl-flexy--items-center` modifier on a `gl-flexy` element to center vertically and horizontally elements.

<preview path="src/pages/Foundations/Layout/Grid/previews/flexyCentered"></pattern>

## Customisation and mixins

There is 8 available mixins that you can work with to help you create layouts :

- `set-flex-container` : add flex properties to a container (similar than `.gl-flexy`)
- `set-flex-width` : add a width properties to a flex child (similar than `.gl-flexy__col--XofX`)
- `set-flex-container-gutter` and `set-flex-child-gutter` : add gutters to the a flex container and his child
- `set-flex-push` : add a margin left to a flex child (similar than `.gl-flexy__col--push-XofX`)
- `make-flexy-col` : create a new column width of type `.gl-flexy__col--XofX`
- `make-flexy-custom-col` : create custom columns (with any properties you whant `.gl-flexy__col--XXX`)
- `make-flexy-col-push` : create a new column push of type `.gl-flexy__col--push-XofX`

### The set-flex-xxx mixins

<hintitem>
Use the set-flex-xxx to mimic the behavior of a grid without applying classes on the dom
</hintitem>

Example : Create a blog post layout with an image and a text. From tablet screens, put the text in front of the image.

```scss
@import 'settings-tools/_all-settings';

.post-item {
  $gutter: $mu200;
  /* set flex */
  @include set-flex-container(); /* add the gutter to the parent */
  @include set-flex-container-gutter($gutter);

  &__image,
  &__body {
    /* add the gutter to the childs */
    @include set-flex-child-gutter($gutter);
  }

  &__image {
    @include set-flex-width(1, 1); // 100%

    @include set-from-screen(m) {
      // will output a 1of4 equivalent = 25% width
      @include set-flex-width(1, 4);
    }
  }

  &__body {
    @include set-flex-width(1, 1); // 100%

    @include set-from-screen(m) {
      // will output a 1of4 equivalent = 25% width
      @include set-flex-width(3, 4);
    }
  }
}
```

#### Set-flex-xxx mixins parameters

- `set-flex-container` : no argument required
- `set-flex-width` : `$portion`: required - integer, `$of`: required - integer
- `set-flex-container-gutter` and `set-flex-child-gutter` : `$gutter` : required - a `rem` value of the total gutter width
- `set-flex-push` : `$portion`: required - integer, `$of`: required - integer

### The make-flexy-xxx mixins

<hintitem>
Use the make-flexy-xxx to create aditional columns and options to the grid system
</hintitem>

#### Make-flexy-xxx mixins parameters

- `make-flexy-col` : create a new column width of type `.gl-flexy__col--XofX`
- `make-flexy-custom-col` : create custom columns (with any properties you whant `.gl-flexy__col--XXX`)
- `make-flexy-col-push` : create a new column push of type `.gl-flexy__col--push-XofX`

#### Example : adding columns to the flexy grid

Please consider that you need to keep the import order clean and that you should add your grid extension right after the import of flexy.

We advise you to create a new scss file that contain your extensions:

`src/_l.flexy-extend.scss`

```scss
/*
create a column of 12.5% width
named gl-flexy__col--1of8
with responsive modifiers for all majors screens sizes
*/
@include make-flexy-col(1, 8, $major-screens);

/*
create a custom column of 320px width
named gl-flexy__col--ads
with no responsive modifiers
*/
@include make-flexy-custom-col('ads') {
  flex: 0 0 320px;
  max-width: 320px;
}

/*
create a push value of 12.5%
named gl-flexy__col--push-1of8
with responsive modifiers for all majors screens sizes
*/
@include make-flexy-col-push(1, 8, $major-screens);
```

then import it in your main bundle

`src/main-bundle.scss`

```scss
@import 'settings-tools/_all-settings';
...
@import 'layouts/_l.flexy';
@import 'src/_l.flexy-extend'; // insert it right after
@import 'layouts/_l.other-layout';
...
```
