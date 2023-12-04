<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M42 10H6a2 2 0 00-2 2v24a2 2 0 002 2h36a2 2 0 002-2V12a2 2 0 00-2-2zm-1 25H7V13h34z"/><path d="M17 26.5a5 5 0 014.93 4.15 1 1 0 001 .85 1 1 0 001-1.14 7 7 0 00-4.66-5.48 4.5 4.5 0 10-4.5 0 7 7 0 00-4.66 5.48 1 1 0 001 1.14 1 1 0 001-.85A5 5 0 0117 26.5zm0-8a2.5 2.5 0 11-2.5 2.5 2.5 2.5 0 012.5-2.5z"/><rect x="26" y="18" width="12" height="2" rx="1"/><rect x="26" y="23" width="12" height="2" rx="1"/></svg></template>
<script >
export default {
    name: 'CardIDCard48',
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
