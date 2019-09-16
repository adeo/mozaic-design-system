---
title: 'Code'
order: 2
---

> Rating stars can be used in two ways : (1.) when filing or amending an opinion (2.) when displaying the overall score on a product sheet.

Implementing rating stars :

- [When filing or amending an opinion](#case-1)
- [When displaying the overall score](#case-2)

<a name="case-1"></a>

## Filing or amending an opinion

### Import

Import the settings and the _"stars input"_ `scss` files

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.stars-input';
```

### Basic usage

To use the rating stars when filing or modifying a opinion, you must apply the `mc-stars-input` class to an html element (div or fieldset) used as a container for input radio tags (radio buttons). These radio buttons must be associated with label tags.

```html
<div class="mc-stars-input">
  <input type="radio" name="rating" value="0" id="no-rate" class="mc-stars-input__radio" checked aria-label="No opinion given" />

  <input type="radio" name="rating" value="1" id="ratingstar1" class="mc-stars-input__radio" />
  <label for="ratingstar1" class="mc-stars-input__label">
    <span class="mc-stars-input__text">Very bad</span>
  </label>

  <input type="radio" name="rating" value="2" id="ratingstar2" class="mc-stars-input__radio" />
  <label for="ratingstar2" class="mc-stars-input__label">
    <span class="mc-stars-input__text">Bad</span>
  </label>

  <input type="radio" name="rating" value="3" id="ratingstar3" class="mc-stars-input__radio" />
  <label for="ratingstar3" class="mc-stars-input__label">
    <span class="mc-stars-input__text">Medium</span>
  </label>

  <input type="radio" name="rating" value="4" id="ratingstar4" class="mc-stars-input__radio" />
  <label for="ratingstar4" class="mc-stars-input__label">
    <span class="mc-stars-input__text">Good</span>
  </label>

  <input type="radio" name="rating" value="5" id="ratingstar5" class="mc-stars-input__radio" />
  <label for="ratingstar5" class="mc-stars-input__label">
    <span class="mc-stars-input__text">Excellent</span>
  </label>
</div>
```

<preview path="src/pages/Components/RatingStars/previews/stars-input-basic"></preview>

### Variations

#### Available sizes

The rating stars are available in 4 sizes.

To change the size of the stars, simply apply one of the following modifier **to the main container** :

- **small** : `mc-stars-input--s`
- **medium** : this is the default size so you don't need to add a modifier class
- **large** : `mc-stars-input--l`;
- **extralarge** : `mc-stars-input--xl`;

```html
<div class="mc-stars-input mc-stars-input--s">...</div>

<div class="mc-stars-input mc-stars-input--l">...</div>
```

<preview path="src/pages/Components/RatingStars/previews/stars-input-all-sizes"></preview>

### accessibility and semantic

<hintitem>
  Each radio button <strong>(input.mc-stars-input__radio)</strong> must be associated with a label tag <strong>(label.mc-stars-input__label)</strong>
</hintitem>

<hintitem>
  Each label <strong>(label.mc-stars-input__label)</strong> must contain an explicit text describing the value of the radio button
</hintitem>

<hintitem>
  The label text must be wrapped with a <strong>span.mc-stars-input__text tag</strong>
</hintitem>

<hintitem dont=true>
  Don't forget to insert the first radio button that has a neutral value. This radio button must <strong>NOT</strong> be associated with a label tag. However, in this case the label is replaced by an <strong>aria-label</strong> attribute.
</hintitem>

<a name="case-2"></a>

## When displaying the global score

### Import

Import the settings and the _"stars result"_ `scss` files

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.stars-result';
```

### Basic usage

To use rating stars when displaying the global score on a product sheet, you must apply the `mc-stars-result` class to a `div` serving as a container for a `span.mc-stars-result__visual` and `span.mc-stars-result__text` tags.

```html
<div class="mc-stars-result">
  <span class="mc-stars-result__visual"></span>
  <span class="mc-stars-result__text">Global score: 0</span>
</div>
```

<preview path="src/pages/Components/RatingStars/previews/stars-result-basic"></preview>

### Variations

#### Available sizes

The rating stars are available in 4 sizes.

To change the size of the stars, simply apply one of the following modifier **to the main container** :

- **small** : `mc-stars-result--s`
- **medium** : this is the default style so you don't need to add a modifier class
- **large** : `mc-stars-result--l`;
- **extralarge** : `mc-stars-result--xl`;

```html
<div class="mc-stars-result mc-stars-result--s">...</div>

<div class="mc-stars-result mc-stars-result--l">...</div>
```

#### Available states

The overall score is displayed by "filling in" the rating stars in whole or in part.

The method for filling stars is to consider these stars as a percentage value. Therefore, considering that **5 stars filled = 100%** _(or a score of 5/5 = 100%)_, we can associate a filling level with a value in %.

The modifiers used to manage the filling of stars are based on the above principle.
These modifiers are to be applied **to the main container** :

| Note | Percentage | Modifier                     |
| ---- | ---------- | ---------------------------- |
| 0,5  | 10%        | `mc-stars-result--score-10`  |
| 1    | 20%        | `mc-stars-result--score-20`  |
| 1,5  | 30%        | `mc-stars-result--score-30`  |
| 2    | 40%        | `mc-stars-result--score-40`  |
| 2,5  | 50%        | `mc-stars-result--score-50`  |
| 3    | 60%        | `mc-stars-result--score-60`  |
| 3,5  | 70%        | `mc-stars-result--score-70`  |
| 4    | 80%        | `mc-stars-result--score-80`  |
| 4,5  | 90%        | `mc-stars-result--score-90`  |
| 5    | 100%       | `mc-stars-result--score-100` |

<preview path="src/pages/Components/RatingStars/previews/stars-result-all-sizes"></preview>

### accessibility and semantic

<hintitem dont=true>
  For accessibility reasons, the global score shouldn't be expressed only in the visual form of rating stars.
</hintitem>

<hintitem>
  To make the global score accessible, we also express it in text form, by inserting an explicit text in a <strong>span.mc-stars-result__text</strong> tag
</hintitem>
