<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M58.57 31.3L33.42 5.8A2 2 0 0032 5.21a2 2 0 00-1.42.59L5.44 30.94a1.5 1.5 0 002.12 2.12L9 31.62V57a2 2 0 002 2h14a2 2 0 002-2V43h10v14a2 2 0 002 2h14a2 2 0 002-2V32l1.43 1.45a1.5 1.5 0 001.07.45 1.48 1.48 0 001-.43 1.5 1.5 0 00.07-2.17zM52 56H40V42a2 2 0 00-2-2H26a2 2 0 00-2 2v14H12V28.62l20-20 20 20.29z"/></svg></template>
<script >
export default {
    name: 'DisplayHome64',
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
