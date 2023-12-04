<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M38.1 33.5H38V16A10.51 10.51 0 0027.5 5.5H18v-.1A1.4 1.4 0 0016.6 4h-2.2A1.4 1.4 0 0013 5.4v.1h-2.5A3.5 3.5 0 007 9v7a3.5 3.5 0 003.5 3.5H13v.1a1.4 1.4 0 001.4 1.4h2.2a1.4 1.4 0 001.4-1.4v-.1h5.5a.5.5 0 01.5.5v13.5h-.1a1.4 1.4 0 00-1.4 1.4v2.2a1.4 1.4 0 001.4 1.4h.1v2a3.5 3.5 0 003.5 3.5h7a3.5 3.5 0 003.5-3.5v-2h.1a1.4 1.4 0 001.4-1.4v-2.2a1.4 1.4 0 00-1.4-1.4zm-27.6-17a.5.5 0 01-.5-.5V9a.5.5 0 01.5-.5H13v8zM16 19h-1V6h1zm7.5-2.5H18v-8h9.5A7.5 7.5 0 0135 16v17.5h-8V20a3.5 3.5 0 00-3.5-3.5zm14 20h-13v-1h13zm-2.5 4a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2h8z"/></svg></template>
<script >
export default {
    name: 'Pipe48',
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
