<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.94 10.65l-3-8A1 1 0 0015 2H9a1 1 0 00-.94.65l-3 8A1 1 0 006 12h5v8H9a1 1 0 000 2h6a1 1 0 000-2h-2v-8h3v2.09a1.5 1.5 0 101 0V12h1a1 1 0 00.94-1.35zM7.44 10l2.25-6h4.62l2.25 6z"/></svg></template>
<script >
export default {
    name: 'Lighting24',
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
