<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M53 9h-8.5V6.54a1.5 1.5 0 10-3 0V9h-8V6.54a1.5 1.5 0 10-3 0V9h-8V6.54a1.5 1.5 0 10-3 0V9H11a2 2 0 00-2 2v42a2 2 0 002 2h42a2 2 0 002-2V11a2 2 0 00-2-2zm-33.5 3v3.53a1.5 1.5 0 003 0V12h8v3.53a1.5 1.5 0 003 0V12h8v3.53a1.5 1.5 0 003 0V12H52v9H12v-9zM12 52V24h40v28z"/></svg></template>
<script >
export default {
    name: 'DisplayCalendar64',
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
