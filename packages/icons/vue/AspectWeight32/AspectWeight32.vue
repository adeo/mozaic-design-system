<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6.2 29h19.6a2 2 0 002-2.36l-2.57-14a2 2 0 00-2-1.64h-2.34a5.5 5.5 0 10-9.78 0H8.77a2 2 0 00-2 1.64l-2.57 14a2 2 0 002 2.36zm6.3-20.5a3.5 3.5 0 017 0 3.47 3.47 0 01-1.08 2.5h-4.84a3.47 3.47 0 01-1.08-2.5zM8.77 13h14.46l2.57 14H6.2z"/></svg></template>
<script >
export default {
    name: 'AspectWeight32',
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
