<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 2a1 1 0 000 2h1v17a1 1 0 001 1h4a1 1 0 00.962-1.275l-.065-.225h4.206l-.064.225A1 1 0 0015 22h4a1 1 0 001-1V4h1a1 1 0 100-2H3zm11.674 16.5l.857-3H12.5v3h2.174zm-3.174 0v-3H8.469l.857 3H11.5zm0-4H8.72a5.65 5.65 0 001.52-1.202 8.004 8.004 0 001.26-1.9V14.5zm3.78 0H12.5v-3.102a8.004 8.004 0 001.26 1.9 5.65 5.65 0 001.52 1.202zM6 13V4h4.985c-.141 4.68-1.273 6.905-2.225 7.952-.508.56-.994.817-1.323.937a2.014 2.014 0 01-.454.111H6zm12-9h-4.985c.141 4.68 1.272 6.905 2.225 7.952.508.56.994.817 1.323.937a2.015 2.015 0 00.454.111H18V4zm-1.674 16l1.428-5H18v5h-1.674zM6 15h.246l1.428 5H6v-5z"/></svg></template>
<script >
export default {
    name: 'Curtains24',
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
