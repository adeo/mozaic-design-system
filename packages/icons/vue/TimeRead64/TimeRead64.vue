<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 19.7a1.5 1.5 0 00-1.5 1.5v10.18l-5 5a1.49 1.49 0 000 2.12 1.5 1.5 0 002.12 0l5.4-5.4a1.5 1.5 0 00.48-1.1V21.2a1.5 1.5 0 00-1.5-1.5z"/><path d="M32 5a27 27 0 1027 27A27 27 0 0032 5zm1 51v-4a1 1 0 00-2 0v4A24 24 0 018 33h4a1 1 0 000-2H8A24 24 0 0131 8v4a1 1 0 002 0V8a24 24 0 0123 23h-4a1 1 0 000 2h4a24 24 0 01-23 23z"/></svg></template>
<script >
export default {
    name: 'TimeRead64',
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
