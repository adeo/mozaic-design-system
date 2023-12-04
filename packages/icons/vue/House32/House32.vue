<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28 27h-1V14.47l.36.3A1 1 0 0028 15a1 1 0 00.77-.36 1 1 0 00-.13-1.41L17.28 3.76a2 2 0 00-2.56 0L3.36 13.23a1 1 0 101.28 1.54l.36-.3V27H4a1 1 0 000 2h24a1 1 0 000-2zm-9.5 0h-5v-5.5h5zM25 13v14h-5.5v-5.5a1 1 0 00-1-1h-5a1 1 0 00-1 1V27H7V13a1 1 0 000-.17l9-7.53 9 7.53a1 1 0 000 .17z"/><path d="M18.5 17.5H21a1 1 0 001-1V14a1 1 0 00-1-1h-2.5a1 1 0 00-1 1v2.5a1 1 0 001 1zm0-3.5H21v2.5h-2.5zM13.5 13H11a1 1 0 00-1 1v2.5a1 1 0 001 1h2.5a1 1 0 001-1V14a1 1 0 00-1-1zm0 3.5H11V14h2.5z"/></svg></template>
<script >
export default {
    name: 'House32',
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
