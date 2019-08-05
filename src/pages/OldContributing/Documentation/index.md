---
title: 'Documentation'
order: 5
---

## Kickstart documentation

To create fastly all the files you will need to write code and documentation, you can use **plop**.

`npx plop pattern`

Then the CLI will ask you 3 questions : 

- the pattern name : use a Capital first letter and no spaces
- the pattern path : from the `src/pages` directory with no `/`at the end (ex: Foundations/Layout)
- the pattern order : require an integer for the main menu ex: 4

At the end of the process given the 3 following provided arguments : `Accordion`, `Foundations/Layout`, `2` 

Plop will generate 
* the required `usage`, `code`, `design`, `specs` tabs with helping markdown content.
* a basic preview. 

They will all live under the `src/pages/Foundations/Layout/Accordion` directory. 
