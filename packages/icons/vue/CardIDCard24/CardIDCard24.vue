<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H4V6h16z"/><path d="M10 12.5a3.5 3.5 0 013.5 3.5h1a4.52 4.52 0 00-2.81-4.17 2.5 2.5 0 10-3.38 0A4.52 4.52 0 005.5 16h1a3.5 3.5 0 013.5-3.5zM8.5 10a1.5 1.5 0 111.5 1.5A1.5 1.5 0 018.5 10zM15 9h3a.5.5 0 000-1h-3a.5.5 0 000 1zM15 11h3a.5.5 0 000-1h-3a.5.5 0 000 1z"/></svg></template>
<script >
export default {
    name: 'CardIDCard24',
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
