<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.33 5.7a1 1 0 000-1.42L16.09 2a1 1 0 10-1.42 1.42l.55.54H5.1A1.1 1.1 0 004 5.1v10l-.53-.53A1 1 0 102.05 16L4 17.9v.1h.1l.19.2a1 1 0 001.42 0l.19-.2H6v-.1L8 16a1 1 0 00-1.42-1.42l-.58.49V6h9.19l-.52.52a1 1 0 101.42 1.41zM13.75 18H13a1 1 0 000 2h.75a1 1 0 000-2zM9.75 18H9a1 1 0 000 2h.75a1 1 0 000-2zM19 12a1 1 0 00-1 1v.75a1 1 0 002 0V13a1 1 0 00-1-1zM19 8a1 1 0 00-1 1v.75a1 1 0 002 0V9a1 1 0 00-1-1zM19 15.9a1 1 0 00-1 1V18h-1a1 1 0 000 2h2a1 1 0 001-1v-.05-2.05a1 1 0 00-1-1z"/></svg></template>
<script >
export default {
    name: 'AspectSize24',
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
