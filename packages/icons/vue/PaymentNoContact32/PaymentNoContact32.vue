<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 7H5a2 2 0 00-2 2v14a2 2 0 002 2h22a2 2 0 002-2V9a2 2 0 00-2-2zm0 16H5V9h22z"/><path d="M7.5 19h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1zm0-2.5H9V18H7.5zm4 1.5H10v-4h1.5zM9 14v1.5H7.5V14z"/><circle cx="18" cy="16" r="1"/><path d="M22.11 20.11a.52.52 0 00.35.14.51.51 0 00.36-.15 5.84 5.84 0 000-8.2.5.5 0 10-.72.7 4.83 4.83 0 010 6.8.5.5 0 00.01.71z"/><path d="M20 18.34a.49.49 0 00.35.14.51.51 0 00.36-.15 3.31 3.31 0 000-4.66.5.5 0 10-.71.7 2.32 2.32 0 010 3.26.5.5 0 000 .71z"/></svg></template>
<script >
export default {
    name: 'PaymentNoContact32',
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
