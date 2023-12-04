<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zM7.5 15V9h1.1a1.52 1.52 0 001.06-.44l.55-.56h3.58l.55.54A1.52 1.52 0 0015.4 9h1.1v6zM12 4a7.92 7.92 0 014.9 1.69l-2 2-.55-.55A.5.5 0 0014 7h-4a.5.5 0 00-.35.14L9 7.83a.51.51 0 01-.4.17H7a.5.5 0 00-.5.5v7a.49.49 0 00.2.39l-1 1A7.92 7.92 0 014 12a8 8 0 018-8zm0 16a7.92 7.92 0 01-4.9-1.69L9.41 16H17a.5.5 0 00.5-.5v-7a.48.48 0 00-.18-.38l1-1A7.92 7.92 0 0120 12a8 8 0 01-8 8z"/><path d="M12 9.25a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm0 4a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z"/><circle cx="8.5" cy="10" r=".5"/></svg></template>
<script >
export default {
    name: 'NoPicture24',
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
