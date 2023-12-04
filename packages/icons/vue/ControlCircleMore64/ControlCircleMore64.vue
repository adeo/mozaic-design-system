<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 5a27 27 0 1027 27A27 27 0 0032 5zm0 51a24 24 0 1124-24 24 24 0 01-24 24z"/><path d="M44 30.5H33.5V20a1.5 1.5 0 00-3 0v10.5H20a1.5 1.5 0 000 3h10.5V44a1.5 1.5 0 003 0V33.5H44a1.5 1.5 0 000-3z"/></svg></template>
<script >
export default {
    name: 'ControlCircleMore64',
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
