<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.71 20.29l-12-12a1 1 0 00-1.42 0l-12 12a1 1 0 00-.21 1.09A1 1 0 004 22h24a1 1 0 00.92-.62 1 1 0 00-.21-1.09zM6.41 20L16 10.41 25.59 20z"/></svg></template>
<script >
export default {
    name: 'Logo32',
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
