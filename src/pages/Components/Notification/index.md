---
title: 'Notification'
order: 9
---

> Notifications are used to bring user's attention on an information he needs to know. There are four types of notifications. A notification is usually the result of an action made by the user.

The notification pattern is made of :

- **An icon :** In addition to the frame color, it allows to specify the degree of importance.
- **A title (optional):** Concise and precise, to quickly guide the user.
- **A paragraph (optional):** To complete the title to be more precise, or indicate the actions to follow.
- **A Link (optional):** A link can be used when the message indicates the user actions to be done on a different page.

> You can have a notification with a title only or a paragraph only but you must use at least one of them.

<preview path="src/pages/Components/Notification/previews/notification"></preview>

## Four types of notifications

<preview path="src/pages/Components/Notification/previews/notification-types"></preview>

> To learn more about the colors usage, please read the [color documentation](/Foundations/Colors/).

### Information

Informational notifications are **blue**. They are used to highlight a piece of relevant information but don't require immediate action.

<preview path="src/pages/Components/Notification/previews/notification"></preview>

### Success

Success notifications are **green**. They are used when an action is successful.

<preview path="src/pages/Components/Notification/previews/notification-success"></preview>

### Warning

Warning notifications are **orange**. They warn the user about important information that deserves caution.

<preview path="src/pages/Components/Notification/previews/notification-warning"></preview>

### Danger

Danger notifications are **red**. They are used to warn the user of an error or a problem. This may require immediate action.

<preview path="src/pages/Components/Notification/previews/notification-danger"></preview>

## Variations

### Embedded notifications

Embedded notifications are positioned at the top of the page, or between two components (depending of the context). They are mainly used in forms or in pages requiring engaging actions.

### Closeable notifications

> To go further, you can have closeable notification in your project.

They are like the embedded notifications, with a close button.

<preview path="src/pages/Components/Notification/previews/notification-variations"></preview>

## Do's and Dont's

<hintitem>
  Always use the type of notification that matches the displayed message.
</hintitem>
