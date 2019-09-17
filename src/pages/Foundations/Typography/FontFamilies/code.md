---
title: 'Code'
order: 1
---

# Mixins :

## Import-font-families mixin:

**This mixin include all LeroyMerlin fonts** :

- `LeroyMerlinSans-Web-Light` : 'light', 'normal', 'font-weight: 300'
- `LeroyMerlinSans-Web-Regular` : 'regular', 'normal', 'font-weight: 400'
- `LeroyMerlinSans-Web-SemiBold` : 'semi-bold', 'normal', 'font-weight: 600'
- `LeroyMerlinSans-Web-LightItalic` : 'light', 'italic', 'font-weight: 300'
- `LeroyMerlinSans-Web-Italic` : 'regular', 'italic', 'font-weight: 400'
- `LeroyMerlinSans-Web-SemiBoldItalic` : 'semi-bold', 'italic', 'font-weight: 600'

**font-faces are imported with `woff` and `woff2` format**.
<br >

It is strongly **recommended to import this mixin**, but if you are faced with a particular case, you can choose to implement another font family. 
This include must be under the import of all parameters

```css
@import 'settings-tools/_all-settings';

// import font families
@include import-font-families();
```

## Font-face mixin:
Params :

- `$weight` : 'light', 'regular', 'semi-bold'
- `$italic` : default : null, option: 'italic'

This mixin allows **to apply different font properties on an element** as in the following example :

```css
.example {
    
    &_my-title {
        // semi-bold
        @include set-font-face('semi-bold');
    }
    
    &_my-paragraph {
        // semi-bold italic
        @include set-font-face('semi-bold', 'italic');
    }
}
```

# Font files :

You can find the font-face into the `[registry path]/statics/fonts/` directory.

## Overriding default path

You can override the path using `$local-config : ()` map and define a new path depending on your project files.

```scss
$local-config: (
    font-path : '/custom-path'
)
```

Declare the local-config map in a file imported before `_all-settings.scss`, like `user.config.scss` created in your project.

