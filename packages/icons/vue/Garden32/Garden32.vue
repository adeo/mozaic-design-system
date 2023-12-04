<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g clip-path="url(#a)"><path fill-rule="evenodd" d="M7.086 6.008a1 1 0 00-1.505 0L3.247 8.675A1 1 0 003 9.333v16a1 1 0 001 1h4.667a1 1 0 001-1v-2.166h3v2.166a1 1 0 001 1h4.666a1 1 0 001-1v-2.166h3v2.166a1 1 0 001 1H28a1 1 0 001-1v-16a1 1 0 00-.247-.658l-2.334-2.667a1 1 0 00-1.505 0l-2.333 2.667a1 1 0 00-.248.658v3.5h-3v-3.5a1 1 0 00-.247-.658l-2.333-2.667a1 1 0 00-1.506 0l-2.333 2.667a1 1 0 00-.247.658v3.5h-3v-3.5a1 1 0 00-.248-.658L7.086 6.008zm2.58 7.825V15.5h3v-1.667h-3zm3 2.667h-3v3h3v-3zm0 4h-3v1.666h3V20.5zm6.667-6.667V15.5h3v-1.667h-3zm3 2.667h-3v3h3v-3zm0 4h-3v1.666h3V20.5zM5 24.333V9.71l1.333-1.524L7.667 9.71v14.624H5zm9.667 0V9.71L16 8.185l1.333 1.524v14.624h-2.666zM24.333 9.71v14.624H27V9.71l-1.333-1.524-1.334 1.524z"/></g><defs><clipPath id="a"><path d="M0 0h32v32H0z"/></clipPath></defs></svg></template>
<script >
export default {
    name: 'Garden32',
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
