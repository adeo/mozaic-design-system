<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M5.5 4A1.5 1.5 0 004 5.5v37a1.5 1.5 0 003 0v-37A1.5 1.5 0 005.5 4zM42.5 4A1.5 1.5 0 0041 5.5v37a1.5 1.5 0 003 0v-37A1.5 1.5 0 0042.5 4zM34.06 18.94a1.5 1.5 0 10-2.12 2.12l1.44 1.44H14.62l1.44-1.44a1.5 1.5 0 10-2.12-2.12l-4 4a1.49 1.49 0 000 2.12l4 4a1.5 1.5 0 002.12 0 1.49 1.49 0 000-2.12l-1.44-1.44h18.76l-1.44 1.44a1.49 1.49 0 000 2.12 1.5 1.5 0 002.12 0l4-4a1.49 1.49 0 000-2.12z"/></svg></template>
<script >
export default {
    name: 'HygieneDistance48',
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
