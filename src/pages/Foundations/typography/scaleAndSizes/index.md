---
title: 'Font scales'
order: 2
---

# General fonts sizes and their usage :

<pattern path="src/patterns/--font-scale/font-scale"></pattern>

| Id     |      value      | mobile usage | desktop usage | token          |
| ------ | :-------------: | ------------ | ------------- | -------------- |
| **01** | 11px / 0.6815mu | micro copy s | micro copy s  | `size.font.01` |
| **02** |  12px / 0.75mu  | micro copy m | micro copy m  | `size.font.02` |
| **03** | 13px / 0.8125mu | body s       | micro copy l  | `size.font.03` |
| **04** | 14px / 0.875mu  | body std     | body s        | `size.font.04` |
| **05** |   16px / 1mu    | body l       | body std      | `size.font.05` |
| **06** | 18px / 1.125mu  | --           | body l        | `size.font.06` |
| **07** | 22px / 1.375mu  | heading s    | --            | `size.font.07` |
| **08** | 26px / 1.625mu  | heading m    | heading s     | `size.font.08` |
| **09** | 31px / 1.9375mu | heading l    | heading m     | `size.font.09` |
| **10** | 38px / 2.375mu  | hero m       | heading l     | `size.font.10` |
| **11** |   48px / 3mu    | hero l       | hero m        | `size.font.11` |
| **11** |  59px / 3.6875  | ---          | hero l        | `size.font.12` |

<br>

# Line heights :

Line-height are calculated **for each available font-size** to match a magic-unit subdivision, in order to snap to the vertical grid.

While **it is not forbiden to use any line height you want**, we strongly recomand those in order to create this sense of vertical rythm.

###The lines heights are declined in 3 values for each font sizes :

- **S** : closest MU division to **1x** font-size
- **M** : closest MU division to **1.2x** font-size
- **L** : closest MU division to **1.5x** font-size

You can use any of the previous line-height depending on yours needs, but consider the following advices :

<br>

<hintitem>
    <b>Use the line-height L for multiline text or long line length texts</b><br>
    WCAG Accessibility guidelines states that 1.5 time the font size is the best ratio for readability.
</hintitem>
<hintitem>
    <b>Use line-height M for larger fonts sizes or short sentences</b><br>
    Like technical informations with few lines or titles.
</hintitem>
<hintitem>
    <b>Use line-height S for monoline text in conjonction to margin and padding</b><br>
    Mostly for layout construction purpose (alignement, spacing, container sizing purpose etc..) like a block header.
</hintitem>

<br>

> note that some small font-sizes do not have corresponding line-heights S

<pattern path="src/patterns/--font-line-heights/font-line-heights"></pattern>

| id     | font-size value | line-height S | line-height M | line-height L | tokens                 |
| ------ | --------------- | ------------- | ------------- | ------------- | ---------------------- |
| **01** | 11px / 0.6815mu | --            | 0.75mu / 12px | 1mu / 16px    | `size.line.01.(m,l)`   |
| **02** | 12px / 0.75mu   | 0.75mu / 12px | 1mu / 16px    | 1.25mu / 20px | `size.line.02.(s,m,l)` |
| **03** | 13px / 0.8125mu | --            | 1mu / 16px    | 1.25mu / 20px | `size.line.03.(m,l)`   |
| **04** | 14px / 0.875mu  | 1mu / 16px    | 1.25mu / 20px | 1.5mu / 24px  | `size.line.04.(s,m,l)` |
| **05** | 16px / 1mu      | 1mu / 16px    | 1.25mu / 20px | 1.5mu / 24px  | `size.line.05.(s,m,l)` |
| **06** | 18px / 1.125mu  | 1.25mu / 20px | 1.5mu / 24px  | 1.75mu / 28px | `size.line.06.(s,m,l)` |
| **07** | 22px / 1.375mu  | 1.5mu / 24px  | 1.75mu / 28px | 2mu / 32px    | `size.line.07.(s,m,l)` |
| **08** | 26px / 1.625mu  | 1.75mu / 28px | 2mu / 32px    | 2.5mu / 40px  | `size.line.08.(s,m,l)` |
| **09** | 31px / 1.9375mu | 2mu / 32px    | 2.5mu / 40px  | 3mu / 48px    | `size.line.09.(s,m,l)` |
| **10** | 38px / 2.375mu  | 2.5mu / 40px  | 3mu / 48px    | 3.5mu / 56px  | `size.line.10.(s,m,l)` |
| **11** | 48px / 3mu      | 3mu / 48px    | 3.5mu / 56px  | 4mu / 64px    | `size.line.11.(s,m,l)` |
| **12** | 59px / 3.6875   | 4mu / 64px    | 4.5mu / 72px  | 5.5mu / 88px  | `size.line.12.(s,m,l)` |
