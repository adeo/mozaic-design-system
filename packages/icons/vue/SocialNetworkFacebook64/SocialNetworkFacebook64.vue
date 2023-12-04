<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M36.167 58.289V39.675h6.214l1.181-7.702h-7.395v-4.998c0-2.105 1.031-4.162 4.346-4.162h3.364v-6.556s-3.052-.52-5.97-.52c-6.09 0-10.073 3.686-10.073 10.365v5.87h-6.772v7.703h6.772v18.614c-12.748-1.998-22.5-13.02-22.5-26.316 0-14.713 11.94-26.64 26.667-26.64 14.727 0 26.666 11.927 26.666 26.64 0 13.296-9.751 24.318-22.5 26.316z"/></svg></template>
<script >
export default {
    name: 'SocialNetworkFacebook64',
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
