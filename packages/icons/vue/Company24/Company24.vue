<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.5 3a1 1 0 011-1h10a1 1 0 011 1v6h4a1 1 0 011 1v10h.5a1 1 0 110 2H3a1 1 0 110-2h.5V3zm10 1v16h-1v-3a1 1 0 00-1-1H8a1 1 0 00-1 1v3H5.5V4h8zm5 7h-3v9h3v-9zm-8 9v-2H9v2h1.5zm-3-14.5a1 1 0 000 2H8a1 1 0 000-2h-.5zm3.5 0a1 1 0 100 2h.5a1 1 0 100-2H11zm-3.5 3a1 1 0 000 2H8a1 1 0 100-2h-.5zm3.5 0a1 1 0 100 2h.5a1 1 0 100-2H11zM7.5 12a1 1 0 100 2H8a1 1 0 100-2h-.5zm3.5 0a1 1 0 100 2h.5a1 1 0 100-2H11z"/></svg></template>
<script >
export default {
    name: 'Company24',
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
