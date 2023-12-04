<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill-rule="evenodd" d="M14.833 39.834h34.334v-25H14.833v25zm37.334 0v-25.5a2.5 2.5 0 00-2.5-2.5H14.333a2.5 2.5 0 00-2.5 2.5v25.5H8a1.5 1.5 0 00-1.5 1.5V46a7.5 7.5 0 007.5 7.5h36a7.5 7.5 0 007.5-7.5v-4.666a1.5 1.5 0 00-1.5-1.5h-3.833zm2.333 3h-45V46a4.5 4.5 0 004.5 4.5h36a4.5 4.5 0 004.5-4.5v-3.166zM28 19a1 1 0 100 2h8a1 1 0 000-2h-8z"/></svg></template>
<script >
export default {
    name: 'Laptop64',
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
