<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71 15.34l-9-9a1 1 0 00-1.42 0l-9 9A1 1 0 003 17.05h18a1 1 0 00.71-1.71zM12 13l5.1 2H6.9zm5.78 1.2l-5.28-2.04V9zM11.5 9v3.2l-5.28 2.04z"/></svg></template>
<script >
export default {
    name: 'Enki24',
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
