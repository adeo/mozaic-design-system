<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 4.5h-.18A4.94 4.94 0 0011 2a5 5 0 00-5 4.42A5 5 0 1011 15v6a1 1 0 002 0v-3.29l2.23-2.23h.27a5.5 5.5 0 000-11zM13 16.29v-1.42a5.53 5.53 0 001 .4zm2.5-2.79a3.46 3.46 0 01-2.5-1.09V10a1 1 0 00-2 0v1.53l-.21.54a3 3 0 11-3.53-4l.79-.2v-.82L8 7a3 3 0 013-3 3 3 0 012.79 1.94l.3.77.81-.15a3.77 3.77 0 01.6-.06 3.5 3.5 0 010 7z"/></svg></template>
<script >
export default {
    name: 'Garden224',
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
