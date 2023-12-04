<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.293 7.793a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L12 9.914l-6.293 6.293a1 1 0 01-1.414-1.414l7-7z"/></svg></template>
<script >
export default {
    name: 'ArrowArrowTop24',
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
