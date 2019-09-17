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

Wrap a `h3`, `p` and a `a` or `button` tags in a `div` and apply the `mc-notification` class:

```html
  <div class="mc-notification">
    <h3>Notification title</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    </p>
    <a href="#">Link</a>
  </div>
```

<preview path="src/pages/Components/Notification/previews/notification"></preview>

## States

Available notification states:
 - information (default): `mc-notification--information`
 - success: `mc-notification--success`
 - warning: `mc-notification--warning`
 - danger: `mc-notification--danger`

<preview path="src/pages/Components/Notification/previews/notification-states"></preview>

## Variations

Using `mc-notification-closable` class you have a closable notification:

<preview path="src/pages/Components/Notification/previews/notification-variations"></preview>

## Accessibility and semantic

<hintitem>
  Don't forget to set <code>role="alert"</code> in the notification when It's used to alert about a result of user's action
</hintitem>
<hintitem>
   Always use a title attribute on the close button <code>title="Close"</code>
</hintitem>