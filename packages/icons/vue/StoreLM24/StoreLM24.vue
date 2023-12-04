<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 8h-2.09l-5.35-5.35a1.49 1.49 0 00-2.12 0L5.59 8H3.5A1.5 1.5 0 002 9.5v11A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 8zM15 20h-2.5v-4H15zm-3.5 0H9v-4h2.5zm8.5 0h-4v-4.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5V20H4V10h2.41L12 4.41 17.59 10H20z"/><path d="M12.35 7.85a.5.5 0 00-.7 0l-3.8 3.8a.5.5 0 00.36.85h7.58a.5.5 0 00.36-.85z"/></svg></template>
<script >
export default {
    name: 'StoreLM24',
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
