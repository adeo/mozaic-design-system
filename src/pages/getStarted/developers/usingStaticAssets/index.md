---
title: 'Import and use statics assets'
order: 5
---

## Presentation

Garden ship with static assets like fonts, icons, logos etc..

All statics are found in the `nodes_modules/garden/statics/...` directory.

You should make a task to copy those static files automatically in order to stay up to date.

To tell SCSS where to find those files in your project environement, declare before all your import a `$local-config` map :

```scss
// setup a local config
$local-config: (
  font-path: 'my/path/to/fonts',
);

// then import settings
@import 'nodes_modules/garden-css/settings-tools/_all-settings';

// then everything else
@import ...;
@import ...;
@import ...;
@import ...;
```
