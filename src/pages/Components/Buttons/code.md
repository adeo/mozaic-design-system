---
title: 'Code'
order: 2
---

## Import

```css
@import '../node_modules/mozaic-css/styles/settings-tools/_all-settings';
@import '../node_modules/mozaic-css/styles/components/_c.button';
```

## Basic usage

To create a solid button you have one main class to apply `mc-button`.

```html
<a href="#" class="mc-button">Label</a>
```

<preview path="src/pages/Components/Buttons/previews/basic"></pattern>

## Variations

### Available themes

- `solid`
- `bordered`
- `bordered-secondary`
- `solid-secondary`
- `solid-primary-campus`
- `bordered-primary-campus`
- `solid-danger`
- `bordered-danger`

example :

```html
<a href="#" class="mc-button mc-button--primary-campus">Button</a>
<a href="#" class="mc-button mc-button--bordered-primary-campus">Button</a>
```

<preview path="src/pages/Components/Buttons/previews/button-styles"></pattern>

### Available sizes

You can use one of the 3 available sizes :

- **small** : `--small`
- **medium** : this is the default style so you don't need to add a modifier class
- **large** : `--large`;

```html
<a href="#" class="mc-button mc-button--small">Button</a>
<a href="#" class="mc-button">Button</a>
<a href="#" class="mc-button mc-button--large">Button</a>
```

<preview path="src/pages/Components/Buttons/previews/button-sizes"></pattern>

#### Responsive classes

| Default             | `mc-button--small`          | `mc-button--medium`          | `mc-button--large`          |
| ------------------- | --------------------------- | ---------------------------- | --------------------------- |
| From breakpoint m   | `mc-button--small@from-m`   | `mc-button--medium@from-m`   | `mc-button--large@from-m`   |
| From breakpoint l   | `mc-button--small@from-l`   | `mc-button--medium@from-l`   | `mc-button--large@from-l`   |
| From breakpoint xl  | `mc-button--small@from-xl`  | `mc-button--medium@from-xl`  | `mc-button--large@from-xl`  |
| From breakpoint xxl | `mc-button--small@from-xxl` | `mc-button--medium@from-xxl` | `mc-button--large@from-xxl` |

### Widths modifiers

To manage display of your button, you have 2 availables classes :

- `mc-button--fit` : Applied by default
- `mc-button--full`

```html
<a href="#" class="mc-button mc-button--full">My button</a>
```

#### Responsive classes

| Default             | `mc-button--full`          | `mc-button--fit`          |
| ------------------- | -------------------------- | ------------------------- |
| From breakpoint m   | `mc-button--full@from-m`   | `mc-button--fit@from-m`   |
| From breakpoint l   | `mc-button--full@from-l`   | `mc-button--fit@from-l`   |
| From breakpoint xl  | `mc-button--full@from-xl`  | `mc-button--fit@from-xl`  |
| From breakpoint xxl | `mc-button--full@from-xxl` | `mc-button--fit@from-xxl` |

## Behaviors

Standard button states :

- `hover`
- `active`
- `focus`
- `disabled`

<preview path="src/pages/Components/Buttons/previews/button-state"></pattern>

## Mixins

### The button mixin

If you need to create a new button theme you need to define a new SASS map, see below :

```css
$my-map: (
  'background': red,
  'font': green,
  'border': yellow,
  'hover': (
    'background': blue,
    'font': white,
  ),
  'focus': (
    'border': purple,
  ),
  'active': (
    'background': 'blue',
  ),
);
```

Now the map of your theme is define you can use the mixin `set--button-theme`.

```css
.mc-button--my-custom-theme {
  @include set-button-theme($my-map);
}
```

Then, it will generate something like this :

```css
.mc-button--my-custom-theme {
  color: green;
  border: 2px solid yellow;
  background-color: red;
}

.mc-button--my-custom-theme:hover,
.mc-button--my-custom-theme.is-hover {
  background-color: blue;
  color: white;
}

.mc-button--my-custom-theme:hover,
.mc-button--my-custom-theme.is-hover {
  background-color: blue;
  color: white;
}

.mc-button--my-custom-theme:focus,
.mc-button--my-custom-theme.is-focus {
  border-color: purple;
}
```
