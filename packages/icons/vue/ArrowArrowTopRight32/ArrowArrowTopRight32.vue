<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M11 6.667a1 1 0 011-1h13.333a1 1 0 011 1V20a1 1 0 11-2 0V9.081l-16.96 16.96a1 1 0 01-1.413-1.415l16.96-16.96H12a1 1 0 01-1-1z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowTopRight32',
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
