<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M49 9H15a2 2 0 00-2 2v42a2 2 0 002 2h34a2 2 0 002-2V11a2 2 0 00-2-2zm-1 43H16V12h32z"/><path d="M22.5 33.5h11a1.5 1.5 0 000-3h-11a1.5 1.5 0 000 3zM22.5 24h19a1.5 1.5 0 000-3h-19a1.5 1.5 0 000 3zM22.5 43h11a1.5 1.5 0 000-3h-11a1.5 1.5 0 000 3zM41.5 30.5h-3a1.5 1.5 0 000 3h3a1.5 1.5 0 000-3zM41.5 40h-3a1.5 1.5 0 000 3h3a1.5 1.5 0 000-3z"/></svg></template>
<script >
export default {
    name: 'ListStandard64',
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
