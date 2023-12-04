<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25 17v-3a2 2 0 00-2-2h-2V9a2 2 0 00-2-2h-6a2 2 0 00-2 2v3H9a2 2 0 00-2 2v3H5a2 2 0 00-2 2v3a2 2 0 002 2h22a2 2 0 002-2v-3a2 2 0 00-2-2zm-2-3v3h-6v-3h6zM13 9h6v3h-6zm-4 5h6v3H9zm2 8H5v-3h6zm8 0h-6v-3h6zm8 0h-6v-3h6z"/></svg></template>
<script >
export default {
    name: 'Carpentry32',
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
