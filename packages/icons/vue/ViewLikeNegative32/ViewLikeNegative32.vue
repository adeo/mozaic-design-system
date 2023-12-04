<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.07 17.05l-2.67-8A3 3 0 0022.56 7h-6.47a5 5 0 00-2.54.7L12 8.64A2 2 0 0010 7H6.85a2 2 0 00-2 1.67l-1.66 10a2 2 0 00.44 1.62 2 2 0 001.55.71h6.44l5 6.79a3 3 0 005.25-2.47L20.78 21h4.45a3 3 0 002.84-3.95zM10 19H5.18L6.85 9H10zm16-.42a1 1 0 01-.81.42h-7l1.7 6.81a1 1 0 01-.17.82 1 1 0 01-1.53 0L12 18.13v-7.19l2.57-1.52A2.93 2.93 0 0116.09 9h6.47a1 1 0 011 .68l2.66 8a1 1 0 01-.22.9z"/></svg></template>
<script >
export default {
    name: 'ViewLikeNegative32',
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
