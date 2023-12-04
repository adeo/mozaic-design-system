<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="4.5" cy="8" r="1.5"/><circle cx="4.5" cy="24" r="1.5"/><circle cx="4.5" cy="16" r="1.5"/><path d="M12 9h16a1 1 0 000-2H12a1 1 0 000 2zM28 15H12a1 1 0 000 2h16a1 1 0 000-2zM28 23H12a1 1 0 000 2h16a1 1 0 000-2z"/></svg></template>
<script >
export default {
    name: 'DisplayProductNumb32',
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
