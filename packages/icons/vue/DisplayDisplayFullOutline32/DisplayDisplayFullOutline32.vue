<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 3H5a2 2 0 00-2 2v22a2 2 0 002 2h22a2 2 0 002-2V5a2 2 0 00-2-2zM5 27V5h22v22z"/></svg></template>
<script >
export default {
    name: 'DisplayDisplayFullOutline32',
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
