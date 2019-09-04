---
title: 'Code'
order: 2
---

## Base text classes

Base typography classes **does not apply any external margins nor font-colors**, because they are contextuals. This mean that **color and margins will be either inherited or applied through new classes** set on your dom elements, depending on their position and usage.

You can import all base typography scss files by importing the `_a.all-base-typography` sub-bundle from the `atoms` directory

```css
@import 'settings-tools/_all-settings';
@import 'settings-tools/_s.fonts-family.scss';
@import 'typography/_t.all-base-typography';
```

## Body classes

> Each body atom come with **a modifier to set the font-weight to 'semi bold'** and **a modifier to use an alternative line-height**.
> **Body classes font-size do not vary depending on the viewport**, because thoses font-sizes are optimized for any viewport.

#### Import

```css
@import 'settings-tools/_all-settings';
@import 'settings-tools/_s.fonts-family.scss';
@import 'typography/_t.bodys';
```

#### usage

```html
<p class="mt-body-m">Lorem ipsum...</p>
<p class="mt-body-m mt-body-m--semi-bold">Lorem ipsum...</p>
<p class="mt-body-m mt-body-m--line-height-m">Lorem ipsum...</p>
<p class="mt-body-m mt-body-m--line-height-m mt-body-m--semi-bold">
  Lorem ipsum...
</p>
```

<preview path="src/pages/Foundations/Typography/BodyStyles/previews/typographyBody-variations"></pattern>

| Class names                            | font-size (any viewport) | line-height          | weight    |
| -------------------------------------- | ------------------------ | -------------------- | --------- |
| **body L**                             |
| `.mt-body-l`                           | `06` : 18px (1.125mu)    | `L` : 28px (1.175mu) | regular   |
| `.mt-body-l .mt-body-l--semi-bold`     | `06` : 18px (1.125mu)    | `L` : 28px (1.175mu) | semi bold |
| `.mt-body-l .mt-body-l--line-height-m` | `06` : 18px (1.125mu)    | `M` : 24px (1.5mu)   | regular   |
| **body M**                             |
| `.mt-body-m`                           | `05` : 16px (1mu)        | `L` : 24px (1.5mu)   | regular   |
| `.mt-body-m .mt-body-m--semi-bold`     | `05` : 16px (1mu)        | `L` : 24px (1.5mu)   | semi-bold |
| `.mt-body-m .mt-body-m--line-height-m` | `05` : 16px (1mu)        | `M` : 22px (1.375mu) | regular   |
| **body S**                             |
| `.mt-body-s`                           | `04` : 14px (0.875mu)    | `L` : 22px (1.375mu) | regular   |
| `.mt-body-s .mt-body-s--semi-bold`     | `04` : 14px (0.875mu)    | `L` : 22px (1.375mu) | semi-bold |
| `.mt-body-s .mt-body-s--line-height-m` | `04` : 14px (0.875mu)    | `M` : 18px (1.125mu) | regular   |
