<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.29 12.91L3.08 8.7a3.53 3.53 0 01-1-1.8 3.4 3.4 0 011.1-3.27A3.52 3.52 0 018 3.92V4l.17-.18a3.5 3.5 0 014.83 0 3.42 3.42 0 01.94 3.06 3.59 3.59 0 01-1 1.86l-4.2 4.2a1 1 0 01-1.45-.03zM5.41 4.79A1.42 1.42 0 004 6.21a1.45 1.45 0 00.41 1L8 10.79l3.59-3.58a1.45 1.45 0 00.41-1 1.41 1.41 0 00-.41-1 1.44 1.44 0 00-2 0L8 6.8 6.41 5.21a1.4 1.4 0 00-1-.42z"/></svg></template>
<script >
export default {
    name: 'PublishFavorite16',
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
