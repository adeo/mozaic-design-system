---
title: 'Code'
order: 2
---

## Import

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.notification';
```

## Basic usage

Wrap a title (it may be any level of heading: `h1`, `h2`, `h3` and so on, depending on the context or SEO requirements), `p` and a `a` or `button` tags in a `div` and apply the `mc-notification` class:

```html
  <div class="mc-notification">
    <div class="mc-notification__content">
      <h3 class="mc-notification__title">Information notification</h3>
      <p class="mc-notification__message">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.
      </p>
      <a class="mc-notification__link mc-link" href="#">Link</a>
    </div>
  </div>
```

<preview path="src/pages/Components/Notification/previews/notification"></preview>

## Types

Available notification types:
 - information (default): `mc-notification--information`
 - success: `mc-notification--success`
 - warning: `mc-notification--warning`
 - danger: `mc-notification--danger`

<preview path="src/pages/Components/Notification/previews/notification-types"></preview>

## Variations

Using `mc-notification-closable` class you have a closable notification:

<preview path="src/pages/Components/Notification/previews/notification-variations"></preview>

## Accessibility and semantic

<hintitem>
  Don't forget to set <code>role="alert"</code> in the notification when It's used to alert about a result of user action
</hintitem>

```html
  <div class="mc-notification" role="alert">
    <div class="mc-notification__content">
      ...
    </div>
  </div>
```

<hintitem>
   Always use a title attribute on the close button <code>title="Close"</code>
</hintitem>

```html
<div class="example">
  <div class="mc-notification mc-notification-closable">
    <div class="mc-notification__content">
      ...
    </div>
    <button type="button" class="mc-notification-closable__close" title="Close"></button>
  </div>
</div>
```
