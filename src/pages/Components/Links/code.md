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

### Available color themes

- **dark (default)**: `mc-link`
- **light**: `mc-link--light`
- **primary**: `mc-link--primary`
- **primary-campus**: `mc-link--primary-campus`
- **danger**: `mc-link--danger`

<preview path="src/pages/Components/Links/previews/link-styles"></preview>

### Available sizes

You can use one of the 2 available sizes :

- **small** : `mc-link--s`
- **medium** : `mc-link--m`

```html
<a href="#" class="mc-link mc-link--s">Small link navigation link</a>
<a href="#" class="mc-link mc-link--m">Medium link navigation link</a>
```

<preview path="src/pages/Components/Links/previews/link-sizes"></pattern>

### Icons possibilities

#### Positions

You can add an icon into a link in different ways :

- **On the left**

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

| Default             | `mc-link--s`          | `mc-link--m`           |
| ------------------- | --------------------- | ---------------------- |
| From breakpoint m   | `mc-link--s@from-m`   | `mc-link--m@from-m`    |
| From breakpoint l   | `mc-link--s@from-l`   | `mc-link-- m@from-l`   |
| From breakpoint xl  | `mc-link--s@from-xl`  | `mc-link-- m@from-xl`  |
| From breakpoint xxl | `mc-link--s@from-xxl` | `mc-link-- m@from-xxl` |

## Behaviors

### Standard input states :

- `hover`
- `active`
- `visited`
- `disabled`

<preview path="src/pages/Components/Links/previews/link-state"></preview>

## Mixins

### The link mixin

If you need to create a new link theme you need to define a new SASS map, see below :

```css
$my-map: (
  'color-theme': {'base': green,
  'hover': white,
  'visited': purple,
  'active': blue}
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

.mc-link--my-custom-theme:visited,
.mc-link--my-custom-theme.is-visited {
  border-color: purple;
}

.mc-link--my-custom-theme:active,
.mc-link--my-custom-theme.is-active {
  color: blue;
}
```
