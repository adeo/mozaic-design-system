<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 4A16.53 16.53 0 007.5 20.51c0 7.34 10.66 18.68 14.84 22.84a2.34 2.34 0 003.32 0c4.18-4.16 14.84-15.5 14.84-22.84A16.53 16.53 0 0024 4zm0 36.8c-8.34-8.39-13.5-16.12-13.5-20.25a13.5 13.5 0 1127 0c0 4.09-5.16 11.82-13.5 20.21z"/><path d="M32.51 14.39l-8-4.75a1 1 0 00-1 0l-8 4.75a1 1 0 00-.49.86v9.5a1 1 0 00.49.86l8 4.75a1 1 0 001 0l8-4.75a1 1 0 00.49-.86v-9.5a1 1 0 00-.49-.86zM24 11.66l6 3.59-1.8 1.09-6-3.59zm-1 16.08l-6-3.56V17l6 3.56zm1-8.9l-6-3.59 2.26-1.34 6 3.59zm7 5.34l-6 3.56v-7.17L31 17z"/></svg></template>
<script >
export default {
    name: 'MonochromeRelayLocation48',
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
