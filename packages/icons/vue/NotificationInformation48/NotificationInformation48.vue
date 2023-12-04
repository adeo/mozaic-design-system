<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 32.75a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 013 0v9a1.5 1.5 0 01-1.5 1.5z"/><circle cx="24" cy="16.75" r="1.5"/><path d="M24 7A17 17 0 117 24 17 17 0 0124 7m0-3a20 20 0 1020 20A20 20 0 0024 4z"/></svg></template>
<script >
export default {
    name: 'NotificationInformation48',
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
