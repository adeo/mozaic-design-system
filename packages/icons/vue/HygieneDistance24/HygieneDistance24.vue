<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 2a1 1 0 00-1 1v18a1 1 0 002 0V3a1 1 0 00-1-1zM21 2a1 1 0 00-1 1v18a1 1 0 002 0V3a1 1 0 00-1-1zM16.21 8.79a1 1 0 00-1.42 1.42l.8.79H8.41l.8-.79a1 1 0 00-1.42-1.42l-2.5 2.5a1 1 0 000 1.42l2.5 2.5a1 1 0 001.42 0 1 1 0 000-1.42l-.8-.79h7.18l-.8.79a1 1 0 000 1.42 1 1 0 001.42 0l2.5-2.5a1 1 0 000-1.42z"/></svg></template>
<script >
export default {
    name: 'HygieneDistance24',
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
