<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M39 16h-4.21a5.76 5.76 0 00.8-1.74 5.75 5.75 0 10-11.11-3L24 13l-.47-1.75A5.75 5.75 0 1013.23 16H9a2 2 0 00-2 2v21a2 2 0 002 2h30a2 2 0 002-2V18a2 2 0 00-2-2zm-1 11H25.5v-8.01H38zm-8.68-16.9a2.75 2.75 0 011.43 5.32l-2.13.58h-2.3l1.06-3.94a2.72 2.72 0 011.94-1.96zm-12 5.32a2.75 2.75 0 113.37-3.37L21.7 16h-2.29zM22.5 19v8H10v-8zM10 38v-8h12.5v8zm15.5 0v-8H38v8z"/></svg></template>
<script >
export default {
    name: 'CardGift48',
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
