<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M42.5 41H41V21.21l.56.46a1.5 1.5 0 002.27-.47 1.56 1.56 0 00-.45-1.91L25.25 4.59a2 2 0 00-2.49 0L4.57 18.82a1.5 1.5 0 001.86 2.36l.57-.45V41H5.5a1.5 1.5 0 000 3h37a1.5 1.5 0 000-3zm-15 0h-7v-8h7zm2 0v-9a1 1 0 00-1-1h-9a1 1 0 00-1 1v9H10V18.5v-.11l14-11 14 11.39V41z"/><path d="M21 19h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6h-4v-4h4zM33 19h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6h-4v-4h4z"/></svg></template>
<script >
export default {
    name: 'House48',
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
