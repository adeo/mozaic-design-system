<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.83 17.45l-.65-1A7 7 0 0118 12.58V10a6 6 0 00-5-5.91.29.29 0 000-.09V3a1 1 0 00-2 0v1a.29.29 0 000 .09A6 6 0 006 10v2.58a7 7 0 01-1.18 3.88l-.65 1a1 1 0 000 1A1 1 0 005 19h3.14a4 4 0 007.72 0H19a1 1 0 00.88-.53 1 1 0 00-.05-1.02zM12 20a2 2 0 01-1.72-1h3.44A2 2 0 0112 20zm-5.16-3a9 9 0 00.94-2.5H11a.5.5 0 000-1H7.94c0-.31.06-.61.06-.92V10a4 4 0 018 0v2.58A9 9 0 0017.16 17z"/></svg></template>
<script >
export default {
    name: 'NotificationBell24',
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
