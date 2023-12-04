<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M39 36.37a1.5 1.5 0 10-.32 3C49.93 40.58 56 44.47 56 47.5c0 4-9.86 8.5-24 8.5S8 51.52 8 47.5c0-2.94 5.57-6.64 16.21-8a1.5 1.5 0 10-.38-3C12.39 38 5 42.3 5 47.5 5 54.06 16.61 59 32 59s27-4.94 27-11.5c0-5.44-7.85-9.8-20-11.13z"/><path d="M22.06 18.35l8.44-8.44v31.88a1.5 1.5 0 003 0V9.91l8.44 8.44a1.5 1.5 0 002.12 0 1.49 1.49 0 000-2.12L33.41 5.59a2 2 0 00-2.82 0L19.94 16.23a1.5 1.5 0 002.12 2.12z"/></svg></template>
<script >
export default {
    name: 'Upload64',
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
