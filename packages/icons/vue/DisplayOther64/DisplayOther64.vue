<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill-rule="evenodd" d="M18.667 32A5.333 5.333 0 118 32a5.333 5.333 0 0110.667 0zM56 32a5.333 5.333 0 11-10.667 0A5.333 5.333 0 0156 32zm-24 5.333a5.333 5.333 0 100-10.666 5.333 5.333 0 000 10.666z"/></svg></template>
<script >
export default {
    name: 'DisplayOther64',
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
