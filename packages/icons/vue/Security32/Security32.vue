<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24 13h-2V9a6 6 0 00-12 0v4H8a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V14a1 1 0 00-1-1zM12 9a4 4 0 018 0v4h-8zm11 18H9V15h14z"/><path d="M16 17a2.5 2.5 0 00-1 4.79L14.5 25h3l-.5-3.21A2.5 2.5 0 0016 17z"/></svg></template>
<script >
export default {
    name: 'Security32',
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
