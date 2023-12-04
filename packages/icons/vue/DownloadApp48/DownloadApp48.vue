<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M22.94 31.56a1.5 1.5 0 002.12 0l6.5-6.5a1.5 1.5 0 00-2.12-2.12l-3.94 3.94V5.5a1.5 1.5 0 00-3 0v21.38l-3.94-3.94a1.5 1.5 0 00-2.12 2.12z"/><path d="M39 7h-4a1.5 1.5 0 000 3h3v28H10V10h3a1.5 1.5 0 000-3H9a2 2 0 00-2 2v30a2 2 0 002 2h30a2 2 0 002-2V9a2 2 0 00-2-2z"/></svg></template>
<script >
export default {
    name: 'DownloadApp48',
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
