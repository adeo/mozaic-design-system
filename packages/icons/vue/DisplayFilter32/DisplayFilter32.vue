<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M17 16.17a1 1 0 000-.17V6a1 1 0 00-2 0v10a1 1 0 000 .17 3 3 0 000 5.65V26a1 1 0 002 0v-4.18a3 3 0 000-5.65zM16 20a1 1 0 111-1 1 1 0 01-1 1zM28 16a3 3 0 00-2-2.82V6a1 1 0 00-2 0v7.18a3 3 0 000 5.64V26a1 1 0 002 0v-7.18A3 3 0 0028 16zm-3 1a1 1 0 111-1 1 1 0 01-1 1zM8 10.17A1 1 0 008 10V6a1 1 0 00-2 0v4a1 1 0 000 .17 3 3 0 000 5.66.86.86 0 000 .17v10a1 1 0 001 1 1 1 0 001-1V16a1 1 0 000-.17 3 3 0 000-5.66zM7 14a1 1 0 111-1 1 1 0 01-1 1z"/></svg></template>
<script >
export default {
    name: 'DisplayFilter32',
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
