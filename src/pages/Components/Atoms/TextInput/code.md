---
title: 'Code'
order: 2
---

### File(s) to import

First of all, you need to import the `.scss` file.

```scss
@import 'atoms/_a.input';
```

### Apply CSS Class

To style an HTML Input, apply the `ga-input` class.

<preview path="src/pages/Components/Atoms/TextInput/previews/input-default"></pattern>

### Manage event

<hintitem>
    Input supports <code>hover</code> and <code>focus</code> event
</hintitem>

Events are manage using `:hover` and `:focus` CSS pseudo-class.

<br/>

<preview path="src/pages/Components/Atoms/TextInput/previews/input-default-event"></pattern>

### Manage validation state

To indicate the validation state of your input like valid or invalid. You can use two state CSS Classes :

- `is-valid`
- `is-invalid`

<preview path="src/pages/Components/Atoms/TextInput/previews/input-state"></pattern>

<br/>

---

> Note that <strong>if you try to apply those CSS classes to an unsupported input type.</strong> It could work but you should find something which better suits to your needs in the documentation.
