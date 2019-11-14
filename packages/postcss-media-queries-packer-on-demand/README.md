# postcss media queries packer on demand

[PostCSS] plugin that group media queries on demand.

[PostCSS]: https://github.com/postcss/postcss

```css
/* mqp:start */
.foo {...}
@media (min-width: 320px) {
  .foo {...}
}
.bar {...}
@media (min-width: 680px) {
  .bar {...}
}
@media (min-width: 320px) {
  .bar {...}
}
@media (min-width: 1024px) {
  .bar {...}
}
/* mqp:end */
```

```css
.foo {...}
.bar {...}
@media (min-width: 320px) {
  .foo {...}
  .bar {...}
}
@media (min-width: 680px) {
  .bar {...}
}
@media (min-width: 1024px) {
  .bar {...}
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-media-queries-packer-on-demand'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
