<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19.207 2.293a1 1 0 00-1.414 0l-10 10a1 1 0 00-.23.356l-1.5 4a1 1 0 001.288 1.287l4-1.5a1 1 0 00.356-.229l10-10a1 1 0 000-1.414l-2.5-2.5zM9.084 14.29l-.375 1 1-.375-.625-.625zm1.562.148l7.043-7.043-1.085-1.085-7.043 7.043 1.085 1.085zm7.75-7.75l-1.085-1.085 1.189-1.19L19.586 5.5l-1.19 1.19zM3 6a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 10-2 0v3H4V8h3a1 1 0 000-2H3z"/></svg></template>
<script >
export default {
    name: 'PublishEdit24',
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
