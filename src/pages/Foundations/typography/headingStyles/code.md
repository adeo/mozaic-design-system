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

## Heading classes

> Default lines-heights for the headings familly are set to `M`, witch correspond to a ratio close to 1.35.
> Each heading atom comes with **a modifier to set the font-weight to 'semi bold'** and **a modifier to use an alternative `S` line-height**.
> Headings atoms sizes change at the 'M' viewport, witch correspond to tablet sizes.

#### Import Headings atoms

```scss
@import 'settings-tools/_all-settings';
@import 'atoms/_a.headings';
```

#### usage

```html
<p class="ga-heading-m">Lorem ipsum...</p>
<p class="ga-heading-m ga-heading-m--semi-bold">Lorem ipsum...</p>
<p class="ga-heading-m ga-heading-m--line-height-s">Lorem ipsum...</p>
<p class="ga-heading-m ga-heading-m--line-height-s ga-heading-m--semi-bold">
  Lorem ipsum...
</p>
```

<pattern path="src/pages/Foundations/Typography/headingStyles/--headingStyles/typographyHeading-variations"></pattern>

**Viewport < M (576px) :**

| Class names                                  | font-size              | line-height         | weight    |
| -------------------------------------------- | ---------------------- | ------------------- | --------- |
| **heading L**                                |
| `.ga-heading-l`                              | `09` : 34px (2.125mu ) | `M` : 44px (2.75mu) | regular   |
| `.ga-heading-l .ga-heading-l--semi-bold`     | `09` : 34px (2.125mu ) | `M` : 44px (2.75mu) | semi bold |
| `.ga-heading-l .ga-heading-l--line-height-s` | `09` : 34px (2.125mu ) | `S` : 40px (2.5mu)  | regular   |
| **heading M**                                |
| `.ga-heading-m`                              | `08` : 28px (1.75mu )  | `M` : 36px (2.25mu) | regular   |
| `.ga-heading-m .ga-heading-m--semi-bold`     | `08` : 28px (1.75mu )  | `M` : 36px (2.25mu) | semi bold |
| `.ga-heading-m .ga-heading-m--line-height-s` | `08` : 28px (1.75mu )  | `S` : 32px (2mu)    | regular   |
| **heading S**                                |
| `.ga-heading-s`                              | `07` : 23px (1.4375mu) | `M` : 32px (2mu)    | regular   |
| `.ga-heading-s .ga-heading-s--semi-bold`     | `07` : 23px (1.4375mu) | `M` : 32px (2mu)    | semi bold |
| `.ga-heading-s .ga-heading-s--line-height-s` | `07` : 23px (1.4375mu) | `S` : 28px (1.75mu) | regular   |

<br>

**Viewport >= M (576px) :**

| Class names                                  | font-size              | line-height         | weight    |
| -------------------------------------------- | ---------------------- | ------------------- | --------- |
| **heading L**                                |
| `.ga-heading-l`                              | `10` : 41px (2.5625mu) | `M` : 44px (2.75mu) | regular   |
| `.ga-heading-l .ga-heading-l--semi-bold`     | `10` : 41px (2.5625mu) | `M` : 44px (2.75mu) | semi bold |
| `.ga-heading-l .ga-heading-l--line-height-s` | `10` : 41px (2.5625mu) | `S` : 40px (2.5mu)  | regular   |
| **heading M**                                |
| `.ga-heading-m`                              | `09` : 34px (2.125mu ) | `M` : 44px (2.75mu) | regular   |
| `.ga-heading-m .ga-heading-m--semi-bold`     | `09` : 34px (2.125mu ) | `M` : 44px (2.75mu) | semi bold |
| `.ga-heading-m .ga-heading-m--line-height-s` | `09` : 34px (2.125mu ) | `S` : 40px (2.5mu)  | regular   |
| **heading S**                                |
| `.ga-heading-s`                              | `08` : 28px (1.75mu )  | `M` : 36px (2.25mu) | regular   |
| `.ga-heading-s .ga-heading-s--semi-bold`     | `08` : 28px (1.75mu )  | `M` : 36px (2.25mu) | semi bold |
| `.ga-heading-s .ga-heading-s--line-height-s` | `08` : 28px (1.75mu )  | `S` : 32px (2mu)    | regular   |
