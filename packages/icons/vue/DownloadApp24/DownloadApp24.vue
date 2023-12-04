<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.29 12.71l3 3a1 1 0 001.42 0l3-3a1 1 0 00-1.42-1.42L13 12.59V3a1 1 0 00-2 0v9.59l-1.29-1.3a1 1 0 00-1.42 1.42z"/><path d="M19 4h-2a1 1 0 000 2h1v12H6V6h1a1 1 0 000-2H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1z"/></svg></template>
<script >
export default {
    name: 'DownloadApp24',
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
