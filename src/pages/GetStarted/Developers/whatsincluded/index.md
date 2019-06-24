---
title: "What's included ?"
order: 2
---

## Styles

`@mozaic-ds/styles/**`

All the CSS and SCSS files that constitute the Mozaic SCSS framework.

> Note that some variables are imported from the tokens directory.

```tree
styles/
├── settings-tools/
│   ├── _s.***.scss
│   ├── _t.***.scss
│   └── _all-settings.scss (this is a sub bundle containing all variables, mixins, and functions import only this one)
├── generics/
│   └── _g.***.scss
├── elements/
│   ├── _e.***.scss
│   ├── ...
├── layouts/
│   ├── _l.***.scss
│   └── ...
├── typography/
│   ├── _t.***.scss
│   └── ...
├── components/
│   ├── _c.***.scss
│   └── ...
├── utilities/
│   ├── _u.***.scss
│   └── ...
```

---

## Design Tokens :

> design tokens are theming/styling constants defined in a JSON file. They are trasnpiled into multiple format to be shared across plateforms (SCSS, IOS, ANDROID...).

`@mozaic-ds/tokens/properties/**`

Tokens generation use [style-dictionary](https://amzn.github.io/style-dictionary/#/)

`@mozaic-ds/tokens/build/{platform}/**`

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

`@mozaic-ds/css-dev-tools/**`

Right now the tools are composed only of SCSS/postcss tools.

> note that we are using Postcss to build SCSS files

```tree
css-dev-tools/
│   ├── postcssPluginConfig.js (an array of postcss plugins to build the scss files)
│   ├── css-pipeline.js (useless right now)
│   └── styleLintConfig.js (stylelint config)
```

---

## Web fonts :

`@mozaic-ds/web-fonts/**`

```tree
├── LeroyMerlinSans-Web-Italic.woff
└── etc...
```

---

## Icons :

`@mozaic-ds/icons/**`

```tree
├── LeroyMerlinSans-Web-Italic.woff
└── etc...
```
