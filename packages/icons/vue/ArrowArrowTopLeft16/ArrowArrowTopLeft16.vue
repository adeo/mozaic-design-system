<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.293 2.293A1 1 0 013 2h7a1 1 0 110 2H5.414l8.293 8.293a1 1 0 01-1.414 1.414L4 5.414V10a1 1 0 11-2 0V3a1 1 0 01.293-.707z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowTopLeft16',
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
