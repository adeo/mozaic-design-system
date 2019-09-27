---
title: 'Formatting'
order: 3
---

### 2 spaces indentation

```css
.mc-button {
..color: blue;

..&__icon {
....margin-left: 1rem;
..}
}
```

### Each opening block should be preceded by a blank line

```css
.mc-button {
  color: blue;

  /* blank */
  &__icon {
    margin-left: 1rem;
  }
}
```

### Each properties-value and opening block should be preceded and followed by line-break

(even for one line declarations)

```css
.mc-button {
  color: blue;
}
```