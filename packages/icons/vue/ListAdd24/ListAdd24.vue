<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 11.5h-4.5a.5.5 0 000 1h4.5a.5.5 0 000-1zM14.25 14.5h-4.5a.5.5 0 000 1h4.5a.5.5 0 000-1zM9.75 9.5h2.5a.5.5 0 000-1h-2.5a.5.5 0 000 1z"/><path d="M21 6a4 4 0 00-7.44-2H7a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9.86A4 4 0 0021 6zM8 18V6h5a4 4 0 003 3.86V18zm9-9a3 3 0 113-3 3 3 0 01-3 3z"/><path d="M18.5 5.5h-1v-1a.5.5 0 00-1 0v1h-1a.5.5 0 000 1h1v1a.5.5 0 001 0v-1h1a.5.5 0 000-1z"/></svg></template>
<script >
export default {
    name: 'ListAdd24',
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
