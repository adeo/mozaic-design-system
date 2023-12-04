<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M13.19 11.9a.94.94 0 00.93-1A1.92 1.92 0 0116 9a1.82 1.82 0 011.31.58 1.94 1.94 0 01-.49 3.1 3.12 3.12 0 00-1.76 2.78v.32a.94.94 0 101.88 0v-.32a1.19 1.19 0 01.7-1.05 3.9 3.9 0 001-6.19A3.66 3.66 0 0016 7.07a3.82 3.82 0 00-3.75 3.87 1 1 0 00.94.96z"/><rect x="15.06" y="18" width="1.88" height="1.93" rx=".9"/><path d="M23 3H9a2 2 0 00-2 2v22a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 27V5h14v22z"/><path d="M20.5 21h-9a.5.5 0 000 1h9a.5.5 0 000-1zM20.5 24h-9a.5.5 0 000 1h9a.5.5 0 000-1z"/></svg></template>
<script >
export default {
    name: 'Survey32',
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
