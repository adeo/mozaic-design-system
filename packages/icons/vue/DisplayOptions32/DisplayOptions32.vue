<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M18.667 6.667a2.667 2.667 0 11-5.333 0 2.667 2.667 0 015.333 0zm0 18.666a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0zM16 18.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334z"/></svg></template>
<script >
export default {
    name: 'DisplayOptions32',
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
