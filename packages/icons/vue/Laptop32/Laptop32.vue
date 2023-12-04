<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M5.667 7.667a2 2 0 012-2h16.666a2 2 0 012 2v12H28a1 1 0 011 1V23a4 4 0 01-4 4H7a4 4 0 01-4-4v-2.334a1 1 0 011-1h1.667v-12zm2 12h16.666v-12H7.667v12zm-2.667 2V23a2 2 0 002 2h18a2 2 0 002-2v-1.334H5zM14 9.5a.5.5 0 000 1h4a.5.5 0 100-1h-4z"/></svg></template>
<script >
export default {
    name: 'Laptop32',
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
