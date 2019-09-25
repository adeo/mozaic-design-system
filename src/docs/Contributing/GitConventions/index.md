---
title: 'Git conventions'
order: 5
---

## Branch names

Each branch name consists of a `type` that matches the main commit one, an optional issue `id` comming from a JIRA ticket or a Github issue and a `description`.

```shell
git checkout -b type-id-description
```

> MOZAIC Team use **JIRA as their project management tool** <br> BU's use **Github issues to manage their tasks into MOZAIC**


---


## Commit message

Each commit message consists of a `type`, an optional `scope` and a `description`.

```shell
<type>(<scope>): <description>

# example
feat(component/button): add a warning color theme
```

> Commit message's lines **cannot be longer than 140 characters**! <br> This leads to **more readable messages** that are easy to follow when looking through the project history. 

We are **automating the releases version numbers (SEMVER) and the generation of the changelogs files by parsing the commit messages**. 

That's why it's very important to follow the conventional commit conventions, and to be very thoughtful about the description you provide

### Naming convention

* #### Type

    The type must describe the changes you have done :

    * **BREAKING_CHANGE** : When your changes are not backward compatible with an older version
    * **feat** : When you add a new feat like a new component or a new Gatsby functionnality
    * **fix** : When you fix a bug 
    * **refactor** : When you had to rework, rewrite code lines
    * **style** : ?
    * **test** : To add new tests

* #### Scope (optionnal)

    The scope should precise your changes' scope:

    * **website/xxx** : everything that has to do with the mosaic website UI, like menus, tabs nav, Gatsby etc...
    * **onboard/xxx** : documentation only like getting started and contributing sections
    * **patterns/xxx** : anything that is related to visual deliverables : code / design / doc / tokens / icons
    * **tools/xxx** : any dev tool delivered to the end user like linters, postcss configs, tokens customization scripts etc
    * **chore/xxx** : anything related to CI, devtools, scripts for mozaic developers

    > Note: **xxx points to more precise scope**. For example : `patterns/buttons`, `website/menu`

* #### Subject

    The subject contains a succinct description of the change:

    * use the imperative, present tense: "change" not "changed" nor "changes"
    * don't capitalize the first letter
    * no dot (.) at the end
    * don't use approximative terms like "some" or "any"

---


## Pull request

The pull request naming follows the same rules as the commit message and consist of a `type`, an optional `scope` and a `description`. You have to use the same convention described in the commit part.

##### A work in progress

To indicate that your pull request is still Work In Progress, you can add `[WIP]` in front of your PR name and using the associated Github label.

> **Warning :** WIP pull request will not be reviewed unless you specifically ask someone to

### Manage the commit(s)

It is preferable to have only one commit by pull request, but pull requests commits will be squashed before being merged to the master.

The merged commit message will then be used in changelogs and releases informations .

> You can manage your commits using 2 methods : <br>
**- Rebase your commit using the rebase interactive** <br>
**- amend your commit before pushing to origin** <br>
See details in [Git documentation](https://git-scm.com/book/en/v2).
#### Merging multiple commits into master

If for some reason **you worked on multiple types, scopes, or tasks in the same pull request** and conserving multiple commits to be documented in the changelogs and release informations seems the best options.

```shell
feat(tools/postcss): add a plugin that does x y
feat(pattern/buttons): create a feature that does x y
```

In that case the feature in the button require the feature on the dev tools, and both informations should be kept in the history, and for information purpose in the changelogs and release infos. 

**You should specifically inform the reviewer that both commit should be kept when merging into master.**