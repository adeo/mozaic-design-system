<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 13H5a2 2 0 00-2 2v2a2 2 0 002 2h22a2 2 0 002-2v-2a2 2 0 00-2-2zM5 17v-2h22v2zM27 3H5a2 2 0 00-2 2v2a2 2 0 002 2h22a2 2 0 002-2V5a2 2 0 00-2-2zM5 7V5h22v2zM27 23H5a2 2 0 00-2 2v2a2 2 0 002 2h22a2 2 0 002-2v-2a2 2 0 00-2-2zM5 27v-2h22v2z"/></svg></template>
<script >
export default {
    name: 'DisplayDisplayListOutline32',
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
