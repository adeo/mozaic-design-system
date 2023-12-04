<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M5 16C5 9.925 9.925 5 16 5s11 4.925 11 11-4.925 11-11 11S5 22.075 5 16zM16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm3.374 6.96a1 1 0 10-1.414 1.414l2.293 2.293h-9.586a1 1 0 00-1 1v6a1 1 0 002 0v-5h8.586L17.96 17.96a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z"/></svg></template>
<script >
export default {
    name: 'Itinerary32',
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
