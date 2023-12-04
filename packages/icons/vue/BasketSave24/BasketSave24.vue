<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.79 6.38A1 1 0 0020 6h-6.5V2.5a.5.5 0 00-1 0V6H6.71l-.59-2.25a1 1 0 00-1-.75H3a1 1 0 000 2h1.38l2.68 10.25A1 1 0 008 16h10a1 1 0 001-.76l2-8a1 1 0 00-.21-.86zM17.22 14H8.8L7.23 8h5.27v3.29l-1.65-1.64a.49.49 0 00-.7.7l2.5 2.5a.36.36 0 00.16.11.47.47 0 00.38 0 .36.36 0 00.16-.11l2.5-2.5a.49.49 0 00-.7-.7l-1.65 1.64V8h5.22z"/><circle cx="16.5" cy="20" r="2"/><circle cx="9.5" cy="20" r="2"/></svg></template>
<script >
export default {
    name: 'BasketSave24',
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
