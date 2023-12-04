<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 16V8a5 5 0 00-5-5H8a1 1 0 00-2 0H3.5A1.5 1.5 0 002 4.5v4A1.5 1.5 0 003.5 10H6a1 1 0 002 0h3v6a1 1 0 000 2v2.5a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5V18a1 1 0 000-2zM4 8V5h2v3zm7.5 0H8V5h5a3 3 0 013 3v8h-3V9.5A1.5 1.5 0 0011.5 8zM16 20h-3v-2h3z"/></svg></template>
<script >
export default {
    name: 'Pipe24',
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
