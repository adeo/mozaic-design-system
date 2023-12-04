<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 8a11.5 11.5 0 11-11.5 11.5A11.51 11.51 0 0132 8m0-3a14.5 14.5 0 1014.5 14.5A14.5 14.5 0 0032 5zM53 59H11a2 2 0 01-2-2V41.89A2 2 0 0110.55 40l10.33-2.4a1.94 1.94 0 011.34.16 22 22 0 0019.56 0 2.06 2.06 0 011.34-.16L53.45 40A2 2 0 0155 41.9V57a2 2 0 01-2 2zm-41-3h40V42.69l-9.21-2.14a25 25 0 01-21.58 0L12 42.69zm8.88-15.61zm22.25 0z"/></svg></template>
<script >
export default {
    name: 'AccountProfileView64',
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
