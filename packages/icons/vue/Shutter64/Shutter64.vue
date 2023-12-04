<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M57 5H7a2 2 0 00-2 2v7a2 2 0 002 2h2v41a2 2 0 002 2h42a2 2 0 002-2V16h2a2 2 0 002-2V7a2 2 0 00-2-2zM12 29.5h40V32H12zm0 4.5h40v2.5H12zm40-6.5H12V25h40zm-40 11h40V41H12zM52 23H12v-2.5h40zM12 43h18.5v13H12zm21.5 13V43H52v13zM52 18.5H12V16h40zm4-5.5H8V8h48z"/></svg></template>
<script >
export default {
    name: 'Shutter64',
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
