---
title: 'Buttons'
order: 1
---

> Buttons are used to **trigger actions**. Their appearance is depending on the type of action required from the user, or the context.

## Variations

### Four color schemes for each type of action

You can use **primary**, **neutral**, & **danger** color scheme depending of the type of action the button trigger.
There is also an alternative primary color scheme, only used for Campus : **primary-campus**.

<preview path="src/pages/Components/Buttons/previews/button-styles" nude=true ></preview>

<br>

| Color scheme   | Usage                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| Primary        | For main actions on the page or engaging actions                                          |
| Primary-Campus | For main specific actions dedicated to Campus                                             |
| Neutral        | For secondary or minor actions on the page                                                |
| Danger         | For buttons who the following actions is irrevocable, like deleting a product in a basket |

### Three sizes to create hierarchy

There is **3 sizes** for the buttons to create hierarchy and for a better adaptability :

- Small
- Medium
- Large

<preview path="src/pages/Components/Buttons/previews/button-sizes" nude=true ></preview>

<br>

### A button width can either fit its content or its container

<preview path="src/pages/Components/Buttons/previews/button-widths" nude=true ></preview>

<br>

### Two styles to make what's important stand out

- solid
- bordered

<preview path="src/pages/Components/Buttons/previews/intro" nude=true ></preview>

### Displaying buttons with icons

In the button component, you can also add icons :

- On the left
- On the right
- Icon only

<preview path="src/pages/Components/Buttons/previews/button-icon" nude=true ></preview>

Icons are availables in different sizes depending on the button size. Here you can find which icon you can use for each button size :

| **button size**        | **Icon S** | **Icon M**   | **Icon L** | **Icon XL**                        |
| ---------------------- | ---------- | ------------ | ---------- | ---------------------------------- |
| **small**              | 16px (1mu) | 24px (1.5mu) | /          | /                                  |
| **medium** (_default_) | /          | 24px (1.5mu) | 32px (2mu) | /                                  |
| **large**              | /          | /            | 32px (2mu) | 48px _(displayed in 40px)_ (2.5mu) |

## Do's and don'ts

<hintitem>
  Use solid buttons <b>to highlight the important actions</b>.<br>
</hintitem>

<hintitem>
  Use only one primary button at the time in the user's field of view.
</hintitem>

<hintitem>
  Use Bordered buttons <b>for minor or secondary actions</b>.<br>
  <small>For example to see more information about a product or service.</small>
</hintitem>

<hintitem>
Always use an <b>accurate wording</b> for the button label. The action which follows the mouse click must be comprehensive and reassuring for the user.</b>.<br>
<small>For example it's better to write "Add to basket" rather than "Add"</small>
</hintitem>

<hintitem>
  Use icon in button <b>to complete and illustrated the button purpose</b>.<br>
</hintitem>

<hintitem dont=true>
Never use an icon that has no connection or is not explicit enough with the label.
</hintitem>

<hint type="dont" title="Never use in proximity two solid buttons with the same color scheme">
    <preview path="src/pages/Components/Buttons/previews/button-proximity-dont" nude=true ></preview>
</hint>
