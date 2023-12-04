<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M41 4H7a3 3 0 00-3 3v34a3 3 0 003 3h34a3 3 0 003-3V7a3 3 0 00-3-3zM16 38h-6V19h6v19zm-3-21.5a3.5 3.5 0 113.6-3.5 3.56 3.56 0 01-3.6 3.5zM38 38h-6V27.52c0-2.84-1.2-3.86-2.76-3.86A3.482 3.482 0 0026 27.38a27.31 27.31 0 000 1.28V38h-6V19h5.8v2.6a6.22 6.22 0 015.4-2.8c3.1 0 6.72 1.72 6.72 7.32L38 38z"/></svg></template>
<script >
export default {
    name: 'SocialNetworkLinkedin48',
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
