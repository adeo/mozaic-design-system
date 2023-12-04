<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g clip-path="url(#a)"><path d="M13.562 21.858v-6.98h2.33l.444-2.888h-2.774v-1.874c0-.79.387-1.561 1.63-1.561h1.262V6.096s-1.145-.195-2.24-.195c-2.283 0-3.776 1.382-3.776 3.887v2.201h-2.54v2.889h2.54v6.98C5.657 21.108 2 16.976 2 11.99 2 6.473 6.477 2 12 2s10 4.473 10 9.99c0 4.986-3.657 9.119-8.438 9.868z"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg></template>
<script >
export default {
    name: 'SocialNetworkFacebook24',
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
