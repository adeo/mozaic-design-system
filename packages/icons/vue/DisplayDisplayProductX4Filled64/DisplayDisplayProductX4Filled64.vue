<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="5" y="5" width="25" height="25" rx="2"/><rect x="34" y="5" width="25" height="25" rx="2"/><rect x="5" y="34" width="25" height="25" rx="2"/><rect x="34" y="34" width="25" height="25" rx="2"/></svg></template>
<script >
export default {
    name: 'DisplayDisplayProductX4Filled64',
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
