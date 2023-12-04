<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L18 16.586V9a1 1 0 112 0v10a1 1 0 01-1 1H9a1 1 0 110-2h7.586L4.293 5.707a1 1 0 010-1.414z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowBottomRight24',
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
