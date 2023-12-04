<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2H6a1 1 0 00-1 1v18a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zm-1 18H7V4h10z"/><path d="M9.25 18h5.5a.5.5 0 000-1h-5.5a.5.5 0 000 1zM10 9.5a1 1 0 001-1 1 1 0 111.49.87A3 3 0 0011 12a1 1 0 002 0 1 1 0 01.47-.89A3 3 0 109 8.5a1 1 0 001 1zM12.38 13.58a.6.6 0 00-.19-.06 1 1 0 00-.9.27 1.05 1.05 0 00-.29.71 1 1 0 001.38.92 1.15 1.15 0 00.33-.21 1 1 0 00.29-.71 1.05 1.05 0 00-.29-.71l-.15-.12z"/></svg></template>
<script >
export default {
    name: 'Survey24',
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
