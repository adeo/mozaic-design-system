<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M24.908 4.58a1 1 0 00-1.816 0L17.32 17.088 3.86 19.01a1 1 0 00-.492 1.764l10.49 8.584-3.818 13.367a1 1 0 001.485 1.127L24 36.174l12.476 7.678a1 1 0 001.486-1.127l-3.82-13.367 10.491-8.584a1 1 0 00-.492-1.764L30.68 17.087 24.908 4.581z"/></svg></template>
<script >
export default {
    name: 'ViewStarFull48',
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
