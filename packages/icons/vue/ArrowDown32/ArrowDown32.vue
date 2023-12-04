<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M17 4a1 1 0 10-2 0h2zm-1 24l-.707.707a1 1 0 001.414 0L16 28zm8.707-7.293a1 1 0 00-1.414-1.414l1.414 1.414zm-16-1.414a1 1 0 00-1.414 1.414l1.414-1.414zM15 4v24h2V4h-2zm1.707 24.707l8-8-1.414-1.414-8 8 1.414 1.414zm0-1.414l-8-8-1.414 1.414 8 8 1.414-1.414z"/></svg></template>
<script >
export default {
    name: 'ArrowDown32',
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
