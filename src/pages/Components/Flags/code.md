---
title: 'Code'
order: 2
---

## Import

Import the settings and the flag `scss` files.

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.flag';
```

## Basic usage

To create a flag you have one main class to apply `mc-flag`, and wrap the text inside the flag in a `span.mc-flag__label`. While the text without span will look mostly fine, we use it to opticaly align the characters baseline in the flag.

```html
<div class="mc-flag">
  <span class="mc-flag__label">
    Flag label
  </span>
</div>
```

<preview path="src/pages/Components/Flags/previews/flag-default"></preview>

## Variations

### Available themes

- `solid`
- `bordered`
- `solid-primary-campus`
- `bordered-primary-campus`
- `solid-dark`
- `bordered-dark`
- `solid-light`
- `bordered-light`
- `solid-danger`
- `bordered-danger`

example :

```html
<div class="mc-flag">
  <span class="mc-flag__label">
    Flag label
  </span>
</div>

<div class="mc-flag mc-flag--bordered-primary-campus">
  <span class="mc-flag__label">
    Flag bordered primary campus
  </span>
</div>
```

#### Solid

<preview path="src/pages/Components/Flags/previews/flag-solid"></preview>

#### Bordered

<preview path="src/pages/Components/Flags/previews/flag-bordered"></preview>

## Customization and mixins

### The set-flag-theme mixin

In case you need to create a new flag theme you'll need to define a new SASS map, see below :

```css
$my-map: (
  'color-theme': (
    'background': white,
    'border': blue
    'text': red
  )
);
```

Once the map of your theme is defined you can use the mixin `set-flag-theme`.

```css
.mc-flag--my-custom-theme {
  @include set-flag-theme($my-map);
}
```

Then, it will generate something like this :

```css
.mc-flag--my-custom-theme {
  color: red;
  border: 1px solid blue;
  background-color: white;
}
```