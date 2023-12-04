<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M58.5 11.76a1.5 1.5 0 00-1.5-1.5h-3.21V8a1.5 1.5 0 00-1.5-1.5H13.71a1.5 1.5 0 00-1.5 1.5v2.26H9a1.5 1.5 0 00-1.5 1.5v8a25.37 25.37 0 004.71 14.74V56a1.5 1.5 0 001.5 1.5h38.58a1.5 1.5 0 001.5-1.5V34.5a25.37 25.37 0 004.71-14.74zm-43.29 5.49h7.35v10.51a4.33 4.33 0 108.65 0V17h19.58v16.51a22.46 22.46 0 01-35.58 0zM50.79 9.5V14H28.21v13.76a1.33 1.33 0 11-2.65 0V14.25H15.21V9.5zM10.5 19.76v-6.5h1.71v15.09a22.35 22.35 0 01-1.71-8.59zm4.71 34.74V38a25.45 25.45 0 0035.58 0v16.5zM55.5 19.76a22.35 22.35 0 01-1.71 8.59V13.26h1.71z"/></svg></template>
<script >
export default {
    name: 'PaintCan64',
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
