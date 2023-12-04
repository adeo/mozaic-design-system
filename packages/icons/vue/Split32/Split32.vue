<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g clip-path="url(#a)"><path fill-rule="evenodd" d="M6.667 5.667a1 1 0 00-1 1V12a1 1 0 102 0V9.08L15 16.415v8.92a1 1 0 102 0V16a1 1 0 00-.293-.707L9.081 7.667h2.92a1 1 0 100-2H6.666zM24.333 9.08V12a1 1 0 102 0V6.667a1 1 0 00-1-1H20a1 1 0 100 2h2.92l-4.294 4.292a1 1 0 001.415 1.415l4.292-4.293z"/></g><defs><clipPath id="a"><path d="M0 0h32v32H0z"/></clipPath></defs></svg></template>
<script >
export default {
    name: 'Split32',
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
