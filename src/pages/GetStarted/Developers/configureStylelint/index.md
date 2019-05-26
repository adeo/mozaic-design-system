---
title: 'Configuring Stylelint'
order: 4
---

## Presentation

> A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

Stylint comes with its configuration in garden and it is provided at compilation time. It means that if you write CSS and bundle them using our PostCSS config, you'll get linting out of the box.

## Create a root styleling configuration file

You don't necessarily need a root config file, but in some case you may want to have it, for exemple to configure prettier-stylelint on your IDE, or to use stylelint outside of the compilation pipeline. For example, you may want to create a npm script to automatically fix linting issues.

In that case you can create a `stylelint.config.js` file in the root dir of your project.

and you just have to export the styleling config from garden

```js
module.exports = require('@gardencss/css-dev-tools/styleLintConfig.js')
```
