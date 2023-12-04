<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13 7h-1.14A4 4 0 009 4.14V3a1 1 0 00-2 0v1.14A4 4 0 004.14 7H3a1 1 0 000 2h1.14A4 4 0 007 11.86V13a1 1 0 002 0v-1.14A4 4 0 0011.86 9H13a1 1 0 000-2zm-5 3a2 2 0 112-2 2 2 0 01-2 2z"/></svg></template>
<script >
export default {
    name: 'Locator16',
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
