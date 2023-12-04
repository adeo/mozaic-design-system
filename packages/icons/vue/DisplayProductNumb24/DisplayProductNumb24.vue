<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 7H8a1 1 0 010-2h13a1 1 0 010 2z"/><circle cx="3.25" cy="6" r="1.25"/><path d="M21 13H8a1 1 0 010-2h13a1 1 0 010 2z"/><circle cx="3.25" cy="12" r="1.25"/><path d="M21 19H8a1 1 0 010-2h13a1 1 0 010 2z"/><circle cx="3.25" cy="18" r="1.25"/></svg></template>
<script >
export default {
    name: 'DisplayProductNumb24',
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
