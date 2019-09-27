---
title: 'File Uploader'
order: 7
---

> A file uploader is a pattern mainly used in forms. It allows the user to upload one or several files like pictures or documents.

## Behaviors

### Initial state

A File uploader is triggered by a medium bordered primary button.

<preview path="src/pages/Components/FileUploader/previews/file-uploader" nude="true"></preview>

### Files preview

> To go further, you can customize the files preview.

After uploading a file, a tile is added to the bottom of the component. This tile allows the user to see the file name and its status :

- Uploaded
- Error

<preview path="src/pages/Components/FileUploader/previews/file-uploader-with-file" nude="true"></preview>

### Two ways to upload

#### Single upload

When the file uploader allows the user to upload only one file it automatically overwrites the previously uploaded file when a new file is uploaded.

#### Multiple upload

When the file uploader allows the user to upload multiple files, the user can select several files in the dedicated browser window. The files will be added with the previously uploaded files if you repeat this action.

## Do's and Dont's

<hintitem>
  Always give feedback to the user when a file is uploaded or not.
</hintitem>
<hintitem dont="true">
  Never use a solid primary button to trigger the upload.
</hintitem>
