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

<br>

<pattern path="src/patterns/--typography/typographyBody"></pattern>

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

<br>

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

<pattern path="src/patterns/--typography/typographyHeadings"></pattern>

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

## Hero classes

> Default lines-height for Hero is set to `M`, witch correspond to a ratio close to 1.35.
> Hero classe come with **a modifier to set the font-weight to 'semi bold'** and **a modifier to use an alternative `S` line-height**.
> Hero atoms have multiple changes of font-size across viewport.

#### Import Hero atom

```scss
@import 'settings-tools/_all-settings';
@import 'atoms/_a.heros';
```

#### usage

```html
<p class="ga-hero">Lorem ipsum...</p>
<p class="ga-hero ga-hero--semi-bold">Lorem ipsum...</p>
<p class="ga-hero ga-hero--line-height-s">Lorem ipsum...</p>
<p class="ga-hero ga-hero--line-height-s ga-hero--semi-bold">
  Lorem ipsum...
</p>
```

<pattern path="src/patterns/--typography/typographyHero"></pattern>

**Viewport < M (576px) :**

| Class names                        | font-size              | line-height         | weight    |
| ---------------------------------- | ---------------------- | ------------------- | --------- |
| `.ga-hero`                         | `09` : 34px (2.125mu ) | `M` : 44px (2.75mu) | regular   |
| `.ga-hero .ga-hero--semi-bold`     | `09` : 34px (2.125mu ) | `M` : 44px (2.75mu) | semi bold |
| `.ga-hero .ga-hero--line-height-s` | `09` : 34px (2.125mu ) | `S` : 40px (2.5mu)  | regular   |

<br>

**Viewport >= M (576px) :**

| Class names                        | font-size              | line-height        | weight    |
| ---------------------------------- | ---------------------- | ------------------ | --------- |
| `.ga-hero`                         | `10` : 41px (2.5625mu) | `M` : 56px (3.5mu) | regular   |
| `.ga-hero .ga-hero--semi-bold`     | `10` : 41px (2.5625mu) | `M` : 56px (3.5mu) | semi bold |
| `.ga-hero .ga-hero--line-height-s` | `10` : 41px (2.5625mu) | `S` : 48px (3mu)   | regular   |

<br>

**Viewport >= L (1100px) :**

| Class names                        | font-size              | line-height         | weight    |
| ---------------------------------- | ---------------------- | ------------------- | --------- |
| `.ga-hero`                         | `11` : 49px (3.0625mu) | `M` : 68px (4.25mu) | regular   |
| `.ga-hero .ga-hero--semi-bold`     | `11` : 49px (3.0625mu) | `M` : 68px (4.25mu) | semi bold |
| `.ga-hero .ga-hero--line-height-s` | `11` : 49px (3.0625mu) | `S` : 56px (3.5mu)  | regular   |

<br>

**Viewport >= L-MEDIUM (1440px) :**

| Class names                        | font-size              | line-height         | weight    |
| ---------------------------------- | ---------------------- | ------------------- | --------- |
| `.ga-hero`                         | `12` : 59px (3.6875mu) | `M` : 80px (5mu)    | regular   |
| `.ga-hero .ga-hero--semi-bold`     | `12` : 59px (3.6875mu) | `M` : 80px (5mu)    | semi bold |
| `.ga-hero .ga-hero--line-height-s` | `12` : 59px (3.6875mu) | `S` : 68px (4.25mu) | regular   |

<br>
