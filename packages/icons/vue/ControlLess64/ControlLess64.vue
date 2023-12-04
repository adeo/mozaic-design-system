<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M49.5 30.5h-35a1.5 1.5 0 000 3h35a1.5 1.5 0 000-3z"/></svg></template>
<script >
export default {
    name: 'ControlLess64',
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
