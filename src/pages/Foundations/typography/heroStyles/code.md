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

<pattern path="src/patterns/--typography/typographyHero-variations"></pattern>

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
