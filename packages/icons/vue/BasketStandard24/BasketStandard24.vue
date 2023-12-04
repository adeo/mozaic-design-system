<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 16H8a1 1 0 01-1-.75L4.38 5H3a1 1 0 010-2h2.15a1 1 0 011 .75L6.71 6H20a1 1 0 01.79.38 1 1 0 01.18.86l-2 8A1 1 0 0118 16zm-9.2-2h8.42l1.5-6H7.23z"/><circle cx="16.5" cy="20" r="2"/><circle cx="9.5" cy="20" r="2"/></svg></template>
<script >
export default {
    name: 'BasketStandard24',
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
