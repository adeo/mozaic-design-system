<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29 5.5A2.5 2.5 0 0026.5 3h-21A2.5 2.5 0 005 8v12a2 2 0 002 2h8v1.29l-6.27 3.86A1 1 0 009.25 29a1 1 0 00.52-.15L15 25.64V27a1 1 0 002 0v-1.36l5.23 3.21a1 1 0 00.52.15 1 1 0 00.52-1.85L17 23.29V22h8a2 2 0 002-2V8a2.5 2.5 0 002-2.5zM7 20V8h18v12zM26.5 6h-21a.5.5 0 010-1h21a.5.5 0 010 1z"/><path d="M19.43 13.17l-4-2.71a1 1 0 00-1.56.83v5.42a1 1 0 00.53.88 1 1 0 00.47.12 1 1 0 00.56-.17l4-2.71a1 1 0 000-1.66zm-4.55 3.54v-5.42l4 2.71z"/></svg></template>
<script >
export default {
    name: 'Slideshow32',
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
