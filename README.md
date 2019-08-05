# MOZAIC Design system

This repo contain the code and content to create, manage and deploy the Mozaic design system styleguide.
the styleguide is based on gatsby, a static site generator based on react and graphql.
Gatsby allow us to build static html websites that, once loaded on the client act as a SPA.

building a styleguide using a static site generator instead of reliyng on a database allow us to use a versionned styleguide that match the assets and framework that it is based on.

We tryed to focus on developper experience, meaning that working with it should be as simple as possible.

Please considere that this repo is in early stage of development. You can report any bug or request a feature or improvment [filling an issue here](https://github.com/adeo/mozaic-design-system/issues)

#### Please read the wiki before submitting anything :

- [Project roadmap](https://github.com/adeo/mozaic-design-system/wiki)
- [glossary](https://github.com/adeo/mozaic-design-system/wiki/Glossary)
- design system workflow :
  - [Things to keep in mind for any contribution](https://github.com/adeo/mozaic-design-system/wiki/Things-to-keep-in-mind-for-any-contribution)
  - [Pattern submission workflow](https://github.com/adeo/mozaic-design-system/wiki/New-pattern-submission-workflow)
  - [Pattern fix and extension workflow](https://github.com/adeo/mozaic-design-system/wiki/Pattern-fix-or-extension-workflow)
- how to create pages and content in the pattern library :
  - [Page creation and edition](https://github.com/adeo/mozaic-design-system/wiki/pages-creation-and-edition)
  - [Create and display a pattern](https://github.com/adeo/mozaic-design-system/wiki/Create-and-display-patterns)
  - [Other in-page components](https://github.com/adeo/mozaic-design-system/wiki/Other-in-page-components)

#### Please read the contributing before contributing: [contributing](https://github.com/adeo/mozaic-design-system/blob/master/CONTRIBUTING.md)

### Requirements :

- node v10+
- yarn

#### To install node:

please folow the this [guide](https://nodejs.org/en/download/package-manager/)

#### To install yarn :

`npm i -g yarn`

## Development :

### Note about the project architecture

The project Use a monorepo architecture using [lerna](https://github.com/lerna/lerna/).
Lerna help us to manage the distribution and the versionning of multiple packages into the same repository.
It also create symlink between the individual packages nodes_modules so they can be used in one another as npm dependencies.

When releasing the design system, lerna will automaticaly generate changelogs for the global/parent repo, as well as for the individual packages and select a version number based on the commit syntax. It's why it is very important that you follow the [contributing guidelines](https://github.com/adeo/mozaic-design-system/blob/master/CONTRIBUTING.md).

please [read the docs](https://github.com/lerna/lerna/) to learn more about it.

### Clone the repo and start the development environement

clone the repo :  
`git clone git@github.com:adeo/mozaic-design-system.git`

move to the repo :  
`cd mozaic-design-system`

install dependencies and create symlink between packages :  
`yarn lerna`

lunch the dev server :  
`yarn develop`

## Lint and fix your css files using stylelint

```bash
yarn css:fix
```

Please note that stylelint is not able to fix everything, so run

```bash
yarn css:lint
```

and make the required changes.

stylelint `fix` and `lint` are run at pre-commit, so you can't commit uggly stuffs ;).

## Create a production build :

`yarn build`

## CI/CD

If you want more explanation go to the related [wiki page](https://github.com/adeo/mozaic-design-system/wiki/CI-CD).

### Deploy

Each branch is deployed when creating a Pull Request. A `view deployment` button is displayed into the Pull Request's timeline at the bottom.

There are two deployment environments that can be found [here](https://github.com/adeo/mozaic-design-system/deployments):

- staging, allows the deployment of all branches except master
- production, allows the deployment of master

### Create release

To create a release, change the registry's package.json version number and create a tag with the version number in github.
the registry is automaticaly deployed and pushed into the npm registry.

## Design system core team

### [Gaël Boyenval](https://www.linkedin.com/in/gaël-boyenval-5b931415/)

**Role for the project** :

- design system front-end lead
- maintainer of the source code
- main contributor and maintainer of the styleguide tool based on gatsby
- keep consistency in code base
- keep consistency between code and design
- review code updates
- help keep things flowing and useful for the differents BU

**Timezone :** Paris - France **Availability :** 100%

**bio and interests :**

UI designer and Front end developer freelance since 2007, I’ve built a solid experience creating HTML/CSS frameworks. I’ve worked with several design systems, and try to build a solid expertise in that area.
I’m into lean approach, and I like to work with react and javascript too.
On a personal level, I love boxing, hiking and photography.

**Contact:**
AdeoDev : Gael Boyenval

### [Charles-Antoine Queste](https://www.linkedin.com/in/charlesantoinequeste/?originalSubdomain=fr)

**Role for the project :**

- Design system UI lead
- arbitrate the patterns inputs and additions to the design system

**Timezone :** Lile - France **Availability :** 100%

### [Jonathan Jalouzot](https://www.linkedin.com/in/jonathanjalouzot/)

**Role for the project :**

- DevOps
- code quality automation and continuous deployment

**Timezone :** Paris - France **Availability :** on demand

### [Mélanie Anglard](https://www.linkedin.com/in/melanie-anglard-6540b164/)

**Role for the project :** Front-end developer

**Timezone :** Lille - France **Availability :** on monday and thuesday

### [Tiago Rosa](https://www.linkedin.com/in/tiagorosa/)

**Role for the project :** Product owner / Backlog prioritization / Sync with stakeholders

**Timezone :** Lille - France **Availability :** 90%

### [Marine Fabien](https://www.linkedin.com/in/marine-fabien/)

**Role for the project :** Front-end developer

**Timezone :** Lille - France **Availability :** from monday to thursday

### [Nicolas Herwegh](https://www.linkedin.com/in/nicolas-herwegh-3a4494136/?originalSubdomain=fr)

**Role for the project :** UI designer

**Timezone :** Lille - France **Availability :** on monday and thuesday

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
