---
title: 'SCSS / custom grid'
order: 2
---

<hintitem>
    Classes names follow the sames conventions as for the basic usage ones
</hintitem>

### Generate a custom grid

```scss
@import 'settings-tools/_all-settings.scss';

// generate a 12 columns grid
@include generate-grid(12);
// generate a 6 columns grid
@include generate-grid(6);

// generate 12 columns
// used either by the 6 col and the 12 col grids
@include generate-grid__col(12);
```

- `generate-grid({x})` : **required**, generate grid container classes based on `{x}` value which match with number of column you want
  - `gl-grid`
  - `gl-grid--{x}`
- `generate-grid__column({x})` : **required**, generate grid columns classes included responsive classes
  - `gl-grid__col-{x}`
  - `gl-grid__col--start-{x}`

<hintitem dont=true>
    <code>generate-grid__col(x)</code> have to be <strong>used only once</strong> in your CSS file.
    <p>where <code>x</code> has to match highest columns count</p>
</hintitem>
