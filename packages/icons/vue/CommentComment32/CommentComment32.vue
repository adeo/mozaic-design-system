<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 5v18h-9.11l-.5.34L13 26.26V23H5V5h22M5 3a2 2 0 00-2 2v18a2 2 0 002 2h6v3.13a1 1 0 001.55.83l5.95-4H27a2 2 0 002-2V5a2 2 0 00-2-2z"/></svg></template>
<script >
export default {
    name: 'CommentComment32',
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
