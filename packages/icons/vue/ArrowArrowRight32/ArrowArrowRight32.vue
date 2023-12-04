<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.293 5.293a1 1 0 011.414 0l10 10a1 1 0 010 1.414l-10 10a1 1 0 01-1.414-1.414L19.586 16l-9.293-9.293a1 1 0 010-1.414z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowRight32',
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
