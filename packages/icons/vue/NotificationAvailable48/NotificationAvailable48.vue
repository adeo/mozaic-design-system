<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M40.5 12.38a1.51 1.51 0 00-2.12.12L20.71 32.37 9.52 22.05a1.5 1.5 0 10-2 2.19L19.8 35.6a1.49 1.49 0 001 .4h.07a1.52 1.52 0 001.05-.5l18.68-21a1.49 1.49 0 00-.1-2.12z"/></svg></template>
<script >
export default {
    name: 'NotificationAvailable48',
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
