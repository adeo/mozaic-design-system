<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 5H5a2 2 0 00-2 2v16a2 2 0 002 2h6v2H8a1 1 0 000 2h16a1 1 0 000-2h-3v-2h6a2 2 0 002-2V7a2 2 0 00-2-2zM5 7h22v11.6H5zm15 20h-8v-2h8zM5 23v-3.4h22V23z"/></svg></template>
<script >
export default {
    name: 'Desktop32',
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
