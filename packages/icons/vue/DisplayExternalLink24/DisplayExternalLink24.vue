<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13 2a1 1 0 100 2h5.586L8.293 14.293a1 1 0 101.414 1.414L20 5.414V11a1 1 0 102 0V3a1 1 0 00-1-1h-8zM3 6a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 10-2 0v3H4V8h3a1 1 0 000-2H3z"/></svg></template>
<script >
export default {
    name: 'DisplayExternalLink24',
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
