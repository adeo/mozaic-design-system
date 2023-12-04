<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2a5 5 0 00-5 5v2H5a1 1 0 00-1 1v11a1 1 0 001 1h14a1 1 0 001-1V10a1 1 0 00-1-1h-2V7a5 5 0 00-5-5zm3 7V7a3 3 0 10-6 0v2h6zM6 20v-9h12v9H6z"/></svg></template>
<script >
export default {
    name: 'PublishLock24',
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
