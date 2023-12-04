<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.38 8.9a2 2 0 00-1.53-.77l-3.3-.08.84-2a2.93 2.93 0 00-5-3l-4.06 5A.91.91 0 008 8H3a1 1 0 00-1 1.13l1.31 10a1 1 0 001 .87H8a1 1 0 001-.73l1.18.46a2.86 2.86 0 001 .19l5.19.13h.1a4 4 0 003.9-3.12l1.43-6.36a2 2 0 00-.42-1.67zM7 18H5.19l-1.05-8H7zm11.37-1.51a2 2 0 01-1.95 1.56h-.05l-5.19-.13a1 1 0 01-.34-.06L9 17.15v-6.67l5-6.13a.93.93 0 011.57 1l-2 4.68 6.25.15z"/></svg></template>
<script >
export default {
    name: 'ViewLikePositive24',
    props: {
    /**
     * Icon color
     */
    color: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>
