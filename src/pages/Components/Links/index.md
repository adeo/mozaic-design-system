---
title: 'Links'
order: 1
---

> A link is a component used exclusively to navigate to internal or external webpages or to anchors in the current page.

Please use a [button](/Components/Buttons/) for any other action.

## Link Colors

By default, all the links are black `$color-grey-900` on light backgrounds and white `$color-grey-000` on dark backgrounds.

You should consider using the default links before thinking to any other color option, but occasionally, you can override the color depending on the context, for example on a dark background, or a link in an error box.

**Put a preview here**

### Contextual links

Links, while generally are dark by default, have three contextual variations that you can use occasionally depending on the need.

<preview path="src/pages/Components/Links/previews/link-styles" nude=true></preview>

<br>

| Color scheme    | Usage                             |
| --------------- | --------------------------------- |
| Primary         | Highlight important link          |
| Primary--campus | Highlight specific link to Campus |
| Danger          | Highlight link to error content   |

## There are two main types of links

### The inline link

Inline links are links contained into paragraphs of text. By default, inline links inherit the current size.

### The navigation or single links

Single links are interface elements used to navigate between pages like :

- previous / next
- paginations
- text anchors
- breadcrumbs
- etc

<preview path="src/pages/Components/Links/previews/link-sizes" nude=true></preview>

**In this case we use two sizes :**

| Size                   | Value               |
| ---------------------- | ------------------- |
| **small**              | size.font.04 (14px) |
| **medium** _(default)_ | size.font.05 (16px) |

### Displaying links with icons

In the link component, you can also add icons :
_Link icons are only used in `16px` regardless of the link size_

<preview path="src/pages/Components/Links/previews/link-icon" nude=true></preview>

## Do's and don'ts

<hintitem>
    Links must be underlined, and react to hover and click.
</hintitem>

<hintitem>
    Use links for navigation only.
</hintitem>

<hintitem>
    Always use the <b>16px icon</b> with the links.<br>
</hintitem>

<hint type="do" title="Use inline links inside a paragraph, and navigation links outside.">
    <preview path="src/pages/Components/Links/previews/link-dont" nude=true ></preview>
</hint>

<hintitem dont="true">
    Don't use links for the others actions like showing an additional content. Please use a button instead.

</hintitem>

<hintitem dont="true">
    Never use the single link inside a paragraph.
</hintitem>
