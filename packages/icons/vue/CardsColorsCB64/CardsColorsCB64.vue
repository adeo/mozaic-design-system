<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="url(#a)" d="M55.962 13.375H8.038a2.66 2.66 0 00-2.662 2.66v31.93a2.66 2.66 0 002.662 2.66h47.925a2.66 2.66 0 002.663-2.66v-31.93a2.66 2.66 0 00-2.663-2.66z"/><path fill="#fff" d="M22.91 31.313h9.952c-.087-1.958-.6-4-2.12-5.29-1.797-1.55-4.967-2.12-7.805-2.12-2.837 0-6.21.63-8.022 2.295C13.335 27.63 13 29.925 13 32c0 2.075.658 4.693 2.367 6.153 1.71 1.46 4.735 1.944 7.57 1.944s5.73-.452 7.528-1.93c1.798-1.477 2.412-3.932 2.412-6.167H22.91v-.688zm10.61.672v7.75h13.84A3.827 3.827 0 0051 35.917c0-2.047-1.608-3.83-3.64-3.932H33.52zm17.23-4.223a3.523 3.523 0 00-3.5-3.537h-.045a4.02 4.02 0 00-.425-.015H33.53v7.102h13.957a3.58 3.58 0 003.263-3.55z"/><defs><linearGradient id="a" x1="31.841" x2="65.719" y1="65.853" y2="17.691" gradientUnits="userSpaceOnUse"><stop stop-color="#109A72"/><stop offset=".3" stop-color="#008A8D"/><stop offset=".69" stop-color="#01679B"/><stop offset="1" stop-color="#03376F"/></linearGradient></defs></svg></template>
<script >
export default {
    name: 'CardsColorsCB64',
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
