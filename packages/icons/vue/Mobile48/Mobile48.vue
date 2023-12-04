<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M32 7H16a2 2 0 00-2 2v30a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm-1 3v22H17V10zM17 38v-4h14v4z"/><path d="M25 35h-2a1 1 0 000 2h2a1 1 0 000-2z"/></svg></template>
<script >
export default {
    name: 'Mobile48',
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
