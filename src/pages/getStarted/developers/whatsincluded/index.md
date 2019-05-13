---
title: "What's included ?"
order: 2
---

## Styles

`@gardencss/styles/**`

All the CSS and SCSS files that constitute the Garden SCSS frameworks.

> Note that some variables are imported from the tokens directory.

```tree
styles/
├── settings-tools/
│   ├── _s.***.scss
│   ├── _t.***.scss
│   └── _allsettings.scss (this is a sub bundle containing all variables, mixins, and functions import only this one)
├── generics/
│   └── _g.***.scss
├── elements/
│   ├── _e.***.scss
│   ├── ...
├── layouts/
│   ├── _l.***.scss
│   └── ...
├── atoms/
│   ├── _a.***.scss
│   └── ...
├── molecules/
│   ├── _m.***.scss
│   └── ...
├── organisms/
│   ├── _o.***.scss
│   └── ...
├── utilities/
│   ├── _u.***.scss
│   └── ...
```

---

## Design Tokens :

> design tokens are theming/styling constants defined in a JSON file. They are trasnpiled into multiple format to be shared across plateforms (SCSS, IOS, ANDROID...).

`@gardencss/tokens/properties/**`

Tokens generation use [style-dictionary](https://amzn.github.io/style-dictionary/#/)

`@gardencss/tokens/build/{platform}/**`

they are the generated tokens files that you may consume, and they are built in a platform specific directory.

> when working with sass, tokens are imported from the \_all-settings.scss sub bundle

```tree
tokens/
├── build/ (the generated tokens files)
│   ├── scss/
│   │   └── _tokens.scss (imported into _allsettings.scss)
│   ├── js/
│   │   ├── tokens.js (flat list of exported ES6 constants)
│   │   └── tokensObject.js (javascript object mainly used for documentation purpose)
│   ├── ios/
│   └── android/
│
├── properties/ (the source files directory)
│   ├── color/
│   │   ├── base.json (base colors)
│   │   ├── font.json (font related colors)
│   │   └── etc...
│   └── other props dirs...
```

---

## Tools :

`@gardencss/css-dev-tools/**`

Right now the tools are composed only of SCSS/postcss tools.

> note that we are using Postcss to build SCSS files

```tree
cssCompiler/
│   ├── postcssPluginConfig.js (an array of postcss plugins to build the scss files)
│   ├── css-pipeline.js (useless right now)
│   └── styleLintConfig.js (stylelint config)
```

---

## Web fonts :

`@gardencss/web-fonts/**`

```tree
├── LeroyMerlinSans-Web-Italic.woff
└── etc...
```

---

## Icons :

`@gardencss/icons/**`

```tree
├── LeroyMerlinSans-Web-Italic.woff
└── etc...
```
