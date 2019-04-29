---
title: 'Text classes set'
order: 1
---

> Base text classes are patterns meant to help you use consistent typographic hierarchy with the context and across responsive viewports.
> <br>
> It's mainly reserved for users wishing to focus on tasks with added value and user experience.
> <br>
> Text classes are families of several font-sizes and help create a hierarchy of contents.

#### Typography classes set is composed of :

- Body
- Heading
- Hero

#### They are defined with three factors :

- Font-size _(that may vary depending on the viewport)_
- Line-height _(that are optimised for readability and accessibility)_
- Font-weight _(regular or semi-bold)_

#### And comes with two variations for each classe :

Each body pattern comes with a modifier to set the font-weight to **'semi bold'** and a modifier to use an alternative **line-height**.

<br>

---

## Body classes

> The body patterns provide basic typographic styles for readable multilines text or paragraphs like a product description or an article.

|                                                                           |                                    |
| ------------------------------------------------------------------------- | ---------------------------------- |
| <pattern path="src/patterns/--typography/typographyBodySmall"></pattern>  | **Body Small** <br> 14px (0.875mu) |
| <pattern path="src/patterns/--typography/typographyBodyMedium"></pattern> | **Body Medium** <br> 16px (1mu)    |
| <pattern path="src/patterns/--typography/typographyBodyLarge"></pattern>  | **Body Large** <br> 18px (1.125mu) |

## Heading classes

> The heading patterns provide basic typographic styles for headings.
> <br>
> They are destined to style mono-line (or few lines) headings and help the user to quickly scan major informations of the page or section, and to create hierarchy between them.

|                                                                              |                                                                                                           |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <pattern path="src/patterns/--typography/typographyHeadingSmall"></pattern>  | **Heading Small** <br> Viewport < M (576px) : 23px (1.4375mu) <br> Viewport >= M (576px) : 28px (1.75mu)  |
| <pattern path="src/patterns/--typography/typographyHeadingMedium"></pattern> | **Heading Medium** <br> Viewport < M (576px) : 28px (1.75mu) <br> Viewport >= M (576px) : 34px (2.125mu ) |
| <pattern path="src/patterns/--typography/typographyHeadingLarge"></pattern>  | **Heading Large** <br> Viewport < M (576px) : 34px (2.125mu) <br> Viewport >= M (576px) : 41px (2.5625mu) |

### Hero classes

> The hero patterns provide typographic style for a big main page heading.
> <br>
> They are mainly used with a picture or color in the background.

<hintitem dont="true">The hero **can't be used in combination with a heading L** because they share same sizes on some viewports.</hintitem>

|                                                                     |                                                                                                                                                                                                           |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pattern path="src/patterns/--typography/typographyHero"></pattern> | **Hero** <br> Viewport < M (576px) : 34px (2.125mu ) <br> Viewport >= M (576px) : 41px (2.5625mu) <br> Viewport >= L (1100px) : 49px (3.0625mu) <br> Viewport >= L-MEDIUM (1440px) : 59px (3.6875mu) <br> |
