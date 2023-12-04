<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.74 13.61l-1.28-6.39A4 4 0 0016.54 4h-5.19a3 3 0 00-1 .18l-1.39.5A1 1 0 008 4H4.31a1 1 0 00-1 .87L2 14.87A1 1 0 003 16h5a1 1 0 00.41-.09l3.83 5A3 3 0 0014.56 22a2.86 2.86 0 001.3-.31A2.94 2.94 0 0017.27 18l-.79-2h3.3a2 2 0 002-2.39zM7 14H4.14l1.05-8H7zm6.52 0l1.89 4.73a.92.92 0 01-1.59.91L9 13.41V6.78l2-.72a1 1 0 01.35-.06h5.19a2 2 0 012 1.61L19.78 14z"/></svg></template>
<script >
export default {
    name: 'ViewLikeNegative24',
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
