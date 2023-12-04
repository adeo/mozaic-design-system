<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29 19a5 5 0 00-2-4V8.6a2 2 0 00-1.13-1.8C24.48 6.12 21.34 5 16 5S7.51 6.12 6.13 6.79A2 2 0 005 8.6V15a5 5 0 00-2 4v3.5A1.5 1.5 0 004.5 24H5v1a2 2 0 002 2h2a2 2 0 002-2v-1h10v1a2 2 0 002 2h2a2 2 0 002-2v-1h.5a1.5 1.5 0 001.5-1.5zM7 8.6C8 8.12 10.85 7 16 7s8 1.12 9 1.6v5.5a5.47 5.47 0 00-1-.1h-.5v-2.5A1.5 1.5 0 0022 10h-3.5a1.5 1.5 0 00-1.5 1.5V14h-2v-2.5a1.5 1.5 0 00-1.5-1.5H10a1.5 1.5 0 00-1.5 1.5V14H8a5.47 5.47 0 00-1 .1zM22.5 14H18v-2.5a.5.5 0 01.5-.5H22a.5.5 0 01.5.5zM14 14H9.5v-2.5a.5.5 0 01.5-.5h3.5a.5.5 0 01.5.5zm-6 2h16a3 3 0 013 3v1H5v-1a3 3 0 013-3zm1 9H7v-1h2zm16 0h-2v-1h2zm-4-3H5v-1h22v1z"/></svg></template>
<script >
export default {
    name: 'Bedroom32',
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
