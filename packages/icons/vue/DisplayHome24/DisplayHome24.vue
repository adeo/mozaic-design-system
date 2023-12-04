<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.61 9.21l-9-7a1 1 0 00-1.22 0l-9 7a1 1 0 001.22 1.58l.39-.3V21a1 1 0 001 1h14a1 1 0 001-1V10.49l.39.3A1 1 0 0021 11a1 1 0 00.61-1.79zM18 9v11H6V9v-.06l6-4.67 6 4.67V9z"/></svg></template>
<script >
export default {
    name: 'DisplayHome24',
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
