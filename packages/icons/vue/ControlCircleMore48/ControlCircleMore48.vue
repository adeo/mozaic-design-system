<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M32 22.5h-6.48V16a1.5 1.5 0 10-3 0v6.5H16a1.5 1.5 0 000 3h6.52V32a1.5 1.5 0 003 0v-6.5H32a1.5 1.5 0 000-3z"/><path d="M24 4a20 20 0 1020 20A20 20 0 0024 4zm0 37a17 17 0 1117-17 17 17 0 01-17 17z"/></svg></template>
<script >
export default {
    name: 'ControlCircleMore48',
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
