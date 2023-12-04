<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M54.56 16.44a1.49 1.49 0 00-2.12 0L26.5 42.38 11.56 27.44a1.5 1.5 0 00-2.12 2.12l15.65 15.65a2 2 0 002.82 0l26.65-26.65a1.49 1.49 0 000-2.12z"/></svg></template>
<script >
export default {
    name: 'NotificationAvailable64',
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
