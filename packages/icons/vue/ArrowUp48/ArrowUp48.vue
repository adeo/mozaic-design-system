<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M22.94 4.44a1.5 1.5 0 012.12 0l12.5 12.5a1.5 1.5 0 01-2.12 2.12L25.5 9.122V42.5a1.5 1.5 0 01-3 0V9.121l-9.94 9.94a1.5 1.5 0 01-2.12-2.122l12.5-12.5z"/></svg></template>
<script >
export default {
    name: 'ArrowUp48',
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
