<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/><path d="M16.21 7.88a1 1 0 00-1.42 0l-2.74 2.74-2.84-2.83a1 1 0 10-1.42 1.42L10.63 12l-2.77 2.79a1 1 0 001.41 1.42l2.78-2.77 2.68 2.68a1 1 0 001.41-1.42L13.46 12l2.75-2.7a1 1 0 000-1.42z"/></svg></template>
<script >
export default {
    name: 'ControlCircleCross24',
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
