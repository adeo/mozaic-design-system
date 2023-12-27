# stylelint-plugin-mozaic

A set of rules to enforce the CSS writing conventions of [Mozaic Design System](https://mozaic.adeo.cloud/).

## Installation

```shell
npm install --save-dev @mozaic-ds/stylelint-plugin-mozaic
```

## Usage

Add `@mozaic-ds/stylelint-plugin-mozaic` to your Stylelint config plugins array, then add rules you need to the rules list.

Add this config to your `.stylelintrc` or stylelint config inside `package.json`:

```json
{
  "plugins": ["@mozaic-ds/stylelint-plugin-mozaic"],
  "rules": {
    "plugin/mozaic-bem-pattern": true
  }
}
```

## List of rules

### mozaic-bem-pattern

This rule allows you to ensure that your SCSS code follows the Mozaic Design System writing conventions, namely:

- CSS selectors must be written according to the BEM convention `.block__element--modifier`
- CSS selectors must be written in **kebab-case**
- All selectors must be prefixed with one of the following prefixes: `'mc-*', 'ml-*', 'mu-*', 'mt-*', 'mdu-*'`

#### Options

Each of the above options can be customised by passing an options object to the plugin in the following way:

```javascript
const options = {
  caseStyle: 'kebab-case',
  bemEntitiesDelimiters: {
    modifier: '--',
    element: '__',
    media: '@',
  },
  prefixes: ['mc-', 'ml-', 'mu-', 'mt-', 'mdu-'],
}

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['@mozaic-ds/stylelint-plugin-mozaic'],
  rules: {
    'at-rule-no-unknown': null,
    'max-empty-lines': null,
    'plugin/mozaic-bem-pattern': options,
  },
}
```
