<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M53.5 30.5h-20v-20a1.5 1.5 0 00-3 0v20h-20a1.5 1.5 0 000 3h20v20a1.5 1.5 0 003 0v-20h20a1.5 1.5 0 000-3z"/></svg></template>
<script >
export default {
    name: 'ControlMore64',
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
