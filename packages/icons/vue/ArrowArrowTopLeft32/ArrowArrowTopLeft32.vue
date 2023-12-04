<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M5.96 5.96a1 1 0 01.707-.293H20a1 1 0 010 2H9.08l16.96 16.96a1 1 0 01-1.414 1.413L7.666 9.08V20a1 1 0 11-2 0V6.666a1 1 0 01.294-.707z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowTopLeft32',
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
