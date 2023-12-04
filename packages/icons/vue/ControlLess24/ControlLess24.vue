<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.09 13h-10a1 1 0 010-2h10a1 1 0 010 2z"/></svg></template>
<script >
export default {
    name: 'ControlLess24',
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
