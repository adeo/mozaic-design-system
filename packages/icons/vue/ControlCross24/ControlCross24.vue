<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.51 12l6.29-6.29a1 1 0 000-1.42 1 1 0 00-1.41 0l-6.3 6.3-6.29-6.3a1 1 0 00-1.41 0 1 1 0 000 1.42L10.68 12l-6.29 6.29a1 1 0 00.7 1.71 1 1 0 00.71-.29l6.29-6.3 6.3 6.3a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.42z"/></svg></template>
<script >
export default {
    name: 'ControlCross24',
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
