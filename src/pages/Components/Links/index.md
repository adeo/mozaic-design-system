---
title: 'Links'
order: 1
---

> A link is a component used exclusively to navigate to internal or external webpages or to anchors in the current page.

Please use a [button](/Components/Buttons/) for any other action.

## There is two main types of links.

### The inline link :

Inline links are links contained into paragraphs of text. By default, inline links inherit the current text styles except for color that will always be dark by default.
<preview path="src/pages/Components/Links/previews/link-inline-default" nude=true></preview>

You can override the color depending on the context, for example on a dark background, or a link in an error box :

<preview path="src/pages/Components/Links/previews/link-error-and-light" nude=true></preview>

### The navigation links :

They are interface elements used to navigate between pages

examples :

- previous / next
- paginations
- text anchors
- breadcrumbs
  etc

#### In this case we use two sizes

| size       | value               |
| ---------- | ------------------- |
| **small**  | size.font.04 (14px) |
| **medium** | size.font.05 (16px) |

<preview path="src/pages/Components/Links/previews/link-sizes" nude=true></preview>

#### Links colors

Links, while generaly inheriting styles from the context, have four common variations that you should consider using before thinking to any other color option.

<preview path="src/pages/Components/Links/previews/link-styles" nude=true></preview>

<br>

| Color scheme   | Usage                                           |
| -------------- | ----------------------------------------------- |
| Default        | For navigation purpose (prev / next)            |
| Light          | For link with colored background                |
| Primary        | To higlight important link                      |
| Primary-campus | To higlight important link for campus templates |
| Danger         | for error link                                  |

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
