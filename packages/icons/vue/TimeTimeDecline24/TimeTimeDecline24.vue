<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.4 5.3l.6-.59.15.14a.48.48 0 00.7 0 .48.48 0 000-.7l-1-1a.49.49 0 00-.7.7l.14.15-.59.6a9.93 9.93 0 00-13.4 0L4.21 3.5l.64-.65a.49.49 0 00-.7-.7l-2 2a.48.48 0 000 .7.48.48 0 00.7 0l.65-.64L4.6 5.3a10 10 0 1014.8 0zM12 20a8 8 0 118-8 8 8 0 01-8 8z"/><path d="M15.15 8.15l-2.7 2.69a1.34 1.34 0 00-.45-.09A1.25 1.25 0 1013.25 12a1.34 1.34 0 00-.09-.45l2.69-2.7a.49.49 0 00-.7-.7z"/></svg></template>
<script >
export default {
    name: 'TimeTimeDecline24',
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
