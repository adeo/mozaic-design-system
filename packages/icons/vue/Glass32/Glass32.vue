<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M4.667 27.333V4.667h22.667v22.666H4.667zm-2-23.666a1 1 0 011-1h24.667a1 1 0 011 1v24.666a1 1 0 01-1 1H3.667a1 1 0 01-1-1V3.667zm7.687 4.02a.5.5 0 00-.707-.707L6.98 9.646a.5.5 0 10.707.707l2.667-2.666zm4 3.293a.5.5 0 010 .707l-2.667 2.666a.5.5 0 11-.707-.707l2.667-2.666a.5.5 0 01.707 0zm0-3.293a.5.5 0 00-.707-.707L6.98 13.646a.5.5 0 10.707.707l6.667-6.666z"/></svg></template>
<script >
export default {
    name: 'Glass32',
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
