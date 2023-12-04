<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g clip-path="url(#a)"><path fill-rule="evenodd" d="M8.5 7a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zm2-9a2 2 0 11-4 0 2 2 0 014 0zm5-5a2 2 0 100-4 2 2 0 000 4zm2 12a2 2 0 11-4 0 2 2 0 014 0zm-2-5a2 2 0 100-4 2 2 0 000 4z"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg></template>
<script >
export default {
    name: 'DisplayMovingBlock24',
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
