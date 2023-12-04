<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15.293 10.293a1 1 0 011.414 0l10 10a1 1 0 01-1.414 1.414L16 12.414l-9.293 9.293a1 1 0 01-1.414-1.414l10-10z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowTop32',
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
