<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7 13a1 1 0 102 0H7zM8 3l.707-.707a1 1 0 00-1.414 0L8 3zM4.293 5.293a1 1 0 001.414 1.414L4.293 5.293zm6 1.414a1 1 0 101.414-1.414l-1.414 1.414zM9 13V3H7v10h2zM7.293 2.293l-3 3 1.414 1.414 3-3-1.414-1.414zm0 1.414l3 3 1.414-1.414-3-3-1.414 1.414z"/></svg></template>
<script >
export default {
    name: 'ArrowUp16',
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
