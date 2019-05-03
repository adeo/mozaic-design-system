---
title: 'Code'
order: 2
---

## Base text classes

Base typography classes **does not apply any external margins nor font-colors**, because they are contextuals. This mean that **color and margins will be either inherited or applied through new classes** set on your dom elements, depending on their position and usage.

You can import all base typography scss files by importing the `_a.all-base-typography` sub-bundle from the `atoms` directory

```scss
@import 'settings-tools/_all-settings';
@import 'atoms/_a.all-base-typography';
```

## Body classes

> Each body atom come with **a modifier to set the font-weight to 'semi bold'** and **a modifier to use an alternative line-height**.
> **Body classes font-size do not vary depending on the viewport**, because thoses font-sizes are optimized for any viewport.

#### Import

```scss
@import 'settings-tools/_all-settings';
@import 'atoms/_a.bodys';
```

#### usage

```html
<p class="ga-body-m">Lorem ipsum...</p>
<p class="ga-body-m ga-body-m--semi-bold">Lorem ipsum...</p>
<p class="ga-body-m ga-body-m--line-height-m">Lorem ipsum...</p>
<p class="ga-body-m ga-body-m--line-height-m ga-body-m--semi-bold">
  Lorem ipsum...
</p>
```

| Class names                            | font-size (any viewport) | line-height          | weight    |
| -------------------------------------- | ------------------------ | -------------------- | --------- |
| **body L**                             |
| `.ga-body-l`                           | `06` : 18px (1.125mu)    | `L` : 28px (1.175mu) | regular   |
| `.ga-body-l .ga-body-l--semi-bold`     | `06` : 18px (1.125mu)    | `L` : 28px (1.175mu) | semi bold |
| `.ga-body-l .ga-body-l--line-height-m` | `06` : 18px (1.125mu)    | `M` : 24px (1.5mu)   | regular   |
| **body M**                             |
| `.ga-body-m`                           | `05` : 16px (1mu)        | `L` : 24px (1.5mu)   | regular   |
| `.ga-body-m .ga-body-m--semi-bold`     | `05` : 16px (1mu)        | `L` : 24px (1.5mu)   | semi-bold |
| `.ga-body-m .ga-body-m--line-height-m` | `05` : 16px (1mu)        | `M` : 22px (1.375mu) | regular   |
| **body S**                             |
| `.ga-body-s`                           | `04` : 14px (0.875mu)    | `L` : 22px (1.375mu) | regular   |
| `.ga-body-s .ga-body-s--semi-bold`     | `04` : 14px (0.875mu)    | `L` : 22px (1.375mu) | semi-bold |
| `.ga-body-s .ga-body-s--line-height-m` | `04` : 14px (0.875mu)    | `M` : 18px (1.125mu) | regular   |
