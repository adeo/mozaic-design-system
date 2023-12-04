<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M42.5 35a1.5 1.5 0 00-1.5 1.5V41H7v-4.5a1.5 1.5 0 00-3 0V42a2 2 0 002 2h36a2 2 0 002-2v-5.5a1.5 1.5 0 00-1.5-1.5z"/><path d="M24 24a1.5 1.5 0 00-1.5 1.5v9.35l-2.73-1.64a1.5 1.5 0 10-1.54 2.58L23 38.63a2 2 0 002.06 0l4.74-2.84a1.5 1.5 0 10-1.54-2.58l-2.76 1.64V25.5A1.5 1.5 0 0024 24z"/><path d="M11 29.42l3.76 2.33a1.5 1.5 0 101.58-2.56l-3.29-2V15.65l10 6a2 2 0 002.06 0l10-6v11.51l-3.29 2a1.5 1.5 0 001.58 2.56l3.76-2.33a2 2 0 001-1.7V13.28a2 2 0 00-1-1.71L25 4.37a2 2 0 00-2.06 0L11 11.56a2 2 0 00-1 1.72v14.44a2 2 0 001 1.7zm13-10.67L14.42 13l3.41-2 9.6 5.75zm0-11.5L33.58 13l-3.24 2-9.59-5.8z"/></svg></template>
<script >
export default {
    name: 'ServicePurchaseHelpLoading48',
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
