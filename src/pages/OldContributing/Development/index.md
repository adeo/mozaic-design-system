---
title: 'Development'
order: 4
---

## Philosophy

Components are created using differents tools:

* ### SCSS file

    Component style are part of the `@mozaic-ds/styles` package

    You have to work in the `/packages/styles` directory in the mozaic project

    ```tree
    mozaic-design-system/
        |- packages
            |- styles
    ```

* ### Tokens file

    > Tokens are used to share design foundations like colors, font-sizes, etc ... with any languages by exporting its in Json, iOSJson, Android, XML, SCSS, etc ...

    Tokens are part of the `@mozaic-ds/tokens` package

    You have to your in the `/packages/tokens/properties` directory in the mozaic project

    ```tree
    mozaic-design-system/
        |- packages
            |- tokens
                |- properties
    ```
