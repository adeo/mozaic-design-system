# Garden Design system styleguide

This repo contain the code and content to create, manage and deploy the Garden design system styleguide.
the styleguide is based on gatsby, a static site generator based on react and graphql.
Gatsby allow us to build static html websites that, once loaded on the client act as a SPA.

building a styleguide using a static site generator instead of reliyng on a database allow us to use a versionned styleguide that match the assets and framework that it is based on.

We tryed to focus on developper experience, meaning that working with it should be as simple as possible.

Please considere that this repo is in early stage of development. You can report any bug or request a feature or improvment [filling an issue here](https://github.com/adeo/design-system--styleguide/issues)

#### Please read the wiki before submitting anything :

- [glossary](https://github.com/adeo/design-system--styleguide/wiki/Glossary)
- design system workflow :
  - [Things to keep in mind for any contribution](https://github.com/adeo/design-system--styleguide/wiki/Things-to-keep-in-mind-for-any-contribution)
  - [Pattern submission workflow](https://github.com/adeo/design-system--styleguide/wiki/New-pattern-submission-workflow)
  - [Pattern fix and extension workflow](https://github.com/adeo/design-system--styleguide/wiki/Pattern-fix-or-extension-workflow)
- how to create pages and content in the pattern library :
  - [Page creation and edition](https://github.com/adeo/design-system--styleguide/wiki/pages-creation-and-edition)

#### Please read the contributing before contributing: [contributing](https://github.com/adeo/design-system--styleguide/blob/master/CONTRIBUTING.md) 

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
`yarn install`
`yarn develop`

please considere that being in early stage of development, you may need to stop and restart the `yarn develop` command in order to see changes.
we are working on it :)

## troubleshooting :

during development, when changes does not seems not to apply correctly, you may need to remove cache or previous production build :

`rm -rf .cache/ public/`
`yarn develop`

## create a production build :

`yarn build`

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
