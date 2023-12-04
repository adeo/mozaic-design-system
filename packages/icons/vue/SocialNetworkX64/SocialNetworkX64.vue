<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M47.471 8h8.175l-17.95 20.438 20.971 27.724H42.211L29.326 39.314l-14.75 16.848H6.4l19.016-21.86L5.334 8H22.2l11.64 15.39L47.471 8zM44.61 51.363h4.532L19.818 12.621h-4.87L44.61 51.363z"/></svg></template>
<script >
export default {
    name: 'SocialNetworkX64',
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
