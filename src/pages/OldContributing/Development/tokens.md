---
title: 'Tokens'
order: 2
---

> We first recommand you to create your token API scheme before writing SCSS

## Presentation

Actuals tokens categories are : 

* color
* size (font)
* radius
* border
* shadow

Every type of token have the same file structure : 

```tree
type of tokens/
    |- base.json
    |- specific.json
```

## Add tokens

To add new tokens you need to create a new file in the category you want to add it :

__Example :__

```tree
packages/tokens/
    |- color
        |- base.json
        |- new-component.json // New color token file for lorem component
```

### How to write new token file

Token file use the JSON Syntax.

Example for `/packages/tokens/properties/color/new-component.json`
```json
{
  "color": {
    "new-component" : {
      // Specific color theme
    }
  }
}
```

1. #### Add new theme for `new-component`

    You just have to have some node for each color theme.

    ```json
    {
      "color": {
        "colorTheme1" : {

        },
        "colorTheme2" : {

        }
      }
    }
    ```

2. #### Add property for your themes

    To add token for each theme you ave to create a node for each property you need a token.

    As you are using token, you have to use the base value to fill your theme. In the example `{color.primary-01.500.value}` means that we want to use the base value for the color Primary-01 500.

    ```json
    {
      "color": {
        "colorTheme1" : {
          "font" : {
            "value": "{color.primary-01.500.value}"
          },
          "background" : {
            "value" : "{color.primary-01.500.value}"
          }
        },
        "colorTheme2" : {
          "font" : {
            "value": "{color.primary-02.500.value}"
          },
          "background" : {
            "value" : "{color.primary-02.500.value}"
          }
        }
      }
    }
    ```

3. #### Build tokens

    To build tokens you have 2 solutions : 
    * Use the `yarn develop` task to launch localhost and the tokens will be build at the first step of the task
    * Use the `yarn tokens:build` task to generate only tokens files while your local server is already up.