<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 3a13 13 0 1013 13A13 13 0 0016 3zm0 2a10.93 10.93 0 017 2.55l-2.3 2.34-1.41-1.36a1 1 0 00-.7-.28h-5.18a1 1 0 00-.7.28L11 10.18H9a1 1 0 00-1 1v9.65a1 1 0 00.86.93L7.55 23A11 11 0 0116 5zm6 7.18v7.57H10v-7.57h1a2 2 0 001.39-.56l1.42-1.37h4.38l1.42 1.37a2 2 0 001.39.56h.18zM16 27a10.93 10.93 0 01-7-2.55l2.69-2.7H23a1 1 0 001-1v-9.61a1 1 0 00-.8-.92L24.45 9A11 11 0 0116 27z"/><path d="M16 12a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0016 12zm0 6a2.5 2.5 0 112.5-2.5A2.5 2.5 0 0116 18z"/><circle cx="11.5" cy="13" r=".5"/></svg></template>
<script >
export default {
    name: 'NoPicture32',
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
