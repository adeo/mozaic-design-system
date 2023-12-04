<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 43a11 11 0 0011-11V16a11 11 0 00-22 0v16a11 11 0 0011 11zm-8-27a8 8 0 0116 0v16a8 8 0 01-16 0z"/><path d="M49.5 21a1.5 1.5 0 00-1.5 1.5V32a16 16 0 01-32 0v-9.5a1.5 1.5 0 00-3 0V32a19 19 0 0017.5 18.92V56h-7a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3h-7v-5.08A19 19 0 0051 32v-9.5a1.5 1.5 0 00-1.5-1.5z"/></svg></template>
<script >
export default {
    name: 'DisplayVocalSearch64',
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
