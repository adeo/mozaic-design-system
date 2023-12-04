<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M58.07 39.66L34.22 15.92a3.14 3.14 0 00-4.44 0L5.93 39.66A3.13 3.13 0 008.15 45h47.7a3.13 3.13 0 002.22-5.34zM56 41.91c0 .09-.06.09-.13.09H8.15c-.07 0-.1 0-.13-.09s0-.08 0-.13L31.89 18a.17.17 0 01.22 0L56 41.78v.13z"/></svg></template>
<script >
export default {
    name: 'Logo64',
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
