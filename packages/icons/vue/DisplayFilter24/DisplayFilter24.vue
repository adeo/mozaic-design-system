<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.09 11.71V5a1 1 0 00-2 0v6.71a2.5 2.5 0 000 4.58V19a1 1 0 002 0v-2.71a2.5 2.5 0 000-4.58zM20.59 12a2.5 2.5 0 00-1.5-2.29V5a1 1 0 00-2 0v4.71a2.5 2.5 0 000 4.58V19a1 1 0 002 0v-4.71a2.5 2.5 0 001.5-2.29zM7.09 7.71V5a1 1 0 00-2 0v2.71a2.5 2.5 0 000 4.58V19a1 1 0 001 1 1 1 0 001-1v-6.71a2.5 2.5 0 000-4.58z"/></svg></template>
<script >
export default {
    name: 'DisplayFilter24',
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
