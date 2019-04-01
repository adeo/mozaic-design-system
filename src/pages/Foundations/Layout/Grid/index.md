---
title: 'Grid system'
order: 3
---

# Overview

A grid is used to create a **more structured and more harmonious design.** It’s the framework of your page, you build the layout by placing blocks of contents (text, images,…) on a certain number of columns.
Gutters are used to separate 2 blocks, they give air to the design.
Columns and gutters form a container. The container can be **full width or with a fixed size.**

### Grids can be described using the following properties :

- **column count** - the number of columns
- **gutters** - the space between columns
- **container width** - it can be either fixed (ex: 1200px) or fluid (take the available space)
- **container paddings** - they create negative space between the edge of the grid (and therefore the content) and the edge of the container and need to be substracted from the congtainer width to get the effective grid width.

Those properties can change depending on the breakpoint.

![GridAnatomy](GridAnatomy.png)

# Principles

When using a grid, you decide the size of your elements by **the number of columns they use.**

<hintitem>
    An element should always stand on one or between several columns
</hintitem>
<hintitem>
    Elements are always separated by either a gutter or a combination of columns and gutter
</hintitem>
<hintitem dont="true">
    An element should never start on a gutter
</hintitem>

<br>

![GridPossibilities](GridPossibilities.png)
![GridSpacing](GridSpacing.png)

# The Leroy Merlin default Grid

We work with **12-columns grids** because the number 12 is the most versatile. 12 is divisible among reasonably small numbers; it’s possible to have 12, 6, 4, 3, 2 or 1 evenly spaced columns. This gives designers a lot of flexibility when they create a layout.

<hintitem>
    Gutters and external margins widths should always be multiples of the Magic Unit.
</hintitem>

<br>

| breakpoint                   | grid width                 | Col. width         | Gutter     | cont. Padding | cont. width           |
| ---------------------------- | -------------------------- | ------------------ | ---------- | ------------- | --------------------- |
| `s` &nbsp; (0 - 576px)       | fluid                      | fluid              | 16px (1mu) | 16px (1mu)    | fuild                 |
| `m` &nbsp; (576px - 1100px)  | fluid                      | fluid              | 32px (2mu) | 16px (1mu)    | fluid                 |
| `l` &nbsp; (1100px - 1920px) | fluid - max: 1312px (82mu) | fluid - 80px (5mu) | 32px (2mu) | 32px (2mu)    | fluid - 1376px (86mu) |
| `xl` &nbsp; (1920px and up)  | 1312px (82mu)              | 80px (5mu)         | 32px (2mu) | 32px (2mu)    | 1376px (86mu)         |

<br>

<small>Reminder : mu = MagicUnit. Ex: 3.5mu = MagicUnit \* 3.5</small>

## Default container

The default grid uses [the default container](/Foundations/Layout/Container/).

<br>
