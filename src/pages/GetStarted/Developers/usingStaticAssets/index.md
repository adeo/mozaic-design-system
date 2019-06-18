---
title: 'Import and use statics assets'
order: 5
---

## Presentation

Mozaic ship with static assets like fonts, icons, logos etc..

you can find fonts and icons in the following packages :

- `@mozaic-ds/web-fonts/**`
- `@mozaic-ds/icons/**`

You can use make a task to copy those static files from the `nodes_modules` to your favorite destination automatically in order to stay up to date.

To tell SCSS where to find those files in your project environement, declare before all your import a `$local-config` map :

```css
// setup a local config
$local-config: (
  font-path: 'my/path/to/fonts',
);

// then import settings
@import 'nodes_modules/@mozaic-ds/styles/settings-tools/_all-settings';

// then everything else
@import ...;
@import ...;
@import ...;
@import ...;
```
