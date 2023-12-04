<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M39 38H15a2 2 0 01-2-2V6a2 2 0 012-2h24a2 2 0 012 2v30a2 2 0 01-2 2zm-23-3h22V7H16z"/><path d="M33.5 44H9a2 2 0 01-2-2V11.5a1.5 1.5 0 013 0V41h23.5a1.5 1.5 0 010 3z"/></svg></template>
<script >
export default {
    name: 'PublishCopy48',
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
