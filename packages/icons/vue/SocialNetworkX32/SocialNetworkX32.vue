<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g clip-path="url(#a)"><path d="M23.735 4h4.087l-8.975 10.219L29.333 28.08h-8.229l-6.442-8.424-7.375 8.424H3.199l9.508-10.93L2.666 4h8.433l5.82 7.695L23.735 4zm-1.431 21.682h2.266L9.908 6.31H7.473l14.83 19.372z"/></g><defs><clipPath id="a"><path d="M0 0h32v32H0z"/></clipPath></defs></svg></template>
<script >
export default {
    name: 'SocialNetworkX32',
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
