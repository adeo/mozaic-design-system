---
title: 'Code'
order: 2
---

## Import

Import the settings and the links `scss` files.

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.links';
```

## Basic usage

To create a link you have one main class to apply `mc-link`.

```html
<a href="#" class="mc-link">Default link</a>
```

<preview path="src/pages/Components/Links/previews/link-default"></preview>

## Variations

### Available themes

- `primary` _(Default theme)_
- `light`
- `dark`
- `neutral`
- `primary-campus`
- `danger`

<preview path="src/pages/Components/Links/previews/link-styles"></preview>


### Available sizes

You can use one of the 2 available sizes :

- **small** : `--small`
- **regular** : `--regular` _this is the default style so you don't need to add a modifier class_


```html
<a href="#" class="mc-link mc-link--small">Small link</a>
<a href="#" class="mc-link">Regular link (default)</a>
```

<preview path="src/pages/Components/Links/previews/link-sizes"></pattern>

### Icons possibilities

#### Positions

You can add an icon into a link in different ways :

* **On the left**

    Using the class : `mc-link__icon--left`

    <preview path="src/pages/Components/Links/previews/link-icon-left"></preview>


* **On the right**

    Using the class : `mc-link__icon--right`

    <preview path="src/pages/Components/Links/previews/link-icon-right"></preview>

* **Icon only**

    Using the class : `mc-link__icon`
    
 <preview path="src/pages/Components/Links/previews/link-icon-only"></preview>
      
#### Icon sizes

Link icons are only used in `16px` regardless of the link size

<preview path="src/pages/Components/Links/previews/link-icon"></preview>

#### Responsive classes

| Default             | `mc-link--small`          | `mc-link--regular`          |
| ------------------- | --------------------------- | ---------------------------
| From breakpoint m   | `mc-link--small@from-m`   | `mc-link--regular@from-m`   |
| From breakpoint l   | `mc-link--small@from-l`   | `mc-link--regular@from-l`   |
| From breakpoint xl  | `mc-link--small@from-xl`  | `mc-link--regular@from-xl`  |
| From breakpoint xxl | `mc-link--small@from-xxl` | `mc-link--regular@from-xxl` |

### Widths modifiers

To manage display of your link, you have 2 availables classes :

- `mc-link--fit` : Applied by default
- `mc-link--full`

```html
<a href="#" class="mc-link mc-link--full">My link</a>
```

<preview path="src/pages/Components/Links/previews/link-widths" ></preview>

#### Responsive classes

| Default             | `mc-link--full`          | `mc-link--fit`          |
| ------------------- | -------------------------| ------------------------|
| From breakpoint m   | `mc-link--full@from-m`   | `mc-link--fit@from-m`   |
| From breakpoint l   | `mc-link--full@from-l`   | `mc-link--fit@from-l`   |
| From breakpoint xl  | `mc-link--full@from-xl`  | `mc-link--fit@from-xl`  |
| From breakpoint xxl | `mc-link--full@from-xxl` | `mc-link--fit@from-xxl` |

## Behaviors

### Standard input states :

- `hover`
- `active`
- `focus`
- `disabled`


<preview path="src/pages/Components/Links/previews/link-state"></preview>

## Mixins

### The link mixin

If you need to create a new link theme you need to define a new SASS map, see below :

```css
$my-map: (
  'font': green,
  'hover': (
    'font': white,
  ),
  'focus': (
    'font': purple,
  ),
  'active': (
    'font': 'blue',
  ),
);
```

Now the map of your theme is define you can use the mixin `set--link-theme`.

```css
.mc-link--my-custom-theme {
  @include set-link-theme($my-map);
}
```

Then, it will generate something like this :

```css
.mc-link--my-custom-theme {
  color: green;
}

.mc-link--my-custom-theme:hover,
.mc-link--my-custom-theme.is-hover {
  color: white;
}

.mc-link--my-custom-theme:focus,
.mc-link--my-custom-theme.is-focus {
  border-color: purple;
}

.mc-link--my-custom-theme:active,
.mc-link--my-custom-theme.is-active {
  color: blue;
}

```