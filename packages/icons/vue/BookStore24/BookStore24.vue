<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 3v9H3a1 1 0 00-1 1v5.5A3.5 3.5 0 005.5 22H19a3 3 0 003-3V3a1 1 0 00-1-1H8a1 1 0 00-1 1zM4 18.5V14h3v4.5a1.5 1.5 0 01-3 0zm16 .5a1 1 0 01-1 1H8.66v-.07a3.39 3.39 0 00.15-.45 2.25 2.25 0 00.08-.24A3.57 3.57 0 009 18.5V4h11z"/><path d="M18 5.5h-7a.5.5 0 00-.5.5v3.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5zM17.5 9h-6V6.5h6zM11 13h7a.5.5 0 000-1h-7a.5.5 0 000 1zM11 18h4a.5.5 0 000-1h-4a.5.5 0 000 1zM11 15.5h7a.5.5 0 000-1h-7a.5.5 0 000 1z"/></svg></template>
<script >
export default {
    name: 'BookStore24',
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
