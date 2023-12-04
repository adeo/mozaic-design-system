<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M38.49 36.51A17 17 0 0111.11 30H30.5a1.5 1.5 0 000-3H10.28a16.21 16.21 0 010-6H30.5a1.5 1.5 0 000-3H11.11a17 17 0 0127.38-6.51 1.49 1.49 0 102-2.2A20 20 0 007.92 18H5.5a1.5 1.5 0 000 3h1.75A19.8 19.8 0 007 24a19.8 19.8 0 00.25 3H5.5a1.5 1.5 0 000 3h2.42a20 20 0 0032.59 8.71 1.49 1.49 0 10-2-2.2z"/></svg></template>
<script >
export default {
    name: 'Euro48',
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
