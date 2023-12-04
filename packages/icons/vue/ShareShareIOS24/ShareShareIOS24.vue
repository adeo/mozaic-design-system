<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71 6.7L11 5.41v9.09a1 1 0 002 0V5.41l1.29 1.29a1 1 0 101.42-1.41l-3-3a1 1 0 00-1.42 0l-3 3a1 1 0 000 1.41 1 1 0 001.42 0z"/><path d="M19 4h-1a1 1 0 000 2v12H6V6a1 1 0 000-2H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1z"/></svg></template>
<script >
export default {
    name: 'ShareShareIOS24',
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
