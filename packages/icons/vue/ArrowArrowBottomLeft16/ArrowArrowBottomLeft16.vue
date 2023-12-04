<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.707 2.293a1 1 0 010 1.414L5.414 12H10a1 1 0 110 2H3a1 1 0 01-1-1V6a1 1 0 112 0v4.586l8.293-8.293a1 1 0 011.414 0z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowBottomLeft16',
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
