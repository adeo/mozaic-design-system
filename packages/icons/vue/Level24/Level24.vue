<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.67 4.69l-1.93-.31.32-.87-3.24-1.18a5.57 5.57 0 00-5.57 1l-1 .88a.5.5 0 00.28.87 19.16 19.16 0 013.87.74l-.46 1.26a.49.49 0 00.3.64L14.53 9a.5.5 0 00.64-.3l.31-.83 1.68 1a.5.5 0 00.71-.27l1.18-3.22a.5.5 0 00-.38-.69zM9.27 13.73L7 20a1.5 1.5 0 00.9 1.92 1.52 1.52 0 00.51.09 1.5 1.5 0 001.41-1l2.25-6.26L14 9.51l-2.82-1z"/></svg></template>
<script >
export default {
    name: 'Level24',
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
