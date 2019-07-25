---
title: 'Links'
order: 1
---

> A link is a component used exclusively to navigate to internal or external webpages or to anchors in the current page.

Please use a [button](/Components/Buttons/) for any other action.

<preview path="src/pages/Components/Links/previews/link-default" nude=true></preview>

By default, all the links are black `$color-grey-900`.

You should consider using the default link before thinking to any other color option, but occasionally, you can override the color depending on the context, for example on a dark background, or a link in an error box.

### Contextual links

Links, while generally are dark by default, have contextual variations that you can use occasionally depending on the need.

<preview path="src/pages/Components/Links/previews/contextual-links" nude=true></preview>

<br>

| Color scheme    | Usage                             |
| --------------- | --------------------------------- |
| Light           | Used when the background is dark  |
| Primary         | Highlight important link          |
| Primary--campus | Highlight specific link to Campus |
| Danger          | Highlight link to error content   |

## The inline link :

Inline links are links contained into paragraphs of text. By default, the inline links inherit the current size.

<preview path="src/pages/Components/Links/previews/link-inline-default" nude=true></preview>

## The navigation links :

Single links are interface elements used to navigate between pages like :

- previous / next
- paginations
- text anchors
- breadcrumbs
- etc

### In this case we use two sizes

| size       | value               |
| ---------- | ------------------- |
| **small**  | size.font.04 (14px) |
| **medium** | size.font.05 (16px) |

<preview path="src/pages/Components/Links/previews/link-sizes" nude=true></preview>

### Displaying links with icons

In the link component, you can also add icons :  
_Exclusively use a `16px` icon variant in links, the icon will be resized automaticaly depending on the font-size_

<preview path="src/pages/Components/Links/previews/link-icon" nude=true></preview>

## Do's and don'ts

<hintitem>
    Links should be underlined, and react to hover and click.
</hintitem>

<hintitem>
    Use links only for navigation.
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
