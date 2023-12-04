<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M8 5.666a1 1 0 00-.707 1.707l.96.96H4a1 1 0 00-1 1v16a1 1 0 001 1h24a1 1 0 001-1v-16a1 1 0 00-1-1h-4.838l.909-.991a1 1 0 00-.738-1.676H8zm13.329 4.667l-4.592 5.009a1 1 0 01-1.444.031l-5.04-5.04H5v14h5.833v-6.334a.5.5 0 01.5-.5h9.334a.5.5 0 01.5.5v6.334H27v-14h-5.671zm-9.954-1.707l4.594 4.594 5.091-5.554H10.414l.959.959.002.001zm.458 9.873H15.5v5.834h-3.667v-5.834zm4.667 0v5.834h3.667v-5.834H16.5z"/></svg></template>
<script >
export default {
    name: 'StoreBM32',
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
