---
title: 'Installation'
order: 1
---

### Requirements :

Installing Mozaic require `node v10 +`

As for now the `@mozaic-ds/**` repos are public registries on NPM.
You need to be granted and access to the repos.

### Install repositories :

```bash
npm install --save @mozaic-ds/<name-of-your-package>
```

#### Available packages

The ones you are most likely interested in :

- `@mozaic-ds/css-dev-tools` : tools for css like postcss plugins and linters config
- `@mozaic-ds/styles` : source `.scss` files
- `@mozaic-ds/tokens` : tokens json sources as well as compiled ones
- `@mozaic-ds/sketch-libraries` : the sketch designs files
- `@mozaic-ds/web-fonts` : the webfonts used by mozaic
- `@mozaic-ds/icons` : the icon svg files library

#### Others :

we also packaged gatsby extensions that we developed in order to create the styleguide website

- `@mozaic-ds/gatsby-github-release` : a gatsby plugin that help us get the older versions of the design system docs
- `@mozaic-ds/source-directory-tree` : a gatsby plugin to get the directory and file structure in order to build the styleguide menu
- `@mozaic-ds/source-pattern` : a gatsby plugin build the live examples displayed in the styleguide
- `@mozaic-ds/theme-styleguide` : the gatsby theme with the components and configuration used to build the styleguide UI
