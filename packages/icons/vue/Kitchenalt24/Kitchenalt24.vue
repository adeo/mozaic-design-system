<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6.25 2a1 1 0 00-1 1v4.5H4.5a.5.5 0 000 1H12a.5.5 0 000-1h-.75V3a1 1 0 00-1-1h-4zm3 5.5V4h-2v3.5h2zM14 5a1 1 0 011-1h6a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1v-7a1 1 0 011-1h1a1 1 0 011-1h6.5a1 1 0 011 1H14V5zm0 10v5H9.5v-5H14zm-5.5 0v5H4v-5h4.5zM20 20h-4v-9.5h4V20zm0-10.5h-4V6h4v3.5z"/></svg></template>
<script >
export default {
    name: 'Kitchenalt24',
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
