<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M24 4.5a9.5 9.5 0 00-9.5 9.5v4.5H10A1.5 1.5 0 008.5 20v22a1.5 1.5 0 001.5 1.5h28a1.5 1.5 0 001.5-1.5V20a1.5 1.5 0 00-1.5-1.5h-4.5V14A9.5 9.5 0 0024 4.5zm6.5 14V14a6.5 6.5 0 10-13 0v4.5h13zm-19 22v-19h25v19h-25z"/></svg></template>
<script >
export default {
    name: 'PublishLock48',
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
