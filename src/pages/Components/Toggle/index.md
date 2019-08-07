---
title: 'Toggle'
order: 7
---

> A toggle is used to choose between two possibilities and when the user needs instant feedback. It is common to use toggles when you need to show or hide content and "on/off" switch.

## Sizes

- `S` or small : used only on desktop when space is a concern
- `M` or medium (default): should be the exclusive size for touch devices, and be used in most of the cases on desktop

<preview path="src/pages/Components/Toggle/previews/Toggle" nude="true"></preview>

## States

<preview path="src/pages/Components/Toggle/previews/toggle-states" nude="true"></preview>

## Do's and Don't

More infos in [this medium article](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)

<hintitem>
  Always use M sized toggle on touch devices
</hintitem>
<hintitem>
  Toggle should always trigger instantaneous action and feedbacks.<br />
  User should never be asked for another validation action.
</hintitem>
<hintitem>
  Use checkboxes instead of toggles if another validation action is to be required from the user.
</hintitem>
<hintitem dont="true">
  Never use toggle for multiple choices in a set of related options, use checkboxes instead
</hintitem>
<hintitem dont="true">
  Never use toggle when validation is required
</hintitem>

You can find more informations in [this medium article](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)
