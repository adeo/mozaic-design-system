<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M57 5H7a2 2 0 00-2 2v10a2 2 0 002 2h50a2 2 0 002-2V7a2 2 0 00-2-2zm-1 11H8V8h48zM57 45H7a2 2 0 00-2 2v10a2 2 0 002 2h50a2 2 0 002-2V47a2 2 0 00-2-2zm-1 11H8v-8h48zM57 25H7a2 2 0 00-2 2v10a2 2 0 002 2h50a2 2 0 002-2V27a2 2 0 00-2-2zm-1 11H8v-8h48z"/></svg></template>
<script >
export default {
    name: 'DisplayDisplayListOutline64',
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
