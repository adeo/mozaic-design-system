<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6 4a1 1 0 00-.707 1.707L5.586 6H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V7a1 1 0 00-1-1h-3.06l.297-.324A1 1 0 0017.5 4H6zm10.107 4l-3.37 3.676a1 1 0 01-1.444.031L7.586 8H4v10h4v-4.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5V18h4V8h-3.893zm-7.4-1.707l3.262 3.261L15.227 6H8.414l.293.292v.001zM9 14h2.5v4H9v-4zm3.5 0v4H15v-4h-2.5z"/></svg></template>
<script >
export default {
    name: 'StoreBM24',
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
