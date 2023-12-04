<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.71 4.29a1 1 0 00-1.42 1.42L10.59 7H3a1 1 0 000 2h7.59l-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l3-3a1 1 0 000-1.42z"/></svg></template>
<script >
export default {
    name: 'ArrowNext16',
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
