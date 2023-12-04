<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4.707 3.293a1 1 0 00-1.414 1.414L6.586 8l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4zm5 0a1 1 0 00-1.414 1.414L11.586 8l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z"/></svg></template>
<script >
export default {
    name: 'ArrowDoubleArrowRight16',
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
