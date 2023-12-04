<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M16.908 2.914a1 1 0 00-1.816 0l-3.772 8.173-8.794 1.256a1 1 0 00-.492 1.764l6.824 5.584-2.486 8.7a1 1 0 001.486 1.127L16 24.508l8.143 5.01a1 1 0 001.486-1.126l-2.487-8.701 6.825-5.584a1 1 0 00-.492-1.764l-8.795-1.256-3.772-8.173zM16 5.72v16.44l.524.322 6.474 3.983-1.96-6.857-.18-.632.51-.417 5.57-4.558-7.08-1.011-.538-.077-.228-.494L16 5.719z"/></svg></template>
<script >
export default {
    name: 'ViewStarHalf32',
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
