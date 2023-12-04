<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M21.5 17.59V16h1.07a2 2 0 001.88-2.68l-3.27-9A2 2 0 0019.3 3h-6.6a2 2 0 00-1.88 1.32l-3.27 9A2 2 0 009.43 16H15v8h-2a2 2 0 00-2 2v1a2 2 0 002 2h6a2 2 0 002-2v-1a2 2 0 00-2-2h-2v-8h3.5v1.59a1.5 1.5 0 101 0zM19 27h-6v-1h6zM12.7 5h6.6l3.27 9H9.43zM21 19.5a.5.5 0 11.5-.5.5.5 0 01-.5.5z"/></svg></template>
<script >
export default {
    name: 'Lighting32',
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
