<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M35.49 25.58h-23a1.5 1.5 0 110-3h23a1.5 1.5 0 010 3z"/></svg></template>
<script >
export default {
    name: 'ControlLess48',
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
