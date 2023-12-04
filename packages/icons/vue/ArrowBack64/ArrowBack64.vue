<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M57.5 30.5H10.12l15.44-15.44a1.5 1.5 0 00-2.12-2.12L5.79 30.59a2 2 0 000 2.82l17.65 17.65a1.5 1.5 0 002.12 0 1.49 1.49 0 000-2.12L10.12 33.5H57.5a1.5 1.5 0 000-3z"/></svg></template>
<script >
export default {
    name: 'ArrowBack64',
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
