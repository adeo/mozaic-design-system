---
title: 'Code'
order: 1
---

## Import

To get the `get-border ()` function you need to import `_all-settings.scss`.

```css
// mandatory
@import 'settings-tools/_all-settings';
```

## Basic usage

We provide a unique function to get every border width you need.

```css
.example {
  border-width: get-border('s');
  border-width: get-border('m');
  border-width: get-border('l');
}
```

<hintitem>
  To apply a border width you should use <b>s</b>, <b>m</b> or <b>l</b>.
</hintitem>
