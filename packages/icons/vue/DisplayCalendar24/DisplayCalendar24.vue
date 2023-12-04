<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.5 4V3a1 1 0 00-2 0v1H13V3a1 1 0 00-2 0v1H8.5V3a1 1 0 00-2 0v1H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-11 2v1a1 1 0 002 0V6H11v1a1 1 0 002 0V6h2.5v1a1 1 0 002 0V6H20v3.5H4V6zM4 20v-8.5h16V20z"/></svg></template>
<script >
export default {
    name: 'DisplayCalendar24',
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
