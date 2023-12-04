<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M4.44 22.94l14-14a1.5 1.5 0 012.12 2.12L9.12 22.5H42.5a1.5 1.5 0 010 3H9.12l11.44 11.44a1.49 1.49 0 010 2.12 1.5 1.5 0 01-2.12 0l-14-14a1.49 1.49 0 010-2.12z"/></svg></template>
<script >
export default {
    name: 'ArrowBack48',
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
