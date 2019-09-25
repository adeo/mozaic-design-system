---
title: 'Declaration Orders'
order: 4
---

### Mixins and function should be declared before properties, and a blank line should be added after

```css
.mc-button {
  @include set-button-layout(large);
  @include set-button-theme(standard);

  color: $color-grey-100;
  font: $size-font-10;
}
```

### Everything that may change the behavior and appearance of an entity should be declared after the standard properties and before the next entity

**In that order :**

1. pseudo-selectors
2. state classes
3. mediaqueries
4. modifiers

```css
.mc-button {
  padding: 0.25rem 0.5rem;

  &:hover {
    /*...*/
  }

  &.is-disabled {
    /*...*/
    &:hover {
      /*...*/
    }
  }

  @media screen and (min-width: 200px) {
    /*...*/
  }

  &--large {
    /* large modifier styles */

    /* then you can repeat the changes here if required */
    @media screen and (min-width: 200px) {
      /*...*/
    }
  }

  /* then only we can style children elements */
  &__icon {
    /* define icon */

    /* then you can repeat the changes here if required */
    @media screen and (min-width: 200px) {
      /*...*/
    }

    &--spining {
      /* make the thing spin */
    }
  }
}
```