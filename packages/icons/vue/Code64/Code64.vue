<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill-rule="evenodd" d="M38.776 13.745a1.5 1.5 0 10-2.885-.824L25.224 50.255a1.5 1.5 0 102.885.824l10.667-37.334zM17.06 22.94a1.5 1.5 0 010 2.122L10.12 32l6.94 6.938a1.5 1.5 0 01-2.122 2.122l-8-8a1.5 1.5 0 010-2.122l8-8a1.5 1.5 0 012.122 0zm29.878 0a1.5 1.5 0 012.122 0l8 8a1.5 1.5 0 010 2.122l-8 8a1.5 1.5 0 01-2.122-2.122L53.88 32l-6.94-6.94a1.5 1.5 0 010-2.12z"/></svg></template>
<script >
export default {
    name: 'Code64',
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
