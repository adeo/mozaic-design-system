<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M5.96 5.96a1 1 0 011.414 0l16.96 16.96V12a1 1 0 112 0v13.333a1 1 0 01-1 1H12a1 1 0 110-2h10.92L5.96 7.373a1 1 0 010-1.413z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowBottomRight32',
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
