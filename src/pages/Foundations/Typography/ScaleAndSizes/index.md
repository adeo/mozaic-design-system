---
title: 'Font scales'
order: 2
---

# General fonts sizes and their usage :

<preview path="src/pages/Foundations/Typography/ScaleAndSizes/previews/font-scale"></pattern>

| Id     | Value           | Mobile usage              | Desktop usage             | Token          |
| ------ | --------------- | ------------------------- | ------------------------- | -------------- |
| **01** | 11px (0.6815mu) | Legal contents / captions | Legal contents / captions | `size.font.01` |
| **02** | 12px (0.75mu)   | Legal contents / captions | Legal contents / captions | `size.font.02` |
| **03** | 13px (0.8125mu) | --                        | --                        | `size.font.03` |
| **04** | 14px (0.875mu)  | Body small                | Body small                | `size.font.04` |
| **05** | 16px (1mu)      | Body medium               | Body medium               | `size.font.05` |
| **06** | 18px (1.125mu)  | Body large                | Body large                | `size.font.06` |
| **07** | 23px (1.4375mu) | Heading small             | --                        | `size.font.07` |
| **08** | 28px (1.75mu)   | Heading medium            | Heading small             | `size.font.08` |
| **09** | 34px (2.125mu)  | Heading large / Hero      | Heading medium            | `size.font.09` |
| **10** | 41px (2.4625mu) | --                        | Heading large / Hero      | `size.font.10` |
| **11** | 49px (3.0625mu) | --                        | Hero                      | `size.font.11` |
| **12** | 59px (3.6875mu) | --                        | Hero                      | `size.font.12` |

<br>

# Line heights :

Line-heights are calculated **for each available font-size** to match a magic-unit subdivision, in order to snap to the vertical grid. Line-heights for font-sizes under 18px uses 1/8 mu subdivision and lines-height for font-sizes greater than 18px use 1/4 mu\* subdivisions.

###The lines heights are declined in 4 values for each font sizes :

- **XS** : closest MU\* division to **1x** font-size
- **S** : closest MU\* division to **1.15x** font-size
- **M** : closest MU\* division to **1.35x** font-size
- **L** : closest MU\* division to **1.5x** font-size

You can use any of the previous line-height depending on your needs, but consider the following advices :

<br>

<hintitem>
    <b>Use the line-height L for multiline text or long line length texts</b><br>
    WCAG Accessibility guidelines states that 1.5 time the font size is the best ratio for readability.
</hintitem>
<hintitem>
    <b>Use line-height S and M for larger fonts sizes or very short line length</b><br>
    Like technical informations with few lines or titles.
</hintitem>
<hintitem>
    <b>Use line-height XS for monoline text in conjonction to margin and padding</b><br>
    Mostly for layout construction purpose (alignement, spacing, container sizing purpose etc..) like a block header.
</hintitem>

<br>

<preview path="src/pages/Foundations/Typography/ScaleAndSizes/previews/font-line-heights"></pattern>

| id     | font-size value | line-height XS | line-height S  | line-height M  | line-height L  | tokens                    |
| ------ | --------------- | -------------- | -------------- | -------------- | -------------- | ------------------------- |
| **01** | 11px (0.6815mu) | 12px (0.75mu)  | 12px (0.75mu)  | 14px (0.875mu) | 16px (1mu)     | `size.line.01.(xs,s,m,l)` |
| **02** | 12px (0.75mu )  | 12px (0.75mu)  | 14px (0.875mu) | 16px (1mu)     | 18px (1.125mu) | `size.line.02.(xs,s,m,l)` |
| **03** | 13px (0.8125mu) | 14px (0.875mu) | 16px (1mu)     | 18px (1.125mu) | 20px (1.25mu)  | `size.line.03.(xs,s,m,l)` |
| **04** | 14px (0.875mu ) | 14px (0.875mu) | 16px (1mu)     | 18px (1.125mu) | 22px (1.375mu) | `size.line.04.(xs,s,m,l)` |
| **05** | 16px (1mu )     | 16px (1mu)     | 18px (1.125mu) | 22px (1.375mu) | 24px (1.5mu)   | `size.line.05.(xs,s,m,l)` |
| **06** | 18px (1.125mu ) | 18px (1.125mu) | 22px (1.375mu) | 24px (1.5mu)   | 28px (1.75mu)  | `size.line.06.(xs,s,m,l)` |
| **07** | 23px (1.4375mu) | 24px (1.5mu)   | 28px (1.75mu)  | 32px (2mu)     | 36px (2.25mu)  | `size.line.07.(xs,s,m,l)` |
| **08** | 28px (1.75mu )  | 28px (1.75mu)  | 32px (2mu)     | 36px (2.25mu)  | 44px (2.75mu)  | `size.line.08.(xs,s,m,l)` |
| **09** | 34px (2.125mu ) | 36px (2.25mu)  | 40px (2.5mu)   | 44px (2.75mu)  | 52px (3.25mu)  | `size.line.09.(xs,s,m,l)` |
| **10** | 41px (2.5625mu) | 40px (2.5mu)   | 48px (3mu)     | 56px (3.5mu)   | 60px (3.75mu)  | `size.line.10.(xs,s,m,l)` |
| **11** | 49px (3.0625mu) | 48px (3mu)     | 56px (3.5mu)   | 68px (4.25mu)  | 72px (4.5mu)   | `size.line.11.(xs,s,m,l)` |
| **12** | 59px (3.6875mu) | 60px (3.75mu)  | 68px (4.25mu)  | 80px (5mu)     | (5.5mu) 88px   | `size.line.12.(xs,s,m,l)` |

<br>

\*mu : [magic unit](/Foundations/magicUnit/)
