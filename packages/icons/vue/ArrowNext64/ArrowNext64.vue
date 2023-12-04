<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M58.56 30.94l-18-18a1.5 1.5 0 00-2.12 2.12L53.88 30.5H6.5a1.5 1.5 0 000 3h47.38L38.44 48.94a1.49 1.49 0 000 2.12 1.5 1.5 0 002.12 0l18-18a1.49 1.49 0 000-2.12z"/></svg></template>
<script >
export default {
    name: 'ArrowNext64',
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
