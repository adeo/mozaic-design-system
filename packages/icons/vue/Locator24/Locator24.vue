<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 11h-2.08A7 7 0 0013 5.08V3a1 1 0 00-2 0v2.08A7 7 0 005.08 11H3a1 1 0 000 2h2.08A7 7 0 0011 18.92V21a1 1 0 002 0v-2.08A7 7 0 0018.92 13H21a1 1 0 000-2zm-9 6a5 5 0 115-5 5 5 0 01-5 5z"/></svg></template>
<script >
export default {
    name: 'Locator24',
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
