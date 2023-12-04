<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M28 10a4 4 0 11-8 0 4 4 0 018 0zm0 28a4 4 0 11-8 0 4 4 0 018 0zm-4-10a4 4 0 100-8 4 4 0 000 8z"/></svg></template>
<script >
export default {
    name: 'DisplayOptions48',
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
