<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M9 4v24a1 1 0 001 1 1 1 0 001-1V16.68l14.37-5.75a1 1 0 000-1.86l-15-6A1 1 0 009 4zm2 1.48L22.31 10 11 14.52z"/></svg></template>
<script >
export default {
    name: 'CommentReport32',
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
