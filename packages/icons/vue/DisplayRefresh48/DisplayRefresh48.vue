<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M31 13a1.5 1.5 0 000 3h9a1.52 1.52 0 001.06-.44 1.5 1.5 0 00.44-1.06v-9A1.5 1.5 0 0040 4a1.5 1.5 0 00-1.5 1.5v4.74A19.79 19.79 0 0024 4a20 20 0 1017.14 30.27 1.5 1.5 0 10-2.57-1.54A17 17 0 1124 7a16.8 16.8 0 0112.93 6z"/></svg></template>
<script >
export default {
    name: 'DisplayRefresh48',
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
