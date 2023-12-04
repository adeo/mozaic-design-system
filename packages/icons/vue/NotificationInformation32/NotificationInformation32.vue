<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 29a13 13 0 1113-13 13 13 0 01-13 13zm0-24a11 11 0 1011 11A11 11 0 0016 5z"/><path d="M16 21.7a1 1 0 01-1-1v-5.83a1 1 0 112 0v5.83a1 1 0 01-1 1z"/><circle cx="16" cy="11.3" r="1"/></svg></template>
<script >
export default {
    name: 'NotificationInformation32',
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
