<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 20h-1v-7.59l.29.3a1 1 0 001.42 0 1 1 0 000-1.42l-2-2-7-7a1 1 0 00-1.42 0l-7 7-2 2a1 1 0 001.42 1.42l.29-.3V20H3a1 1 0 000 2h18a1 1 0 000-2zM8 15h8v2H8zm8-1H8v-2h8zm-8 4h8v2H8zm9 2v-8.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5V20H6v-9.59l6-6 6 6V20z"/><circle cx="12" cy="8.5" r="1.5"/></svg></template>
<script >
export default {
    name: 'Garage24',
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
