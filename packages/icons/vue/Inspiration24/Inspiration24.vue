<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2H7a1 1 0 00-1 1v18a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM8 15.12l3-6 2.05 4.1a.52.52 0 00.9 0l1.05-2.1 2.19 4.38H8zM18 4v10.88l-2.55-5.1a.52.52 0 00-.9 0l-1.05 2.1-2.05-4.1a.52.52 0 00-.9 0L8 12.88V4zm0 16H8v-3.5h10z"/><path d="M15.5 8A1.5 1.5 0 1014 6.5 1.5 1.5 0 0015.5 8z"/></svg></template>
<script >
export default {
    name: 'Inspiration24',
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
