---
title: 'Link'
order: 1
---

> A link is a clickable component, mainly used for the internal or external navigation actions or to show elements like an additional content.
> Please use a button for major actions.

## Variations

### Six color schemes for each type of action

You can use **primary**, **Light**, **Dark**, **Neutral**, & **danger** color scheme depending of the type of action the link trigger.
There is also an alternative primary color scheme, only used for Campus : **primary-campus**.

<preview path="src/pages/Components/Links/previews/link-styles" nude=true></preview>

<br>

| Color scheme   | Usage                                                                                   |
| -------------- | --------------------------------------------------------------------------------------- |
| Primary        | For main actions on the page or engaging actions                                        |
| Light          | Alternative for main link when the background is not light                              |
| Dark           | For secondary actions like show or hide data                                            |
| Neutral        | For minor actions on the page                                                           |
| Danger         | For links who the following actions is irrevocable, like deleting a product in a basket |
| Primary-Campus | For specific actions dedicated to Campus                                                |

### Two types of links.

#### The inline link :

Use the inline links inside paragraph. By default, the links inherit the style of their context, and their appearance is depending on the type of action required from the user, or the context.

#### The single link :

Use single links independently of a paragraph or content, to mark an action . There is **2 sizes**, Small (14px) or Medium (16px).

<preview path="src/pages/Components/Links/previews/link-sizes" nude=true></preview>

### A link width can either fit its content or its container

<preview path="src/pages/Components/Links/previews/link-widths" nude=true></preview>

<br>

### Displaying links with icons

In the link component, you can also add icons :
_Link icons are only used in `16px` regardless of the link size_

<preview path="src/pages/Components/Links/previews/link-icon" nude=true></preview>

## Do's and don'ts

<hint type="dont" title="Never use the link component in a paragraph, use only native link like this">
    <preview path="src/pages/Components/Links/previews/link-dont" nude=true ></preview>
</hint>
<hintitem>
  Always use the <b>16px icon</b> with the link components.<br>
</hintitem>
