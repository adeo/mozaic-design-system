<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7V5a1 1 0 00-1-1H6a1 1 0 00-1 1v2H3a1 1 0 00-1 1v11a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1zm-5.08 6.5L20 9.78v7.44zM9.83 11h4.34L12 12.33zM17 6v3.27l-1.58 1A.5.5 0 0015 10H9a.5.5 0 00-.42.24L7 9.27V6zM4 9.78L17.45 18H4z"/><path d="M9 8.5h6a.5.5 0 000-1H9a.5.5 0 000 1z"/></svg></template>
<script >
export default {
    name: 'ContactMail24',
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
