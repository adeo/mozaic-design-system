<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill-rule="evenodd" d="M8 6.5A1.5 1.5 0 006.5 8v48A1.5 1.5 0 008 57.5h26.667a1.5 1.5 0 001.5-1.5V45.333a1.5 1.5 0 00-3 0V54.5H9.5v-45h23.667v9.167a1.5 1.5 0 103 0V8a1.5 1.5 0 00-1.5-1.5H8zm41.06 16.44a1.5 1.5 0 00-2.12 2.12l5.439 5.44H24a1.5 1.5 0 000 3h28.379l-5.44 5.44a1.5 1.5 0 002.122 2.12l8-8a1.5 1.5 0 000-2.12l-8-8z"/></svg></template>
<script >
export default {
    name: 'DisplayLogOut64',
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
