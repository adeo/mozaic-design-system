<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12 7a1 1 0 00-1 1v16a1 1 0 002 0V8a1 1 0 00-1-1zM20 7a1 1 0 00-1 1v16a1 1 0 002 0V8a1 1 0 00-1-1z"/></svg></template>
<script >
export default {
    name: 'Stop32',
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
