<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.707 4.293a1 1 0 00-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 101.414 1.414l7-7a1 1 0 000-1.414l-7-7zm9 0a1 1 0 10-1.414 1.414L19.586 12l-6.293 6.293a1 1 0 001.414 1.414l7-7a1 1 0 000-1.414l-7-7z"/></svg></template>
<script >
export default {
    name: 'ArrowDoubleArrowRight24',
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
