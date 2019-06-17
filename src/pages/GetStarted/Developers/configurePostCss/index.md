---
title: 'Configuring PostCSS'
order: 3
---

## Introduction

The Garden CSS source files are written in SCSS. But we compile them trough Postcss.
This allow us to combine a SCSS syntax with the power of Postcss Plugins.

Garden provide you with an array of postcss plugins that is **required to use to build Garden files**, but no task runner, or compiler comes with it.
That way, you are free to use your favorite one, like gulp, grunt, webpack or even npm scripts.

The garden postCSS plugins contains (to this point and in that order):

- **stylelint:** a powerfull linter for preprocessor languages
- **nodeSass:** compile SCSS into css
- **autoprefixer:** automatically add browser prefixes
- **mqpacker:** regroup all media-queries contents

You are free to use this configuration to build your own styles, but note that this plugin list may change in the future.

### A) Using a configuration file :

You can create a `postcss.config.js` file in your project root directory and paste the following code inside :

```js
const pluginList = require('@mozaic-ds/css-dev-tools/postcssPluginConfig')

module.exports = {
  plugins: pluginList,
}
```

### B) with webpack :

```js
/*... your imports */
const pluginList = require('@mozaic-ds/css-dev-tools/postcssPluginConfig')

/*... your webpack config */
...
{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        plugins: pluginList
      }
    }
  ]
}
...
```

### C) with gulp :

```js
var postcss = require('gulp-postcss')
var gulp = require('gulp')
const pluginList = require('@mozaic-ds/css-dev-tools/postcssPluginConfig')

gulp.task('css', () =>
  gulp
    .src('./src/*.css')
    .pipe(postcss(pluginList))
    .pipe(gulp.dest('./dest'))
)
```
