---
title: 'Code'
order: 1
---

### The screen map

<hintitem>
use the screen map to get the <b>unitless</b> value of a screen size
</hintitem>

```scss
map-get($screens, xs) // 360
```

<br>

#### Availables keys/values:

| map value | map key |
| --------- | ------- |
| 0         | xxs     |
| 360       | xs      |
| 576       | s       |
| 750       | m       |
| 992       | l       |
| 1200      | xl      |
| 1400      | xxl     |

<br>

---

### The screen variables

<hintitem>
use the screen varibales to get the <b>px</b> value of a screen size
</hintitem>

```scss
$screen-xs  // 360px
$screen-s   // 576px
$screen-m   // 750px
$screen-l   // 992px
$screen-xl  // 1200px
$screen-xxl // 1400px
```

<br>

---

### The from-screen mixin

<hintitem>
use the from-screen mixin in with a screen map key to create a media querie
</hintitem>

```scss
@include from-screen(m) {
  /* ... code */
}

// output

@media screen and (min-width: 750px) {
  /*... code*/
}
```

<pattern path="src/patterns/exemple/--responsive/responsive"></pattern>
