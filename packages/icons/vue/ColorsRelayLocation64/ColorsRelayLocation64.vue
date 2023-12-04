<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#006902" fill-rule="evenodd" d="M32 5C19.578 5.011 9.511 15.078 9.5 27.5c0 11.24 17.63 27.65 21.17 30.83a2 2 0 002.66-.01C36.87 55.15 54.5 38.74 54.5 27.5 54.489 15.078 44.422 5.011 32 5z"/><path fill="#fff" d="M43 19.34L38.48 22l-10.92-6.56 3.44-2a2 2 0 012 0l10 5.9zm-22 0l4.58-2.71 10.94 6.54L32 25.84l-11-6.5zm12 8.21v13l10-5.9a2 2 0 001-1.72V21.07l-11 6.48zm-13-6.48l11 6.52v13l-10-5.94a2 2 0 01-1-1.72V21.07z"/></svg></template>
<script >
export default {
    name: 'ColorsRelayLocation64',
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
