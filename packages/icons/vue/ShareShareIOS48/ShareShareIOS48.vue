<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M18.25 13.37l4.25-4.25V30.5a1.5 1.5 0 003 0V9.12l4.25 4.25a1.51 1.51 0 001.06.44 1.5 1.5 0 001.06-2.56l-6.81-6.81a1.49 1.49 0 00-2.12 0l-6.81 6.81a1.5 1.5 0 102.12 2.12z"/><path d="M35 7a1.5 1.5 0 000 3h3v28H10V10h3a1.5 1.5 0 000-3H9a2 2 0 00-2 2v30a2 2 0 002 2h30a2 2 0 002-2V9a2 2 0 00-2-2z"/></svg></template>
<script >
export default {
    name: 'ShareShareIOS48',
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
