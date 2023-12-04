<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 20H3a1 1 0 000 2h18a1 1 0 000-2zM3 12h2v5h-.5a1 1 0 000 2h15a1 1 0 000-2H19v-5h2a1 1 0 00.93-.64 1 1 0 00-.27-1.11l-9-8a1 1 0 00-1.32 0l-9 8a1 1 0 00-.27 1.11A1 1 0 003 12zm4 5v-5h2v5zm4 0v-5h2v5zm6 0h-2v-5h2zM12 4.34L18.37 10H5.63z"/><circle cx="12" cy="7.5" r="1.5"/></svg></template>
<script >
export default {
    name: 'Administration24',
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
