---
title: 'Code'
order: 2
---

## Import

```scss
@import '../node_modules/garden-css/styles/settings-tools/_all-settings';
@import '../node_modules/garden-css/styles/atoms/_a.button';
```

## Basic usage

To create a solid button apply the `ga-button` class :

```html
<a href="#" class="ga-button">Label</a>
```

<<<<<<< HEAD
<pattern path="src/patterns/--button/basic"></pattern>

## Variations

### Available themes

=======
<pattern path="src/pages/Components/Atoms/buttons/--button/intro"></pattern>

> > > > > > > feat(styleguide/patterns): clean patterns and allow local usage

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
<a href="#" class="ga-button ga-button--primary-campus">Button</a>
<a href="#" class="ga-button ga-button--bordered-primary-campus">Button</a>
```

<pattern path="src/pages/Components/Atoms/buttons/--button/button-styles"></pattern>

### Available sizes

You can use one of the 3 available sizes :

- **small** : `--small`
- **medium** : this is the default style so you don't need to add a modifier class
- **large** : `--large`;

```html
<a href="#" class="ga-button ga-button--small">Button</a>
<a href="#" class="ga-button">Button</a>
<a href="#" class="ga-button ga-button--large">Button</a>
```

<pattern path="src/pages/Components/Atoms/buttons/--button/button-sizes"></pattern>

#### Responsive classes

| Default             | `ga-button--small`          | `ga-button--medium`          | `ga-button--large`          |
| ------------------- | --------------------------- | ---------------------------- | --------------------------- |
| From breakpoint m   | `ga-button--small@from-m`   | `ga-button--medium@from-m`   | `ga-button--large@from-m`   |
| From breakpoint l   | `ga-button--small@from-l`   | `ga-button--medium@from-l`   | `ga-button--large@from-l`   |
| From breakpoint xl  | `ga-button--small@from-xl`  | `ga-button--medium@from-xl`  | `ga-button--large@from-xl`  |
| From breakpoint xxl | `ga-button--small@from-xxl` | `ga-button--medium@from-xxl` | `ga-button--large@from-xxl` |

### Widths modifiers

To manage display of your button, you have 2 availables classes :

- `ga-button--fit` : Applied by default
- `ga-button--full`

```html
<a href="#" class="ga-button ga-button--full">My button</a>
```

#### Responsive classes

| Default             | `ga-button--full`          | `ga-button--fit`          |
| ------------------- | -------------------------- | ------------------------- |
| From breakpoint m   | `ga-button--full@from-m`   | `ga-button--fit@from-m`   |
| From breakpoint l   | `ga-button--full@from-l`   | `ga-button--fit@from-l`   |
| From breakpoint xl  | `ga-button--full@from-xl`  | `ga-button--fit@from-xl`  |
| From breakpoint xxl | `ga-button--full@from-xxl` | `ga-button--fit@from-xxl` |

## Behaviors

Standard button states :

- `hover`
- `active`
- `focus`
- `disabled`

<pattern path="src/pages/Components/Atoms/buttons/--button/button-state"></pattern>

## Available widths

- `ga-button--fit` : Applied by default / fit the button's content size
- `ga-button--full` : Fill the available width

```html
<a href="#" class="ga-button ga-button--full">My button</a>
```

| Default             | `ga-button--full`          | `ga-button--fit`          |
| ------------------- | -------------------------- | ------------------------- |
| From breakpoint m   | `ga-button--full@from-m`   | `ga-button--fit@from-m`   |
| From breakpoint l   | `ga-button--full@from-l`   | `ga-button--fit@from-l`   |
| From breakpoint xl  | `ga-button--full@from-xl`  | `ga-button--fit@from-xl`  |
| From breakpoint xxl | `ga-button--full@from-xxl` | `ga-button--fit@from-xxl` |
