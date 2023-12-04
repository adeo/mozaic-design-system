<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M41.58 20.3l-8.41 8.41a3.53 3.53 0 102.12 2.12l8.41-8.41a1.5 1.5 0 10-2.12-2.12z"/><path d="M52.12 14l1.38-1.38.94.94a1.5 1.5 0 002.12 0 1.49 1.49 0 000-2.12l-4-4a1.5 1.5 0 00-2.12 2.12l.94.94L50 11.88a27 27 0 00-36 0l-2.63-2.63 1.94-1.94a1.5 1.5 0 00-2.12-2.12l-6 6a1.49 1.49 0 000 2.12 1.5 1.5 0 002.12 0l1.94-1.94L11.88 14a27 27 0 1040.24 0zM32 56a24 24 0 1124-24 24 24 0 01-24 24z"/></svg></template>
<script >
export default {
    name: 'TimeTimeDecline64',
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
