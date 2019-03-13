---
title: 'SCSS - Customization'
order: 3
---

## The button mixin

If you need to create a new button theme you need to define a new SASS map, see below :

```scss
    $my-map : (
        'background' : red,
        'font' : green,
        'border' : yellow,
        'hover' : (
            'background' : blue,
            'font' : white
        ),
        'focus' : (
            'border' : purple,
        ),
        'active' : (
            'background' : 'blue'
        )
    );
```

Now the map of your theme is define you can use the mixin `set--button-theme`.

```scss
    .ga-button--my-custom-theme {
        @include set-button-theme($my-map);
    }
```

Then, it will generate something like this : 
```css

    .ga-button--my-custom-theme {
        color: green;
        border: 2px solid yellow;
        background-color: red;
    }

    .ga-button--my-custom-theme:hover, .ga-button--my-custom-theme.is-hover {
        background-color: blue;
        color: white;
    }

    .ga-button--my-custom-theme:hover, .ga-button--my-custom-theme.is-hover {
        background-color: blue;
        color: white;
    }

    .ga-button--my-custom-theme:focus, .ga-button--my-custom-theme.is-focus {
        border-color: purple;
    }
```