<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M7 41V7h34v34H7zM4 5a1 1 0 011-1h38a1 1 0 011 1v38a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm11.707 6.707a1 1 0 00-1.414-1.414l-4 4a1 1 0 101.414 1.414l4-4zm6 4.586a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0zm0-4.586a1 1 0 00-1.414-1.414l-10 10a1 1 0 101.414 1.414l10-10z"/></svg></template>
<script >
export default {
    name: 'Glass48',
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
