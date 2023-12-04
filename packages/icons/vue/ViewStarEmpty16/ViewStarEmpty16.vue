<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.5a1 1 0 01.906.577l1.536 3.292 3.254.65a1 1 0 01.437 1.755l-2.296 1.879.648 3.673a1 1 0 01-1.566.988L8 12.229l-2.919 2.085a1 1 0 01-1.566-.988l.648-3.673-2.296-1.879a1 1 0 01.437-1.755l3.254-.65 1.536-3.292A1 1 0 018 1.5zm0 3.365l-.844 1.808-.214.458-.496.1-1.675.335 1.112.91.454.371-.102.577-.325 1.84 1.509-1.078L8 9.771l.581.415 1.509 1.078-.325-1.84-.102-.577.454-.371 1.112-.91-1.675-.335-.496-.1-.214-.458L8 4.865z"/></svg></template>
<script >
export default {
    name: 'ViewStarEmpty16',
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
