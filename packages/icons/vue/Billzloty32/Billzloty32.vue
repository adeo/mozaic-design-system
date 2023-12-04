<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M5.667 4a1 1 0 011-1h18.666a1 1 0 011 1v24a1 1 0 01-1 1H6.667a1 1 0 01-1-1V4zm2 1v22h16.666V5H7.667zm3.666 14.5a.5.5 0 000 1h9.334a.5.5 0 000-1h-9.334zm0 3.333a.5.5 0 000 1h9.334a.5.5 0 100-1h-9.334zm7.307-6.206c.467.466 1.107.706 1.934.706v-.013l.093-1.587c-.347 0-.627-.12-.827-.373-.2-.253-.293-.6-.293-1.04v-2.173l1.053-.4v-1.574l-1.053.4V6.667h-1.6v4.52l-.8.306v1.574l.8-.307v1.88c0 .853.227 1.507.694 1.987zm-3.987-5.36l-3.32 4.506.014-.013v1.453h5.4v-1.6h-3.454L16.6 11V9.667h-5.2v1.6h3.253z"/></svg></template>
<script >
export default {
    name: 'Billzloty32',
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
