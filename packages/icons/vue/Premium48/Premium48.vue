<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M36.26 7H11.74a2 2 0 00-1.56.75l-5.6 7a2 2 0 000 2.49l17.85 22.69a2 2 0 003.14 0l17.86-22.69a2 2 0 000-2.49l-5.6-7A2 2 0 0036.26 7zM14.51 17.5l5.86 15-11.78-15zM23 10v4.5h-6.27l1.93-4.5zm6.34 0l1.93 4.5H25V10zm2 7.5L25 33.7V17.5zm-8.34 0v16.2l-6.34-16.2zm10.49 0h5.92l-11.78 15zm5.89-3h-5.93L31.52 10h4.26zM12.22 10h4.26l-1.93 4.5H8.62z"/></svg></template>
<script >
export default {
    name: 'Premium48',
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
