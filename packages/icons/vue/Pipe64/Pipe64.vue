<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M51.5 45H51V21A13.52 13.52 0 0037.5 7.5H23V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v.5h-4.5A3.5 3.5 0 009 11v12a3.5 3.5 0 003.5 3.5H17v.5a2 2 0 002 2h2a2 2 0 002-2v-.5h8.5a.5.5 0 01.5.5v18h-.5a2 2 0 00-2 2v2a2 2 0 002 2h.5v4.5a3.5 3.5 0 003.5 3.5h12a3.5 3.5 0 003.5-3.5V51h.5a2 2 0 002-2v-2a2 2 0 00-2-2zm-39-21.5a.5.5 0 01-.5-.5V11a.5.5 0 01.5-.5H17v13zM21 27h-2V7h2zm10.5-3.5H23v-13h14.5A10.51 10.51 0 0148 21v24H35V27a3.5 3.5 0 00-3.5-3.5zm16.5 32a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5V51h13zM31.5 49v-2h20v2z"/></svg></template>
<script >
export default {
    name: 'Pipe64',
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
