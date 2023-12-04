<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M26.12 24l13.94-13.94a1.5 1.5 0 10-2.12-2.12L24 21.88 10.06 7.94a1.5 1.5 0 10-2.12 2.12L21.88 24 7.94 37.94a1.49 1.49 0 000 2.12 1.5 1.5 0 002.12 0L24 26.12l13.94 13.94a1.5 1.5 0 002.12 0 1.49 1.49 0 000-2.12z"/></svg></template>
<script >
export default {
    name: 'ControlCross48',
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
