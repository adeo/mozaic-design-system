<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M22.5 13a1.5 1.5 0 00-1.5 1.5v35a1.5 1.5 0 003 0v-35a1.5 1.5 0 00-1.5-1.5zM41.5 13a1.5 1.5 0 00-1.5 1.5v35a1.5 1.5 0 003 0v-35a1.5 1.5 0 00-1.5-1.5z"/></svg></template>
<script >
export default {
    name: 'Stop64',
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
