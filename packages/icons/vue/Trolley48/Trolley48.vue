<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M4.5 6A1.5 1.5 0 016 4.5h4A1.5 1.5 0 0111.5 6v23.5h5V15a1.5 1.5 0 011.5-1.5h16a1.5 1.5 0 011.5 1.5v14.5h3.879l1.56-1.56a1.5 1.5 0 012.122 2.12l-2 2A1.5 1.5 0 0140 32.5H10A1.5 1.5 0 018.5 31V7.5H6A1.5 1.5 0 014.5 6zm28 10.5v13h-13v-13H25V20a1 1 0 102 0v-3.5h5.5zM17 38.5a1 1 0 100 2 1 1 0 000-2zm-4 1a4 4 0 118 0 4 4 0 01-8 0zm19.5 0a1 1 0 112 0 1 1 0 01-2 0zm1-4a4 4 0 100 8 4 4 0 000-8z"/></svg></template>
<script >
export default {
    name: 'Trolley48',
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
