<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M21.18 36.58a1 1 0 00.71-.29L32 26.16l10.06 10.13a1 1 0 001.41-1.41L32 23.32 20.47 34.88a1 1 0 00.71 1.7z"/><path d="M57 13H7a2 2 0 00-2 2v34a2 2 0 002 2h50a2 2 0 002-2V15a2 2 0 00-2-2zm-1 35H8V16h48z"/><path d="M32.71 31.35a1 1 0 00-1.41 0l-5.74 5.77a1 1 0 000 1.41 1 1 0 00.72.3h11.46a1 1 0 001-1 1 1 0 00-.3-.72z"/></svg></template>
<script >
export default {
    name: 'CardLoyaltyCard64',
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
