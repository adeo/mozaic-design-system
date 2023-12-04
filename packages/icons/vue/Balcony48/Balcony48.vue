<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M42.5 25h-37a1.5 1.5 0 000 3H7v13.09A1.5 1.5 0 007.5 44h33a1.5 1.5 0 00.5-2.91V28h1.5a1.5 1.5 0 000-3zM17 28h2v13h-2zm-2 13h-2V28h2zm6-13h2v13h-2zm4 0h2v13h-2zm4 0h2v13h-2zm4 0h2v13h-2zm-22 0v13H9V28zm28 13h-2V28h2zM13 14h10v9h2v-9h10v9h3V6a2 2 0 00-2-2H12a2 2 0 00-2 2v17h3zm22-2H25V7h10zM23 7v5H13V7z"/><path d="M28 21a1 1 0 000 2h3a1 1 0 000-2z"/></svg></template>
<script >
export default {
    name: 'Balcony48',
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
