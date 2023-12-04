<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 20h-2V5a1 1 0 00-1-1h-1V3a1 1 0 00-1-1H8a1 1 0 00-1 1v1H6a1 1 0 00-1 1v15H3a1 1 0 000 2h18a1 1 0 000-2zm-10.5 0v-4h3v4zm5 0v-5a1 1 0 00-1-1h-5a1 1 0 00-1 1v5H7V6h10v14z"/><path d="M14.5 10.5h-5a1 1 0 000 2h5a1 1 0 000-2zM14.5 7.5h-5a1 1 0 000 2h5a1 1 0 000-2z"/></svg></template>
<script >
export default {
    name: 'Apartment24',
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
