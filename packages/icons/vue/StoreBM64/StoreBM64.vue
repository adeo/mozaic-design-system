<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill-rule="evenodd" d="M16 11.834a1.5 1.5 0 00-1.06 2.56l2.772 2.773H8a1.5 1.5 0 00-1.5 1.5v32a1.5 1.5 0 001.5 1.5h48a1.5 1.5 0 001.5-1.5v-32a1.5 1.5 0 00-1.5-1.5H45.188l2.584-2.82a1.5 1.5 0 00-1.105-2.513H16zm26.452 8.318l-9.346 10.196a1.5 1.5 0 01-2.167.047L20.712 20.167H9.5v29h12.167V36.001a1 1 0 011-1h18.666a1 1 0 011 1v13.166H54.5v-29H42.667a1.51 1.51 0 01-.215-.015zm-20.057-2.544l9.558 9.558 11.304-12.332H19.62l2.772 2.772.002.002zM23.667 37H31v12.166h-7.333V37.001zM33 37v12.166h7.333V37.001H33z"/></svg></template>
<script >
export default {
    name: 'StoreBM64',
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
