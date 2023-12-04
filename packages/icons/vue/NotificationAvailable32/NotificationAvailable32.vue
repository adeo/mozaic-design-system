<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M13.31 21a1 1 0 01-.67-.26l-7.31-6.57a1 1 0 111.34-1.48l6.61 5.94 12-11.84a1 1 0 011.4 1.42L14 20.71a1 1 0 01-.69.29z"/></svg></template>
<script >
export default {
    name: 'NotificationAvailable32',
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
