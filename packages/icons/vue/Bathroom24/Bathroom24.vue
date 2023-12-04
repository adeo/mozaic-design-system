<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 13h-1V2.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v3.05A2.5 2.5 0 0012 8a.5.5 0 00.5.5h4A.5.5 0 0017 8a2.5 2.5 0 00-2-2.45V3h4v10H3a1 1 0 00-1 1v2a4 4 0 003.58 4L4.4 21.15a.48.48 0 000 .7.48.48 0 00.7 0L7 20h10l1.86 1.85a.48.48 0 00.7 0 .48.48 0 000-.7L18.42 20A4 4 0 0022 16v-2a1 1 0 00-1-1zm-1 3a2 2 0 01-2 2H6a2 2 0 01-2-2v-1h16z"/></svg></template>
<script >
export default {
    name: 'Bathroom24',
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
