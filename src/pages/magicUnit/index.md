---
title: 'Magic Unit and baseline'
order: 1
---

## Magic Unit

### What is the magic unit ?

The magic unit is a very low level constant _(an unit that doesn't change)_ used everywhere in the source code to manage a consistant scale throughout the Design System.

This `magic unit` is refering to a **16px font-size**. This is the standard body font-size used on Garden.

For designers using sketch, `MagicUnit` isn't yet used the same way in CSS. To check the latest docs for working with this on Sketch, you can download the sketch file here <link>.

### Why do we use the magic unit ?

Using a magic unit have multiples benefits.

- It make the overall compositions feels more harmonious and organised.
- It create a sens of vertical rhythm
- It brings global consistency on sized elements
- It improves modularity, and reusability, things just fit! :)
- It help reduce the `gzip` css file size, meaning less time needed to download, even if a fraction of mili seconds, when the matter is performance, details count.

[![alt text](http://demo-dot-design-system-adeo.appspot.com/static/dd77ac1b7d7548f5078820cd2c4e32e8/0f41f/magicunit.png)](http://demo-dot-design-system-adeo.appspot.com/static/dd77ac1b7d7548f5078820cd2c4e32e8/02918/magicunit.png)

# Uage

### For what should I use it for ?

To create vertical and horizontal rhythm. You should use the `magic unit` as often as you can in order for line-heights, margin, padding, icons and typography sizes and in every element that has a size defined. In that way, you will virtually snap elements to a baseline vertical grid.

### `16px` is quite big, how can I work with smaller sizes?

You are right, we need to have a more subtle control over sizing, to make it possible all you have to do it divide this unit in half or quarters. For example `MagicUnit / 4` = `4px` or `MagicUnit * 0.25` = `4px` This is considered as a fine tuning that allows you to use any value in `px` or `rem`.

`.my-class { margin-left: $MagicUnit * 0.123; width: $MagicUnit * 10.325 }`

#### Do not use less than 0.25 for Magic Unit increments

The idea is to avoid decimal units in your interface, just because things break down when you get to fractional pixels. For example: `MagicUnit * 0.12` = `1.92px` or `MagicUnit * 0.13` = `2.08px`. Not good.

.my-class { margin-left: $MagicUnit _ 0.25; // === $MagicUnit/4 === 4px margin-right: 3px; // fine tunning with px is okay when required width: $MagicUnit _ 10.5; // 168px }

#### In other hand, you can still use px for fine-tuning when needed o/
