---
title: 'Links'
order: 1
---

> A link is a component used exclusively to navigate to internal or external webpages or to anchors in the current page<br> **Please use a ghost button for an other action, like showing an additional content.**.

`Ajouter le lien vers les buttons`

## Two types of links.

### The inline link :

Inline links are links contained into paragraphs of text. By default, the links inherit the style of their context, and their appearance is depending on the type of action required from the user, or the context.

By default, an inline link use the color `$color-primary-01-500`, but in depending of the context, you can override the color.

### The single link :

Use single links independently of a paragraph or content, to mark an action . There is **2 sizes**, Small 14px or Medium 16px.

<preview path="src/pages/Components/Links/previews/link-sizes" nude=true></preview>

#### Six color schemes depending of the context

You can use **primary**, **Light**, **Dark**, **Neutral**, & **danger** color scheme depending of the type of context.
There is also an alternative primary color scheme, only used for Campus : **primary-campus**.

<preview path="src/pages/Components/Links/previews/link-styles" nude=true></preview>

<br>

| Color scheme   | Usage                                                  |
| -------------- | ------------------------------------------------------ |
| Primary        | For the main links on the page                         |
| Light          | Alternative for main links when the background is dark |
| Dark           | For the secondary links on the page                    |
| Neutral        | For the minor links on the page                        |
| Danger         | For going on pages with content related to error       |
| Primary-Campus | For specific navigation dedicated to Campus            |

### Displaying links with icons

In the link component, you can also add icons :
_Link icons are only used in `16px` regardless of the link size_

<preview path="src/pages/Components/Links/previews/link-icon" nude=true></preview>

## Do's and don'ts

<hintitem>
Use links only for navigation.
</hintitem>
<hintitem>
Always use the <b>16px icon</b> with the links.<br>
</hintitem>
<hint type="do" title="Use inline links inside a paragraph, and single links outside. ">
    <preview path="src/pages/Components/Links/previews/link-dont" nude=true ></preview>
</hint>
<hintitem dont="true">
Don't use links for the others actions like showing an additional content. Please use a ghost button.
</hintitem>
<hintitem dont="true">
Never use the single link inside a paragraph.
</hintitem>
