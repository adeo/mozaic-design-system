<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M42.5 41H41V21.21l.56.46a1.5 1.5 0 001.88-2.34l-18.5-15a1.5 1.5 0 00-1.87 0L4.57 18.82a1.5 1.5 0 001.86 2.36l.57-.45V41H5.5a1.5 1.5 0 000 3h37a1.5 1.5 0 000-3zm-10-12h-17v-2h17zm-17 2h17v2h-17zm0 4h17v2h-17zm0 4h17v2h-17zm19 2V26a1 1 0 00-1-1h-19a1 1 0 00-1 1v15H10V18.5v-.11l14-11 14 11.39V41z"/><path d="M24 13.5a4.5 4.5 0 104.5 4.5 4.51 4.51 0 00-4.5-4.5zm0 7a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z"/></svg></template>
<script >
export default {
    name: 'Garage48',
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
