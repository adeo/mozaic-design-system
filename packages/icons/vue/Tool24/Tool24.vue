<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.5 7.5h-3a.5.5 0 00-.34-.5l-1.58-.5a1.48 1.48 0 00-.78 0 5.6 5.6 0 00-.6-1.5 2 2 0 00-1.7-1H5.83a2 2 0 00-2 1.64l-1.64 9A2 2 0 004.2 17h1.3v2.5A2.5 2.5 0 008 22a.5.5 0 000-1 1.5 1.5 0 01-1.5-1.5V17h1.18a2 2 0 002-1.61l.64-3.39H11v2a.5.5 0 001 0v-2h1.5a2 2 0 001.7-.95 5.68 5.68 0 00.6-1.51 1.26 1.26 0 00.28 0 1.49 1.49 0 00.5-.08L18.16 9a.5.5 0 00.34-.47h3a.5.5 0 000-1zm-8 2.5H8.68l-1 5H4.2l1.63-9h7.66A3.83 3.83 0 0114 8a3.87 3.87 0 01-.5 2z"/><path d="M11.5 7.5h-2a.5.5 0 000 1h2a.5.5 0 000-1z"/></svg></template>
<script >
export default {
    name: 'Tool24',
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
