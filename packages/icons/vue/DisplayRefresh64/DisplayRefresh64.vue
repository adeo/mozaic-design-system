<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M55.66 41.66a1.51 1.51 0 00-2 .7A24 24 0 1151.48 18H42a1.5 1.5 0 000 3h12.5a2 2 0 002-2V6.5a1.5 1.5 0 00-3 0v9.17a27 27 0 102.86 28 1.5 1.5 0 00-.7-2.01z"/></svg></template>
<script >
export default {
    name: 'DisplayRefresh64',
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
