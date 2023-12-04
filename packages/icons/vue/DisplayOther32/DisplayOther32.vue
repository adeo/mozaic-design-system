<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M9.333 16A2.667 2.667 0 114 16a2.667 2.667 0 015.333 0zM28 16a2.667 2.667 0 11-5.333 0A2.667 2.667 0 0128 16zm-12 2.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334z"/></svg></template>
<script >
export default {
    name: 'DisplayOther32',
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
