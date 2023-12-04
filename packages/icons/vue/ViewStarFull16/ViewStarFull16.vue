<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.906 2.077a1 1 0 00-1.812 0L5.558 5.37l-3.254.65a1 1 0 00-.437 1.755l2.296 1.879-.648 3.673a1 1 0 001.566.988L8 12.229l2.919 2.085a1 1 0 001.566-.988l-.648-3.673 2.296-1.879a1 1 0 00-.437-1.755l-3.254-.65-1.536-3.292z"/></svg></template>
<script >
export default {
    name: 'ViewStarFull16',
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
