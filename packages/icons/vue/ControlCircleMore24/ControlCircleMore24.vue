<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/><path d="M15.5 11h-2.42V8.5a1 1 0 00-2 0V11H8.5a1 1 0 000 2h2.58v2.5a1 1 0 002 0V13h2.42a1 1 0 000-2z"/></svg></template>
<script >
export default {
    name: 'ControlCircleMore24',
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
