---
title: 'Links'
order: 1
---

> A link is a component used exclusively to navigate to internal or external webpages or to anchors in the current page.

Please use a [button](/Components/Buttons/) for any other action.

## There is two main types of links.

### The inline link :

Inline links are links contained into paragraphs of text. By default, inline links inherit the current text color and size.

You can override the color depending on the context, for example on a dark background, or a link in an error box :

**preview error and dark**

### The navigation links :

They are interface elements used to navigate between pages

examples :

- previous / next
- paginations
- text anchors
- breadcrumbs
  etc

in this case we use two sizes

| size                   | value               |
| ---------------------- | ------------------- |
| **small**              | size.font.04 (14px) |
| **medium** _(default)_ | size.font.05 (16px) |

<preview path="src/pages/Components/Links/previews/link-sizes" nude=true></preview>

#### Links colors

Links, while generaly inheriting color from the context, have two common variations that you should consider using before thinking to any other color option.

<preview path="src/pages/Components/Links/previews/link-styles" nude=true></preview>

<br>

| Color scheme | Usage                                |
| ------------ | ------------------------------------ |
| Primary      | To higlight important link           |
| Neutral      | For navigation purpose (prev / next) |

### Displaying links with icons

In the link component, you can also add icons :
_Link icons are only used in `16px` regardless of the link size_

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
