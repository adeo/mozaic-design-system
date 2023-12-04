<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M57.5 56H55v-6a2 2 0 00-2-2h-2V28.57h5.81a2.2 2.2 0 001.34-3.93L33.34 5.52a2.19 2.19 0 00-2.67 0L5.85 24.64a2.2 2.2 0 001.34 3.93H13V48h-2a2 2 0 00-2 2v6H6.5a1.5 1.5 0 000 3h51a1.5 1.5 0 000-3zM48 48h-6V28.57h6zM31 28.57V48h-7V28.57zm2 0h7V48h-7zM32 8.28l22.43 17.29H9.57zM16 28.57h6V48h-6zM12 56v-5h40v5z"/><path d="M32 14a4.5 4.5 0 104.5 4.5A4.51 4.51 0 0032 14zm0 7a2.5 2.5 0 112.5-2.5A2.5 2.5 0 0132 21z"/></svg></template>
<script >
export default {
    name: 'Administration64',
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
