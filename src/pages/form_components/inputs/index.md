---
title: 'Input'
order: 1
---

# Create an input

Input atoms used the following CSS Class `ga-input`. These CSS Class is used for specific input type :
* `text`
* `email`
* `date`
* `password`
* `number`
* `tel`
* `number`
* `search`

## Mouse events

Mouse events `hover` and `focus` styles are available using native implementation.

```scss
.ga-input {
    
    &:hover {
        // Some style
    }

    &:focus {
        // Some style
    }
}
```

<pattern path="src/patterns/--input/input"></pattern>


## Manage validation state

To indicate the validation state of your input like valid or invalid. You can use two CSS Classes :
* `is-valid`
* `is-invalid`

You have to apply those classes on the input tag, using some javascript controls on blur, on key-up, on submit. It's as you want.

<pattern path="src/patterns/--input/input-state"></pattern>