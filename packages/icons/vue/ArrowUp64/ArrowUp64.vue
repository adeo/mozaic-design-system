<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M30.5 57.5a1.5 1.5 0 003 0h-3zm1.5-51l1.06-1.06a1.5 1.5 0 00-2.12 0L32 6.5zM13.44 22.94a1.5 1.5 0 002.12 2.12l-2.12-2.12zm35 2.12a1.5 1.5 0 002.12-2.12l-2.12 2.12zM33.5 57.5v-51h-3v51h3zM30.94 5.44l-17.5 17.5 2.12 2.12 17.5-17.5-2.12-2.12zm0 2.12l17.5 17.5 2.12-2.12-17.5-17.5-2.12 2.12z"/></svg></template>
<script >
export default {
    name: 'ArrowUp64',
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
