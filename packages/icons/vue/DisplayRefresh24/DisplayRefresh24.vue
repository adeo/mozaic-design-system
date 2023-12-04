<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.15 12a1 1 0 00-1.15.9A8 8 0 1112.09 4a8.09 8.09 0 016.21 3h-3.21a1 1 0 000 2h5a1 1 0 001-1V3a1 1 0 00-2 0v1.91A10 10 0 1022 13.12a1 1 0 00-.85-1.12z"/></svg></template>
<script >
export default {
    name: 'DisplayRefresh24',
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
