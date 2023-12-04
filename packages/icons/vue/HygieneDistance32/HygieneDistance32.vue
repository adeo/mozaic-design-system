<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4 3a1 1 0 00-1 1v24a1 1 0 002 0V4a1 1 0 00-1-1zM28 3a1 1 0 00-1 1v24a1 1 0 002 0V4a1 1 0 00-1-1zM22.71 12.29a1 1 0 00-1.42 1.42l1.3 1.29H9.41l1.3-1.29a1 1 0 00-1.42-1.42l-3 3a1 1 0 000 1.42l3 3a1 1 0 001.42 0 1 1 0 000-1.42L9.41 17h13.18l-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l3-3a1 1 0 000-1.42z"/></svg></template>
<script >
export default {
    name: 'HygieneDistance32',
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
