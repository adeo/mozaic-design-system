<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M42 4H15a2 2 0 00-2 2v18H6a2 2 0 00-2 2v12a6 6 0 006 6h28a6 6 0 006-6V6a2 2 0 00-2-2zM7 38V27h6v11a3 3 0 01-6 0zm34 0a3 3 0 01-3 3H15.19a6 6 0 00.81-3V7h25z"/><path d="M20.14 20h16.72a1 1 0 001-1v-8a1 1 0 00-1-1H20.14a1 1 0 00-1 1v8a1 1 0 001 1zm1-8h14.72v6H21.14zM20 26h17a1 1 0 000-2H20a1 1 0 000 2zM20 31h17a1 1 0 000-2H20a1 1 0 000 2zM20 36h9a1 1 0 000-2h-9a1 1 0 000 2z"/></svg></template>
<script >
export default {
    name: 'BookStore48',
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
