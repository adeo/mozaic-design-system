<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 8.38a1 1 0 01-1-1V3a1 1 0 011-1h4.38a1 1 0 010 2H4v3.38a1 1 0 01-1 1zM21 8.38a1 1 0 01-1-1V4h-3.38a1 1 0 010-2H21a1 1 0 011 1v4.38a1 1 0 01-1 1zM7.38 22H3a1 1 0 01-1-1v-4.39a1 1 0 012 0V20h3.38a1 1 0 110 2zM22 21a1 1 0 01-1 1h-4.38a1 1 0 010-2H20v-3.39a1 1 0 012 0zM8.85 8.2h.61v7.78h-.61zM12.83 8.2h.61v7.78h-.61zM16.97 8.2h.61v7.78h-.61zM6.43 8.2h1.56v7.78H6.43zM10.21 8.2h1.56v7.78h-1.56zM14.54 8.2h1.56v7.78h-1.56z"/></svg></template>
<script >
export default {
    name: 'PromiseScan24',
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
