<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 18.68a1 1 0 01-.7-.29l-5-5A1 1 0 015.73 12L10 16.27 18.31 8a1 1 0 011.42 1.42l-9 9a1 1 0 01-.73.26z"/></svg></template>
<script >
export default {
    name: 'NotificationAvailable24',
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
