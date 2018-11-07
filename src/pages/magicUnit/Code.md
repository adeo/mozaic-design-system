---
title: 'Code'
order: 2
---

```code

$spaceamounts: (1, 2, 3, 4, 5);
$sides: (top, bottom, left, right);

@each $space in $spaceamounts {
  @each $side in $sides {
    .m-#{str-slice($side, 0, 1)}-#{$space} {
      margin-#{$side}: #{$space * $MagicUnit};
    }
  }
}

@each $space in $spaceamounts {
  @each $side in $sides {
    .p-#{str-slice($side, 0, 1)}-#{$space} {
      padding-#{$side}: #{$space * $MagicUnit};
    }
  }
}
```