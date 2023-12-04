<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9.41 8l3.3-3.29a1 1 0 10-1.42-1.42L8 6.59l-3.29-3.3a1 1 0 00-1.42 1.42L6.59 8l-3.3 3.29a1 1 0 000 1.42 1 1 0 001.42 0L8 9.41l3.29 3.3a1 1 0 001.42 0 1 1 0 000-1.42z"/></svg></template>
<script >
export default {
    name: 'ControlCross16',
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
