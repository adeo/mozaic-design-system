<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill-rule="evenodd" d="M32.908 6.248a1 1 0 00-1.816 0L23.32 23.087l-18.128 2.59A1 1 0 004.7 27.44l14.158 11.583-5.153 18.035a1 1 0 001.486 1.126L32 47.841l16.809 10.344a1 1 0 001.486-1.126l-5.153-18.035L59.3 27.441a1 1 0 00-.492-1.764l-18.128-2.59-7.772-16.84z"/></svg></template>
<script >
export default {
    name: 'ViewStarFull64',
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
