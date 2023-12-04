<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4.14 12.7a1 1 0 01-1.41 1.42l-2.68-2.68-2.78 2.77a1 1 0 11-1.41-1.42L10.63 12 7.79 9.21a1 1 0 111.42-1.42l2.84 2.83 2.74-2.74a1 1 0 111.42 1.42L13.46 12z"/></svg></template>
<script >
export default {
    name: 'ControlTagCross24',
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
