<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M57.5 30.5h-6.58A19 19 0 0033.5 13.08V6.5a1.5 1.5 0 00-3 0v6.58A19 19 0 0013.08 30.5H6.5a1.5 1.5 0 000 3h6.58A19 19 0 0030.5 50.92v6.58a1.5 1.5 0 003 0v-6.58A19 19 0 0050.92 33.5h6.58a1.5 1.5 0 000-3zM32 48a16 16 0 1116-16 16 16 0 01-16 16z"/></svg></template>
<script >
export default {
    name: 'Locator64',
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
