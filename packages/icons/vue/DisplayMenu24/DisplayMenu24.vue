<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 13H4a1 1 0 010-2h16a1 1 0 010 2zM20 6H4a1 1 0 010-2h16a1 1 0 010 2zM20 20H4a1 1 0 010-2h16a1 1 0 010 2z"/></svg></template>
<script >
export default {
    name: 'DisplayMenu24',
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
