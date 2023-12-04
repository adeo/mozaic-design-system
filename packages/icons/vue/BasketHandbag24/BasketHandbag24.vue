<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7.92A1 1 0 0018 7h-2V5.69a4.1 4.1 0 00-4-4.19 4.1 4.1 0 00-4 4.19V7H6a1 1 0 00-1 .92l-1 13a1 1 0 00.27.76A1 1 0 005 22h14a1 1 0 00.73-.32 1 1 0 00.27-.76zm-9-2.23a2.1 2.1 0 012-2.19 2.1 2.1 0 012 2.19V7h-4zM6.08 20l.85-11H8v1a1 1 0 002 0V9h4v1a1 1 0 002 0V9h1.07l.85 11z"/></svg></template>
<script >
export default {
    name: 'BasketHandbag24',
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
