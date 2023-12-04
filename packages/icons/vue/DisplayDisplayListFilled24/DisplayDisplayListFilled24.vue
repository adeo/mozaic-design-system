<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="5.5" rx="1.15"/><rect x="2" y="9.25" width="20" height="5.5" rx="1.15"/><rect x="2" y="16.5" width="20" height="5.5" rx="1.15"/></svg></template>
<script >
export default {
    name: 'DisplayDisplayListFilled24',
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
