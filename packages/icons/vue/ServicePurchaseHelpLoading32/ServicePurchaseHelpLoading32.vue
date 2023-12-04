<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28 23.5a1 1 0 00-1 1V27H5v-2.5a1 1 0 00-2 0V27a2 2 0 002 2h22a2 2 0 002-2v-2.5a1 1 0 00-1-1z"/><path d="M16 16.9a.5.5 0 00-.5.5v6.17l-2.22-1.49a.5.5 0 00-.56.84l3 2a.53.53 0 00.56 0l3-2a.5.5 0 10-.56-.84l-2.22 1.49V17.4a.5.5 0 00-.5-.5z"/><path d="M7.94 19.14l1.53 1a1 1 0 001.06-1.7L9 17.45V10.8l5.94 3.72a2 2 0 002.12 0L23 10.8v6.65l-1.53.95a1 1 0 00-.32 1.38 1 1 0 001.38.32l1.53-1a2 2 0 00.94-1.65v-7.9a2 2 0 00-.94-1.69l-7-4.38a2 2 0 00-2.12 0l-7 4.38A2 2 0 007 9.55v7.9a2 2 0 00.94 1.69zM16 12.82L9.89 9 12 7.68l6.11 3.82zm0-7.64L22.11 9 20 10.32 13.89 6.5z"/></svg></template>
<script >
export default {
    name: 'ServicePurchaseHelpLoading32',
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
