<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28 27H4a1 1 0 000 2h24a1 1 0 000-2zM5 23h22a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2zM5 5h22v16H5z"/></svg></template>
<script >
export default {
    name: 'DisplayDisplayMobileVertical32',
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
