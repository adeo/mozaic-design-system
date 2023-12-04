<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24 17H8a1 1 0 010-2h16a1 1 0 010 2z"/></svg></template>
<script >
export default {
    name: 'ControlLess32',
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
