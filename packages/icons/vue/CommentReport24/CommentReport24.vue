<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 3v18a1 1 0 001 1 1 1 0 001-1v-7.36l10.41-4.73a1 1 0 000-1.82l-11-5A1 1 0 006 3zm2 1.55L15.58 8 8 11.45z"/></svg></template>
<script >
export default {
    name: 'CommentReport24',
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
