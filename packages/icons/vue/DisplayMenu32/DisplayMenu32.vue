<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M5 9h22a1 1 0 000-2H5a1 1 0 000 2zM27 15H5a1 1 0 000 2h22a1 1 0 000-2zM27 23H5a1 1 0 000 2h22a1 1 0 000-2z"/></svg></template>
<script >
export default {
    name: 'DisplayMenu32',
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
