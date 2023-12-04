<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M53 9h-8.5a1.5 1.5 0 000 3H52v40H12V12h7.5a1.5 1.5 0 000-3H11a2 2 0 00-2 2v42a2 2 0 002 2h42a2 2 0 002-2V11a2 2 0 00-2-2z"/><path d="M30.59 42.22a2 2 0 001.41.57 2 2 0 001.41-.58l7.65-7.65a1.5 1.5 0 00-2.12-2.12l-5.44 5.44V6.5a1.5 1.5 0 00-3 0v31.41l-5.45-5.38A1.5 1.5 0 1023 34.66z"/></svg></template>
<script >
export default {
    name: 'DownloadApp64',
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
