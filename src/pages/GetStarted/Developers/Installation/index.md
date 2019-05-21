---
title: 'Installation'
order: 1
---

### Requirements :

Installing Garden require `node v10 +`

As for now the `@gardencss/**` repos are private registries on NPM.
You need to be granted and access to the repos.

#### To get an NPM access :

- Create a NPM account (if you don't have one)
- Send us the email used with your account

Please note that this procedure may take times and may change soon.

### Install repositories :

first log yourself in your npm account :

```bash
npm login
```

and follow the steps prompted by npm to log yourself in

then install any package you want

```bash
npm install --save @gardencss/<name-of-your-package>
```

#### Available packages

The ones you are most likely interested in :

- `@gardencss/css-dev-tools` : tools for css like postcss plugins and linters config
- `@gardencss/styles` : source `.scss` files
- `@gardencss/tokens` : tokens json sources as well as compiled ones
- `@gardencss/sketch-libraries` : the sketch designs files
- `@gardencss/web-fonts` : the webfonts used by garden
- `@gardencss/icons` : the icon svg files library

#### Others :

we also packaged gatsby extensions that we developed in order to create the styleguide website

- `@gardencss/gatsby-github-release` : a gatsby plugin that help us get the older versions of the design system docs
- `@gardencss/source-directory-tree` : a gatsby plugin to get the directory and file structure in order to build the styleguide menu
- `@gardencss/source-pattern` : a gatsby plugin build the live examples displayed in the styleguide
- `@gardencss/theme-styleguide` : the gatsby theme with the components and configuration used to build the styleguide UI
