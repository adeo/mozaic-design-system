<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M9 19.52v18.73a2 2 0 002 2h42a2 2 0 002-2v-27a2 2 0 00-2-2H11a2 2 0 00-2 2v8.27zm3 17.73V21h40v16.25zm40-25V18H12v-5.75zM53.5 48a5.52 5.52 0 00-5.29 4H37.29a5.5 5.5 0 00-10.58 0H15.79a5.5 5.5 0 100 3h10.92a5.5 5.5 0 0010.58 0h10.92a5.5 5.5 0 105.29-7zM32 56a2.5 2.5 0 112.5-2.5A2.5 2.5 0 0132 56zm21.5 0a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z"/><path d="M21 24.5h-5a1.5 1.5 0 000 3h5a1.5 1.5 0 000-3z"/></svg></template>
<script >
export default {
    name: 'DetailsOrder64',
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
