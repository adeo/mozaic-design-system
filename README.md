# Garden Design system styleguide

This repo contain the code and content to create, manage and deploy the Garden design system styleguide.
the styleguide is based on gatsby, a static site generator based on react and graphql.
Gatsby allow us to build static html websites that, once loaded on the client act as a SPA.

building a styleguide using a static site generator instead of reliyng on a database allow us to use a versionned styleguide that match the assets and framework that it is based on.

We tryed to focus on developper experience, meaning that working with it should be as simple as possible.

Please considere that this repo is in early stage of development. You can report any bug or request a feature or improvment [filling an issue here](https://github.com/adeo/design-system--styleguide/issues)

### requirements :

- node v10+
- yarn

#### to install node:

please folow the this [guide](https://nodejs.org/en/download/package-manager/)

#### to install yarn :

`npm i -g yarn`

## development :

#### clone the repo and start the development environement

`git clone git@github.com:adeo/design-system--styleguide.git`
`cd design-system--styleguide`
`yarn develop`

please considere that being in early stage of development, you may need to stop and restart the `yarn develop` command in order to see changes.
we are working on it :)

## create a production build :

`yarn build`

## pages and content managment :

### navigation and pages :

the styleguide will create navigtaion items following the directory structure, and the markdown file found in place.
It will look into the `src/pages` directory.

For each directory found, it will search for an `index.md` that will be considered as the index related to the nav item.
each md file encoutered in the directory will be available as diferent tabs in the page.

eg, for the folowing directory tree in src page:

```
- atoms (dir)
    - index.md
    - usage.md
    - button (dir)
        - index.md
- intro (dir)
    - index.md
    - tab1.md
    - tab2.md
    - other dir (dir)
        - index.md
```

the navigation will be :

```
- atoms (with a usage tab)
    - button
- intro (with tab1 and tab2 tabs)
    - other dir
```

### create content :

You can create content using commun markdown + some nice features :

### manage navigation titles, page titles and menu order

by adding the folowing at the top of the `index.md` markdown file, you indicate the menu item title as well as the order you want them to display in the main menu.

folowing the previous directory tree exemple, adding this to the `src/pages/atoms/index.md` :

```
---
title: 'Atoms title'
order: 2
---
```

will allow you to modify the navigation like this :

```
- atoms title (with a usage tab)
    - button
- intro (with tab1 and tab2 tabs)
    - other dir
```

the same is true for tabs into a page, adding an order and a title into the tabs markdonw files will change tabs order and title.

### adding a Pattern

we added to markdown the ability to include react components.
one of them is Pattern
Patterns are a way to display living components, and the ability to show and copy the related code.
You can create patterns by creating a pattern folder using the folowing structure :

first create a directory where you want to create a pattern, for instance in `src/atoms/button`
add the `--` prefix to the directory name, so gatsby will know it should not create a menu item with it.

fore exemple, create `src/pages/components/button/--buttonStd`

then, in it, create files (html, scss, and js) using the same name, they should all folow the same `[patternName].pattern.[ext]` naming convention

for exemple into `src/pages/components/button/:

```
--buttonStd (directory)
    buttonStd.pattern.html
    buttonStd.pattern.scss
    buttonStd.pattern.js
```

now, you can display it in your makdow file by instanciating a pattern :

```md
---
title: 'buttons'
order: 2
---

### here a standard button

<pattern path="src/pages/components/atoms/--button/button"></pattern>

### here another pattern

<pattern path="src/pages/components/atoms/--anotherPattern/anotherPattern"></pattern>
```

#### when using pattern, take in consideration the folowing :

- they are displayed in iframes, in order to be completly decoupled from the rest of the site
- scss is builded on the fly
- it's also in early stage of development, many options will follow
- it's intended to take the future Garden framework as source for scss

## Maintainers

### [Gaël Boyenval](https://www.linkedin.com/in/gaël-boyenval-5b931415/)

**Role for the project** :

- design system front-end lead
- maintainer of the source code
- keep consistency in code base
- keep consistency between code and design
- review code updates
- help keep things flowing and useful for the differents BU

**Timezone :** Paris - France **Availability :** 100%

**bio and interests :**

UI designer and Front end developer freelance since 2007, I’ve built a solid experience creating HTML/CSS frameworks. I’ve worked with several design systems, and try build a solid expertise in that area.
I’m into lean approach, and I like to work with react and javascript too.
On a personal level, I love boxing, hiking and photography.

**Contact:**
AdeoDev : Gael Boyenval

### [Julien Boucry](https://www.linkedin.com/in/julien-boucry-48747467)

**Role for the project :**

- Design system UI lead
- arbitrate the patterns inputs and additions to the design system

**Timezone :** Lile - France **Availability :** x%

**bio and interests :**

**Contact:** AdeoDev : Julien Boucry

### [Jonathan Jalouzot](https://www.linkedin.com/in/jonathanjalouzot/)

**Role for the project :**

- DevOps how to share and deploy easily
- code quality automation and continuous deployment

**Timezone :** Paris - France **Availability :** 50%

**bio and interests :**

## Contributors

### [Nathan Damie](https://www.linkedin.com/in/ndamie/)

**Role for the project :** contributor to the source code

**Timezone :** Lille - France **Availability :** X%

**Contact:** AdeoDev : @nathandm

### [Leandro Grillo](https://www.linkedin.com/in/leandrocgrillo/)

**Role for the project :**

- contributor to the source code
- Front-end consulting

**Timezone :** Sao Paulo - Brazil **Availability :** X%

**Contact :** Leandro Grillo

### [Mélanie Anglard](https://www.linkedin.com/in/melanie-anglard-6540b164/)

**Role for the project :**

- contributor to the source code
- Front-end consulting

**Timezone :** Lille - France **Availability :** X%

### [Tiago Rosa](https://www.linkedin.com/in/tiagorosa/)

**Role for the project :** Product owner / Backlog prioritization / Sync with stakeholders

**Timezone :** Lille - France **Availability :** 90%
