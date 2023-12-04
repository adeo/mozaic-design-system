<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 6.05a7 7 0 00-10.51 9.14l-3.08 3.08a1 1 0 001.41 1.42l3.09-3.09A7 7 0 0018 6.05zm-1.41 8.49a5 5 0 110-7.08 5 5 0 01.04 7.08z"/></svg></template>
<script >
export default {
    name: 'DisplaySearch24',
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
