<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13 7H9V3a1 1 0 00-2 0v4H3a1 1 0 000 2h4v4a1 1 0 002 0V9h4a1 1 0 000-2z"/></svg></template>
<script >
export default {
    name: 'ControlMore16',
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
