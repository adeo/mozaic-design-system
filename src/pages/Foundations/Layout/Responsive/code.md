---
title: 'Code'
order: 1
---

## The set-from-screen mixin

<hintitem>
use the set-from-screen mixin in with a screen map key to create a media querie
</hintitem>

```scss
@include set-from-screen(m) {
  /* ... code */
}

// output

@media screen and (min-width: 576px) {
  /*... code*/
}
```

<preview path="src/pages/Foundations/Layout/Responsive/previews/responsive"></pattern>

<br>

---

## The modify-from-screens mixin

<hintitem>
  use the modify-from-screens mixin to create a series of viewport-specific scoped classes
</hintitem>

for example, to create an utility that hide an element based on the viewport :

```scss
.gu-hide
  @include modify-from-screens(('s', 'm', 'l')) {
    display: none !important;
  }
}
```

Output:

```scss
// from screen s and up (will hide anything)
.gu-hide {
  display: none;
}

// from screen m and up
@media screen and (min-width: 576px) {
  .gu-hide\@from-m {
    display: none;
  }
}

// rom screen l and up
@media screen and (min-width: 1100px) {
  .gu-hide\@from-l {
    display: none;
  }
}
```

Markup usage :

```html
<div class="gu-hide@from-l">
  I will be hidden from 1100px wide and up
</div>
```

### The modify from screen **take a map as an argument**.

You can either :

#### 1) declare a map before passing it to the mixin

```scss
$viewports: ('s', 'm', 'l');
@include modify-from-screens($viewports) {...}
```

#### 2) passes the viewports names wrapped in parenthesis

```scss
@include modify-from-screens(('s', 'm', 'l')) {...}
```

#### 3) use the \$major-screens variable

(if you want to pass all major screens has arguments)

```scss
@include modify-from-screens($major-screens) {...}
```

--

## The screen variables

<hintitem>
use the screen varibales to get the <b>px</b> value of a screen size
</hintitem>

| value      | scss variable      | examples of devices                                                                                                |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| **0px**    | `$screen-s`        | iphone5, SE                                                                                                        |
| **320px**  | `$screen-s-mini`   | iphone5, SE                                                                                                        |
| **360px**  | `$screen-s-medium` | Sony Xperia P, <br>Samsung Galaxy S4, <br>iphone6,7,8                                                              |
| **390px**  | `$screen-s-mega`   | iphone6+,7+,X+, <br>Samsung Galaxy Note                                                                            |
| -          | -                  | -                                                                                                                  |
| **576px**  | `$screen-m`        | tablets                                                                                                            |
| **680px**  | `$screen-m-mini`   | Microsoft Surface Pro, <br>Apple iPad mini, <br>Samsung Galaxy Tab 7"                                              |
| **769px**  | `$screen-m-medium` | Samsung Nexus 10, <br>Samsung Galaxy Tab 8.9" & 10"                                                                |
| **1024px** | `$screen-m-mega`   | Microsoft Surface Pro 3, <br>Apple iPad Pro<br>Ipad (landscape)                                                    |
| -          | -                  | -                                                                                                                  |
| **1100px** | `$screen-l`        | landscape tablets, laptops                                                                                         |
| **1280px** | `$screen-l-mini`   | laptops (depending on settings), <br>Samsung Galaxy Tab 10" (landscape), <br>Samsung Galaxy Tab 2 10" (landscape), |
| **1440px** | `$screen-l-medium` | laptops (depending on settings), <br>Microsoft Surface Pro 3 (landscape), <br>Apple iPad Pro 12.9" (landscape)     |
| **1680px** | `$screen-l-mega`   | laptops (depending on settings),                                                                                   |
| -          | -                  | -                                                                                                                  |
| **1920px** | `$screen-xl`       | desktop computers                                                                                                  |

<br>

---
