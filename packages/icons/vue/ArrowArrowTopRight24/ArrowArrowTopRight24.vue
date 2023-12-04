<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8 5a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 11-2 0V7.414L5.707 19.707a1 1 0 11-1.414-1.414L16.586 6H9a1 1 0 01-1-1z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowTopRight24',
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
