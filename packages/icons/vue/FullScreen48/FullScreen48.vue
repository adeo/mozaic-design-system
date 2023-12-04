<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M11 13v22a2 2 0 002 2h22a2 2 0 002-2V13a2 2 0 00-2-2H13a2 2 0 00-2 2zm3 1h20v20H14zM5.5 16A1.5 1.5 0 007 14.52V7h7.51a1.5 1.5 0 100-3H6a2 2 0 00-2 2v8.51A1.5 1.5 0 005.5 16zM33.49 4a1.5 1.5 0 000 3H41v7.51a1.5 1.5 0 003 0V6a2 2 0 00-2-2zM14.51 41H7v-7.52a1.5 1.5 0 00-3 0V42a2 2 0 002 2h8.51a1.5 1.5 0 100-3zM42.5 32a1.5 1.5 0 00-1.5 1.5V41h-7.51a1.5 1.5 0 000 3H42a2 2 0 002-2v-8.51A1.5 1.5 0 0042.5 32z"/></svg></template>
<script >
export default {
    name: 'FullScreen48',
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
