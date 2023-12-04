<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 10.18V6a1 1 0 00-.29-.71C19.61 5.2 17.35 3 12 3S4.39 5.2 4.29 5.29A1 1 0 004 6v4.18A3 3 0 002 13v5a1 1 0 001 1h1v1.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V19h8v1.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V19h1a1 1 0 001-1v-5a3 3 0 00-2-2.82zM6 6.48A10.63 10.63 0 0112 5a10.57 10.57 0 016 1.48V10h-1V7.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V10h-2V7.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V10H6zM16 10h-2V8h2zm-6 0H8V8h2zm-5 2h14a1 1 0 011 1v2H4v-2a1 1 0 011-1zm2 8H5v-1h2zm12 0h-2v-1h2zM4 17v-1h16v1z"/></svg></template>
<script >
export default {
    name: 'Bedroom24',
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
