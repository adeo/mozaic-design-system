<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M57 5H37.91a2 2 0 00-1.42.59l-30.95 31a2 2 0 000 2.82l19.05 19.05a2 2 0 002.82 0l31-30.95a2 2 0 00.59-1.42V7a2 2 0 00-2-2zm-1 20.68l-30 30L8.37 38l30-30H56z"/><path d="M47.09 21.91a5 5 0 10-5-5 5 5 0 005 5zm0-7a2 2 0 11-2 2 2 2 0 012-2z"/></svg></template>
<script >
export default {
    name: 'PromiseProductOnPicture64',
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
