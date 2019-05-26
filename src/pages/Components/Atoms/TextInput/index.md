---
title: 'Text input'
order: 1
---

> Everything you need to know about styling HTML input element.

<hintitem>
    Supported input types :
    <ul>
        <li><code>text</code></li>
        <li><code>email</code></li>
        <li><code>date</code></li>
        <li><code>password</code></li>
        <li><code>number</code></li>
        <li><code>tel</code></li>
        <li><code>number</code></li>
        <li><code>search</code></li>
    </ul>
</hintitem>

# Default

<preview path="src/pages/Components/Atoms/TextInput/previews/input-default"></pattern>

<br/>

### CSS Tokens

| State       | Property      | Token                    |
| ----------- | ------------- | ------------------------ |
| **default** | background    | `color.input.background` |
| **default** | border-color  | `color.input.border`     |
| **default** | color         | `color.input.text`       |
| **default** | padding       | `mu-100`                 |
| **default** | border-radius | `radius.m`               |
| **default** | font-size     | `size.font.05`           |

## Supported events

<hintitem>
    Input supports <code>hover</code> and <code>focus</code> event
</hintitem>

<hintitem>
    <strong>Focus border color has priority</strong> on all styles already applied
</hintitem>

<br/>

<preview path="src/pages/Components/Atoms/TextInput/previews/input-default-event"></pattern>

<br/>

### CSS tokens

| State     | Property     | Token                      |
| --------- | ------------ | -------------------------- |
| **hover** | border-color | `color.input.hover.border` |
| **focus** | border-color | `color.input.focus.border` |

<br/>

---

# Disabled status

<hintitem dont=true>
    <strong>Disabled status</strong> can't support any other styles or event
</hintitem>

<br/>

<preview path="src/pages/Components/Atoms/TextInput/previews/input-default-disabled"></pattern>

<br/>

---

# Valid status

<preview path="src/pages/Components/Atoms/TextInput/previews/input-valid"></pattern>

<br/>

### CSS Tokens

| State     | Property     | Token                      |
| --------- | ------------ | -------------------------- |
| **valid** | border-color | `color.input.valid.border` |

## Supported events

<preview path="src/pages/Components/Atoms/TextInput/previews/input-valid-event"></pattern>

<br/>

### CSS tokens

| State     | Property     | Token                            |
| --------- | ------------ | -------------------------------- |
| **hover** | border-color | `color.input.valid.hover.border` |

<br/>

---

# Invalid status

<preview path="src/pages/Components/Atoms/TextInput/previews/input-invalid"></pattern>

<br/>

### CSS Tokens

| State       | Property     | Token                        |
| ----------- | ------------ | ---------------------------- |
| **invalid** | border-color | `color.input.invalid.border` |

## Supported events

<preview path="src/pages/Components/Atoms/TextInput/previews/input-invalid-event"></pattern>

<br/>

### CSS tokens

| State     | Property     | Token                              |
| --------- | ------------ | ---------------------------------- |
| **hover** | border-color | `color.input.invalid.hover.border` |
