<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M5 4a1 1 0 011-1h13.333a1 1 0 011 1v8.333H26a1 1 0 011 1V27h1a1 1 0 110 2H4a1 1 0 110-2h1V4zm13.333 1v22h-2v-4.333a1 1 0 00-1-1h-4.666a1 1 0 00-1 1V27H7V5h11.333zM25 14.333h-4.667V27H25V14.333zM14.333 27v-3.333h-2.666V27h2.666zM10 7.667a1 1 0 100 2h.667a1 1 0 100-2H10zm4.667 0a1 1 0 100 2h.666a1 1 0 100-2h-.666zm-4.667 4a1 1 0 100 2h.667a1 1 0 100-2H10zm4.667 0a1 1 0 100 2h.666a1 1 0 100-2h-.666zM10 16.333a1 1 0 100 2h.667a1 1 0 100-2H10zm4.667 0a1 1 0 100 2h.666a1 1 0 100-2h-.666z"/></svg></template>
<script >
export default {
    name: 'Company32',
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
