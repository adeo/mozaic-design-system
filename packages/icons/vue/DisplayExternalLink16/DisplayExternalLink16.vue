<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9 2a1 1 0 000 2h1.586L6.293 8.293a1 1 0 001.414 1.414L12 5.414V7a1 1 0 102 0V3a1 1 0 00-1-1H9zM3 4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-2a1 1 0 10-2 0v1H4V6h1a1 1 0 000-2H3z"/></svg></template>
<script >
export default {
    name: 'DisplayExternalLink16',
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
