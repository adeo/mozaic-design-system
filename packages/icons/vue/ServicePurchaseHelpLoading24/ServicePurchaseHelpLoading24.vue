<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 17a1 1 0 00-1 1v2H4v-2a1 1 0 00-2 0v3a1 1 0 001 1h18a1 1 0 001-1v-3a1 1 0 00-1-1zM6.5 12.87l1.75 1a1 1 0 001-1.74L8 11.42V7.77l3.49 2.09a1 1 0 001 0L16 7.77v3.65l-1.25.71a1 1 0 001 1.74l1.75-1A1 1 0 0018 12V6a1 1 0 00-.49-.86l-5-3a1 1 0 00-1 0l-5 3A1 1 0 006 6v6a1 1 0 00.5.87zm5.5-5L8.94 6 10 5.35l3.05 1.83zm0-3.66L15.06 6l-1 .6L11 4.77z"/><path d="M12 11.5a.5.5 0 00-.5.5v5.12l-2.24-1.35a.5.5 0 10-.52.86l3 1.8a.52.52 0 00.52 0l3-1.8a.5.5 0 00-.52-.86l-2.24 1.35V12a.5.5 0 00-.5-.5z"/></svg></template>
<script >
export default {
    name: 'ServicePurchaseHelpLoading24',
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
