<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.14 4H6.86a.9.9 0 00-.86.94v14.12a.9.9 0 00.86.94h10.28a.9.9 0 00.86-.94V4.94a.9.9 0 00-.86-.94zM16 18H8V6h8z"/><path d="M9.75 12.5h4.5a.5.5 0 000-1h-4.5a.5.5 0 000 1zM9.75 15.5h4.5a.5.5 0 000-1h-4.5a.5.5 0 000 1zM9.75 9.5h4.5a.5.5 0 000-1h-4.5a.5.5 0 000 1z"/></svg></template>
<script >
export default {
    name: 'ListStandard24',
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
