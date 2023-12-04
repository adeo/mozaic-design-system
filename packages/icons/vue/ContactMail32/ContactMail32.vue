<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 9h-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2H5a2 2 0 00-2 2v14a2 2 0 002 2h22a2 2 0 002-2V11a2 2 0 00-2-2zm-2 2h.14l-.14.09zM9 7h14v5.36l-2 1.29a.4.4 0 000-.15.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5.4.4 0 000 .15l-2-1.29zm11.42 7L16 16.81 11.58 14zM7 11v.09L6.86 11zM5 25V12.19L25.14 25zm22-1.19L17.86 18 27 12.19z"/><path d="M11.5 10.5h9a.5.5 0 000-1h-9a.5.5 0 000 1z"/></svg></template>
<script >
export default {
    name: 'ContactMail32',
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
