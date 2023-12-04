<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M24 16.73L51 32 24 47.27V16.73M23 13a2 2 0 00-2 2v34a2 2 0 003 1.74l30-17a2 2 0 000-3.48l-30-17a2 2 0 00-1-.26z"/></svg></template>
<script >
export default {
    name: 'Play64',
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
