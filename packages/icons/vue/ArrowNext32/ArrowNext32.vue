<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.92 16.38a1 1 0 000-.76 1.15 1.15 0 00-.21-.33l-8-8a1 1 0 10-1.42 1.42l6.3 6.29H4a1 1 0 000 2h21.59l-6.3 6.29a1 1 0 000 1.42 1 1 0 001.42 0l8-8a.93.93 0 00.21-.33z"/></svg></template>
<script >
export default {
    name: 'ArrowNext32',
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
