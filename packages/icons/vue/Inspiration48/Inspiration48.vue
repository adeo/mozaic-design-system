<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M36 4H12a2 2 0 00-2 2v36a2 2 0 002 2h24a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3v23.68h-1.46l-4.84-9.81a1 1 0 00-.87-.56 1 1 0 00-.89.51l-2.86 5-4.68-9.74a1 1 0 00-.85-.57 1 1 0 00-.9.49L13 23.73V7zM13 27.61l5.4-9 4.7 9.83a1 1 0 00.9.56 1 1 0 00.9-.5l2.87-5.06 3.57 7.23H13zM13 41v-7.32h22V41z"/><path d="M29.7 15.71a3.5 3.5 0 10-3.5-3.5 3.5 3.5 0 003.5 3.5zm0-5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5z"/></svg></template>
<script >
export default {
    name: 'Inspiration48',
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
