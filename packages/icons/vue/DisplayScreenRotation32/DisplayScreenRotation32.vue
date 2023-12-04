<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.15 25.26h-1.3a.5.5 0 00-.5.5.5.5 0 00.5.5h1.3a.5.5 0 00.5-.5.5.5 0 00-.5-.5z"/><path d="M27.5 18H16V9a2 2 0 00-2-2H5a2 2 0 00-2 2v18a2 2 0 002 2h22.5a1.36 1.36 0 001.5-1.16v-8.68A1.36 1.36 0 0027.5 18zM14 9v14.32H5V9zM5 27v-2.68h9V27zm22 0H16v-7h11zM18 4a7.2 7.2 0 015 2.29 5.88 5.88 0 011.49 3.34l-.84-1a.5.5 0 10-.76.66l1.75 2a.49.49 0 00.38.17.48.48 0 00.37-.17l1.76-2a.5.5 0 00-.76-.66l-.89 1a6.83 6.83 0 00-1.76-4.08A8.21 8.21 0 0018 3a.49.49 0 00-.52.48A.5.5 0 0018 4z"/></svg></template>
<script >
export default {
    name: 'DisplayScreenRotation32',
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
