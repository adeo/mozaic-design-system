---
title: "What's included ?"
order: 1
---

### Styles

`nodes_modules/garden-css/styles/**`

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

<br>

### Design Tokens :

`nodes_modules/garden-css/tokens/properties/**`

They are the source files that generate the tokens.

They are usefull if you need to customize your own build of the tokens.

Tokens generation use [style-dictionary](https://amzn.github.io/style-dictionary/#/)

`nodes_modules/garden-css/tokens/build/{platform}/**`

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

<br>

### Tools :

`nodes_modules/garden-css/cssCompiler/**`

Right now the tools are composed only of SCSS/postcss tools.

> note that we are using Postcss to build SCSS files

```tree
cssCompiler/
│   ├── postcssPluginsConfig.js (an array of postcss plugins to build the scss files)
│   ├── css-pipeline.js (useless right now)
│   └── styleLintConfig.js (stylelint config)
```

<br>

### A static folder :

`nodes_modules/garden-css/static/**`

Contain only fonts right now, but will certainly contain icons, logos etc...

```tree
static/
│   ├── fonts
│   │   ├── LeroyMerlinSans-Web-Italic.woff
│   │   └── etc...
```

---

## Next :

### [web setup example](/getStarted/developers/websetupexample/)

A tutorial using npm script to be up and running with garden and it's configuration.
