---
title: 'Code'
order: 2
---
## Import

Import the settings and the checkbox `scss` files.

```css
@import 'settings-tools/_all-settings';

@include import-font-families();

@import 'components/_c.file-uploader';
```

## Basic usage
> Natively, to upload files we use an `<input type="file"/>`, but in Mozaic, we will customize it with a `<label>` that will act as a button.

Wrap a input[type="file"] and a label inside a div and apply the following classes :

<preview path="src/pages/Components/FileUploader/previews/file-uploader"></preview>

## Behaviors
### Standard file uploader states :

- `hover`
- `focus` 
- `disabled`

<preview path="src/pages/Components/FileUploader/previews/file-uploader-all-states"></preview>

## Validation pattern

### Multiple files
You can choose to upload **several files at the same time** with the multiple attribute.
<preview path="src/pages/Components/FileUploader/previews/file-uploader-multiple"></preview>

### Accept type of files
You can also restrict the type or the path of the file to be uploaded.
`accept=".jpg, .jpeg, .png"` or ` accept="image/*`

<preview path="src/pages/Components/FileUploader/previews/file-uploader-accept"></preview>

## Accessibility and semantic
Don't forget to add the `aria-label` attribute on the `mc-fileuploader__input`

## To go further...

### ⭐️ Bonus states

If you wish, you can **customize** the files preview and their states with **javascript**, it is **already designed** for you 🤘 :

<preview path="src/pages/Components/FileUploader/previews/file-uploader-with-file-delete"></preview>
