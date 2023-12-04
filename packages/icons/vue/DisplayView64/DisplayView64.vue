<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M57.18 31C52.39 22.35 42.46 13 32 13S11.61 22.35 6.82 31a2 2 0 000 1.94C11.61 41.65 21.54 51 32 51s20.39-9.35 25.18-18a2 2 0 000-2zM32 48c-8.66 0-17.67-8-22.28-16C14.33 24 23.34 16 32 16s17.67 8 22.28 16C49.67 40 40.66 48 32 48z"/><path d="M32 19.93a12 12 0 1012 12 12 12 0 00-12-12zm0 21a9 9 0 119-9 9 9 0 01-9 9z"/></svg></template>
<script >
export default {
    name: 'DisplayView64',
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
