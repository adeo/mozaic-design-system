---
title: 'SCSS / basic'
order: 1
---

### How to use the 12 columns basic grid

<hintitem>
    Use CSS Grid only for <strong>page layout</strong>
</hintitem>

#### Getting started

```scss
@import 'settings-tools/_all-settings.scss';
@import 'layouts/_grid';
```

#### The grid container

To use the grid you have to apply some specific CSS Class to your DOM.

- `gl-grid` : **required**, define your grid container
- `gl-grid--12` : **required**, define the 12 columns grid container

```html
<div class="gl-grid gl-grid--12">
  <!-- your columns goes here -->
</div>
```

#### Columns

To declare column width behavior you have a collection of CSS Class to apply to your HTML.

- `gl-grid__col-{x}` : **required**, define the column width behavior in the 12 columns grid system.
  - `{x}` is the number of column occupation
- `gl-grid__col-start-{x}` : **optionnal**, define at which column the component should start
  - `{x}` is the index of the column to start.

<pattern path="src/patterns/exemple/--grid/grid"></pattern>

#### Columns responsive behavior

To declare a different column behavior for a breakpoint you can use specific CSS Classes.

- `gl-grid__col-{x}@from-{y}` : **optionnal** - allow you to define a different column width from the breakpoint `{y}` and bigger
  - `{y}` match with the breakpoint name mentionned [here](/responsive)

##### Example of responsive behavior

In the example below, my component will have a 4 column's width by default, and from screen width `l` to infinite, it will have a 6 column's width using `gl-grid__col-6@from-l`

```html
<div class="gl-grid gl-grid--12">
  <div class="gl-grid__col-6 gl-grid__col--4@from-l">
    <!-- your component goes here -->
    I will use 6 columns under screen size l and 4 columns from size l
  </div>
</div>
```
