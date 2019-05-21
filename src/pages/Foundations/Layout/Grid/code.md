---
title: 'SCSS - flexy grid'
order: 1
---

> Flexy is a grid system and a general purpose layout tool based on Flex. It can be used to build page level layout as well as component level one.

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

When **used with gutters**, `.gl-flexy` uses the négative margin pattern : each column as a padding mesuring alf a gutter width, and the containing `.gl-flexy` as a négative margin equal to alf a gutter width on both side as well.

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

<pattern path="src/pages/Foundations/Layout/Grid/Previews/flexyWrap"></pattern>

`.gl-flexy__col` is set to `flex: 1` by default, meaning that a `.gl-flexy__col` will take the available width of a `.gl-flexy` container.

Adding 3 `.gl-flexy__col` in a same `.gl-flexy` container will result in 3 columns taking up each 1/3 of the available space.

<pattern path="src/pages/Foundations/Layout/Grid/Previews/flexyDefaultCol"></pattern>

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

<pattern path="src/pages/Foundations/Layout/Grid/Previews/flexy"></pattern>

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

<pattern path="src/pages/Foundations/Layout/Grid/Previews/flexyResponsive"></pattern>

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

<pattern path="src/pages/Foundations/Layout/Grid/Previews/flexyAlign"></pattern>

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

<pattern path="src/pages/Foundations/Layout/Grid/Previews/flexyNested"></pattern>

## Columns Order

Use the `gl-flexy__col--last` and `gl-flexy__col--first` modifier to reorder columns.

<pattern path="src/pages/Foundations/Layout/Grid/Previews/flexyOrder"></pattern>

## Use flexy to center vertically and horizontally

Use the `gl-flexy--space-around` and the `gl-flexy--items-center` modifier on a `gl-flexy` element to center vertically and horizontally elements.

<pattern path="src/pages/Foundations/Layout/Grid/Previews/flexyCentered"></pattern>
