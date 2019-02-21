---
title: 'Flexy Grid'
order: 7
---

> Flexy is a grid system and a general purpose layout tool based on Flex. It can be used to build page level layout as well as component level one.

## Basics

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

| token name               | description                                  | value      |
| ------------------------ | -------------------------------------------- | ---------- |
| `size.gutter.screen.xxs` | the gutter width for smallest devices and up | 16px / 1mu |
| `size.gutter.screen.m`   | the gutter width for screen `m` and up       | 32px / 2mu |

## Columns

Columns are defined by the using the class `.gl-flexy__col` on a direct child of a `.gl-flexy` container.

By default, `.gl-flexy` `flex-wrap` is set to `wrap`, meaning that columns will wrap to the next line when their total width exeeds 100% of the `.gl-flexy` width.

`.gl-flexy__col` is set to `flex: 1` by default, meaning that a `.gl-flexy__col` will take the available width of a `.gl-flexy` container.

Adding 3 `.gl-flexy__col` in a same `.gl-flexy` container will result in 3 columns taking up each 1/3 of the availablme space.

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

<pattern path="src/patterns/--flexy/flexy"></pattern>

### Responsive widths

Apply widths to breakpoints using the `@from-XX` sufix to the widths modifiers.

The available breakpoints modifiers are :

| Modifier                              | breakpoint                     | corresponding device                 |
| ------------------------------------- | ------------------------------ | ------------------------------------ |
| `gl-flexy__col--[size]` (no modifier) | from 0px and up                | mobile / all                         |
| `gl-flexy__col--[size]@from-s`        | **s**: from **576px and up**   | fablet / small tablet and up         |
| `gl-flexy__col--[size]@from-l`        | **l**: from **992px and up**   | large tablets / small labtops and up |
| `gl-flexy__col--[size]@from-xl`       | **xl**: from **1200px and up** | labtops and up                       |

<br>

<pattern path="src/patterns/--flexy/flexyResponsive"></pattern>

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

<pattern path="src/patterns/--flexy/flexyAlign"></pattern>

## Nesting flexy grids

You can nest flexy grids together either by creating a new `.gl-flexy` grid in inside a column, or by directly applying a `.gl-flexy` class on a `.gl-flexy__column` element.

### 1. creating a new grid inside a column :

```html
<div class="gl-flexy">
  <div class="gl-flexy__col">
    <!-- content 1 -->
  </div>
  <div class="gl-flexy__col">
    <div class="gl-flexy">
      <div class="gl-flexy__col">
        <!-- nested content 1-->
      </div>
      <div class="gl-flexy__col">
        <!-- nested content 2 -->
      </div>
    </div>
  </div>
</div>
```

### 2. directly applying a `.gl-flexy` class directly on a `.gl-flexy__col` element:

```html
<div class="gl-flexy">
  <div class="gl-flexy__col">
    <!-- content 1 -->
  </div>
  <div class="gl-flexy__col gl-flexy">
    <!-- the column is also a grid -->
    <div class="gl-flexy__col">
      <!-- nested content 1-->
    </div>
    <div class="gl-flexy__col">
      <!-- nested content 2 -->
    </div>
  </div>
</div>
```

<pattern path="src/patterns/--flexy/flexyNested"></pattern>

## column Order

Use the `gl-flexy__col--last` and `gl-flexy__col--first` modifier to reorder columns

<pattern path="src/patterns/--flexy/flexyOrder"></pattern>

## Use flexy to center vertically and horizontally

Use the `gl-flexy--space-around` and the `gl-flexy--items-center` modifier on a `gl-flexy` element to center vertically and horizontally elements.

<pattern path="src/patterns/--flexy/flexyCentered"></pattern>
