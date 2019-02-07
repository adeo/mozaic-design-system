---
title: 'SCSS'
order: 1
---

# Font-face mixin:

Params :

- `$weight` : 'light', 'regular', 'semi-bold'
- `$italic` : default : null, option: 'italic'

```scss
@import 'settings-tools/_all-settings';

// semi-bold
@include font-face('semi-bold');
// semi-bold italic
@include font-face('semi-bold', 'italic');
```

# Font files :

You can find the font-face into the `[registry path]/statics/fonts/` directory.

## Font-faces formats :

font-faces are imported with `woff` and `woff2` format.
