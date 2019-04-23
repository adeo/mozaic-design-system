---
title: 'Text'
order: 1
---

## Base Text classes

> Base text classes are **patterns** that have been meant to help you use consistent typographic hierarchy witch the context and across responsive viewports.

####

- Body : `ga-body-[size]`
- Heading : `ga-heading-[size]`
- Hero : `ga-hero`

#### And they are define with three factors :

- Font-size _(that may vary depending on the viewport)_
- Line-height _(that are optimised for readability and accessibility)_
- Font-weight _(regular or semi-bold)_

<br>

---

### Body classes

> The body patterns provide basic typographic styles for readable multilines text or paragraphs like a product description or an article.

Body classes is a family of **3 font-sizes** that create a hierarchy :

- Small
- Medium
- Large

<br>

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

### Heading classes

> The heading patterns provide basic typographic styles for headings.
> They are destined to style mono-line (or few lines) headings and help the user to quickly scan major informations of the page or section, and to create hierarchy between them.

Heading classes is a family of **3 font-sizes** that create a hierarchy :

- Small
- Medium
- Large

<br>

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

### Hero classes

> The hero patterns provide typographic style for a big main page heading.
> They are mainly used with a picture or color in the background.

The hero **can't be used in combination with a heading L** because they share same sizes on some viewports.

<br>

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
