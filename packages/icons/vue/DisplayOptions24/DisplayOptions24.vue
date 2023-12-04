<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M14 5a2 2 0 11-4 0 2 2 0 014 0zm0 14a2 2 0 11-4 0 2 2 0 014 0zm-2-5a2 2 0 100-4 2 2 0 000 4z"/></svg></template>
<script >
export default {
    name: 'DisplayOptions24',
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
