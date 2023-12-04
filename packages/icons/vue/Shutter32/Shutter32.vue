<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27.85 3H4.15A1.16 1.16 0 003 4.15v3.7A1.16 1.16 0 004.15 9H5v18a2 2 0 002 2h18a2 2 0 002-2V9h.85A1.16 1.16 0 0029 7.85v-3.7A1.16 1.16 0 0027.85 3zM7 14v-1h18v1zm18 1v1H7v-1zM7 12v-1h18v1zm0 5h18v1H7zm18-8v1H7V9h18zM7 19h18v1H7zm0 8v-6h8v6zm10 0v-6h8v6zM27 7H5V5h22z"/></svg></template>
<script >
export default {
    name: 'Shutter32',
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
