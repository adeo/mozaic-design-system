<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M54.667 5.333H9.334a4 4 0 00-4 4v45.334a4 4 0 004 4h45.333a4 4 0 004-4V9.333a4 4 0 00-4-4zM21.334 50.668h-8V25.333h8v25.334zm-4-28.667a4.667 4.667 0 114.8-4.666 4.747 4.747 0 01-4.8 4.666zm33.333 28.667h-8V36.693c0-3.786-1.6-5.146-3.68-5.146a4.64 4.64 0 00-4.32 4.96 36.783 36.783 0 000 1.707v12.453h-8V25.333h7.734V28.8a8.293 8.293 0 017.2-3.733c4.133 0 8.96 2.293 8.96 9.76l.106 15.84z"/></svg></template>
<script >
export default {
    name: 'SocialNetworkLinkedin64',
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
