<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 7A17 17 0 117 24 17 17 0 0124 7m0-3a20 20 0 1020 20A20 20 0 0024 4z"/><path d="M21 18.8l9 5.2-9 5.2V18.8m0 13.87l12-6.94a2 2 0 000-3.46l-12-6.94a2 2 0 00-3 1.74v13.86a2 2 0 003 1.74z"/></svg></template>
<script >
export default {
    name: 'Player48',
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
