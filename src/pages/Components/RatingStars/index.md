---
title: 'Rating Stars'
order: 1
---

> Rating stars is a pattern you'll find in almost every website. It has two main usages. First, it allows the user to give feedback on the current experience with a product or a service. Second, it allows a brand to provide some informations on other user's opinion on a product or a service to make his choice easier.

<preview path="src/pages/Components/RatingStars/previews/stars-input-basic" nude=true></preview>
<preview path="src/pages/Components/RatingStars/previews/stars-result-basic" nude=true></preview>

## Variations

You can find three different variations of rating stars. One that represents empty stars, half stars and full stars.

| Variation       | Usage                                                              |
| --------------- | ------------------------------------------------------------------ |
| Empty stars     | Empty stars are shown when the user hasn't posted a review yet     |
| Half stars      | Half stars show an half rating of a user on a product or a service |
| Full stars      | Full stars show user's opinion on a product or a service           |

<preview path="src/pages/Components/RatingStars/previews/stars-result-all-states" nude=true></preview>

## Use cases

We have separated rating stars into `mc-stars-input` and `mc-stars-results`.

**mc-stars-input:**
This allows the user to rate a product or a service. The user can only give a rate from 0 to 5 by clicking the corresponding star.

**mc-stars-results:**
This use case is made to display notes from 0 to 5. This case allows half values, like 2,5 stars for example. This case shows the results of user rated products or services.

### Sizes

We designed rating stars with modularity in mind. You will find four different sizes of these to adjust to your needs.

|                 |                                 |
| --------------- | ------------------------------- |
| **Small**       | <preview path="src/pages/Components/RatingStars/previews/stars-result-size-s" nude=true></preview> |
| **Medium**      | <preview path="src/pages/Components/RatingStars/previews/stars-result-size-m" nude=true></preview> |
| **Large**       | <preview path="src/pages/Components/RatingStars/previews/stars-result-size-l" nude=true></preview> |
| **ExtraLarge**  | <preview path="src/pages/Components/RatingStars/previews/stars-result-size-xl" nude=true></preview>|

## Do's and don't

<hintitem dont="true">
  Never use single rating stars. They should always be displayed within a group of 5.
</hintitem>
<hintitem dont="true">
  `mc-stars-input` should always have a label that indicates the user the ability to rate the product or the service.
</hintitem>
<hintitem dont="true">
  Don't try to reinvent standards and stick to the 5 stars ratings.
</hintitem>
<hintitem dont="true">
  Always use real data with rating stars. Never fake data to enforce a product or a service quality.
</hintitem>
