<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25 9h-3V6a2 2 0 00-2-2h-8a2 2 0 00-2 2v3H7a4 4 0 00-4 4v12a2 2 0 002 2h22a2 2 0 002-2V13a4 4 0 00-4-4zM12 6h8v3h-8zm-7 7a2 2 0 012-2h18a2 2 0 012 2v4h-5.5v-1.5a.5.5 0 00-1 0V17h-9v-1.5a.5.5 0 00-1 0V17H5zm0 12v-7h5.5v1.5a.5.5 0 001 0V18h9v1.5a.5.5 0 001 0V18H27v7z"/></svg></template>
<script >
export default {
    name: 'ToolBox32',
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
