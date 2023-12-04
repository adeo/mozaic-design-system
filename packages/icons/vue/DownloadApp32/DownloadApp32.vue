<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15.29 20.71a1 1 0 001.42 0l4-4a1 1 0 00-1.42-1.42L17 17.59V4a1 1 0 00-2 0v13.59l-2.29-2.3a1 1 0 00-1.42 1.42z"/><path d="M25 5h-1.67a1 1 0 000 2H25v18H7V7h1.67a1 1 0 000-2H7a2 2 0 00-2 2v18a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2z"/></svg></template>
<script >
export default {
    name: 'DownloadApp32',
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
