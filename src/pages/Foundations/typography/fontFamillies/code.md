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
@include set-font-face('semi-bold');
// semi-bold italic
@include set-font-face('semi-bold', 'italic');
```

# Font files :

You can find the font-face into the `[registry path]/statics/fonts/` directory.

## Overriding default path

You can override the path using `$font-path` variable and define a new path depending on your project files.

Declare the font-path variable in a file imported before `_all-settings.scss`, like `user.config.scss` created in your project.

## Font-faces formats :

font-faces are imported with `woff` and `woff2` format.
