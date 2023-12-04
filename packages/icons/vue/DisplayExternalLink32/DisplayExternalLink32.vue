<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M17.333 3a1 1 0 100 2h8.253L11.293 19.293a1 1 0 001.414 1.414L27 6.414v8.253a1 1 0 102 0V4a1 1 0 00-1-1H17.333zM4 8.333a1 1 0 00-1 1V28a1 1 0 001 1h18.667a1 1 0 001-1v-5.333a1 1 0 10-2 0V27H5V10.333h4.333a1 1 0 100-2H4z"/></svg></template>
<script >
export default {
    name: 'DisplayExternalLink32',
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
