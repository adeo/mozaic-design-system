---
title: 'Buttons'
order: 1
---

> Buttons are used to **trigger an actions**. Their appearance is depending on the type of action required from the user, or the context.

## Variations

### Four color schemes for each type of action

You can use **primary**, **secondary**, & **danger** color scheme depending of the type of action the button trigger.
There is also an alternative primary color scheme, only used for Campus : **primary-campus**.

<pattern path="src/patterns/--button/button-styles"></pattern>

<br>

| Color scheme   | Usage                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| Default        | For main actions on the page or engaging actions                                          |  |
| Secondary      | For secondary or minor actions on the page                                                |
| Danger         | For buttons who the following actions is irrevocable, like deleting a product in a basket |
| Primary-Campus | For specific actions dedicated to Campus                                                  |

### Three sizes to create hierarchy

There is **3 sizes** for the buttons to create hierarchy and for a better adaptability :

- Small
- Medium
- Large

<pattern path="src/patterns/--button/button-sizes"></pattern>

<br>

### A button width can either fit its content or its container

<pattern path="src/patterns/--button/button-widths"></pattern>

<br>

### Two styles to make what's important stand out

- solid
- bordered

<pattern path="src/pages/Components/Atoms/buttons/--button/intro"></pattern>

<<<<<<< HEAD
## Do's and don'ts
=======
---
>>>>>>> feat(styleguide/patterns): clean patterns and allow local usage

<hintitem>
  Use solid buttons <b>to highlight the important actions</b>.<br>
</hintitem>
<<<<<<< HEAD
=======

<br>

#### Bordered buttons :

Bordered buttons are used to **highlight additional or optional actions**, and unlike the solid buttons, we can be use several buttons together.
<br>
They fit easily into an environment to lead users without being too strong.

<pattern path="src/pages/Components/Atoms/buttons/--button/intro-bordered"></pattern>

---

>>>>>>> feat(styleguide/patterns): clean patterns and allow local usage
<hintitem>
  Use only one primary button at the time in the user's field of view.
</hintitem>
<hintitem>
  Use Bordered buttons <b>for secondary actions</b>.<br>
  <small>For example to see more information about a product or service.</small>
</hintitem>

<<<<<<< HEAD
<hint type="dont" title="Never use in proximity two solid buttons with the same color scheme">
    <pattern path="src/patterns/--button/button-proximity-dont"></pattern>
</hint>
=======
<br><br>

### Four color schemes for each type of action

You can use **primary**, **secondary**, & **danger** color scheme depending of the type of action the button trigger.
There is also an alternative primary color scheme, only used for Campus : **primary-campus**.

<pattern path="src/pages/Components/Atoms/buttons/--button/button-styles"></pattern>

| Color scheme   | Usage                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| Default        | For main actions on the page or engaging actions                                          |  |
| Secondary      | For secondary or minor actions on the page                                                |
| Danger         | For buttons who the following actions is irrevocable, like deleting a product in a basket |
| Primary-Campus | For specific actions dedicated to Campus                                                  |

<br>

### Rules of proximity

<hint type="dont" title="Never use in proximity two solid buttons with the same color scheme">
    <pattern path="src/pages/Components/Atoms/buttons/--button/button-proximity-dont"></pattern>
</hintitem>
>>>>>>> feat(styleguide/patterns): clean patterns and allow local usage
