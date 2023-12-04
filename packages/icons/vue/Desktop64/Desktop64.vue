<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M57 9H7a2 2 0 00-2 2v38a2 2 0 002 2h14v5h-6.5a1.5 1.5 0 000 3h35a1.5 1.5 0 000-3H43v-5h14a2 2 0 002-2V11a2 2 0 00-2-2zm-1 3v28H8V12zM41 56H23v-5h18zM8 48v-5h48v5z"/></svg></template>
<script >
export default {
    name: 'Desktop64',
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
