<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M6 4.5A1.5 1.5 0 004.5 6v28A1.5 1.5 0 006 35.5h16.5v5H14a1.5 1.5 0 000 3h20a1.5 1.5 0 000-3h-8.5v-5H42a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0042 4.5H6zm18 28h16.5v-11h-33v11H24zm16.5-14h-33v-11h33v11zm-27.5-7a1.5 1.5 0 000 3h4a1.5 1.5 0 000-3h-4zm0 14a1.5 1.5 0 000 3h4a1.5 1.5 0 000-3h-4z"/></svg></template>
<script >
export default {
    name: 'Server48',
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
