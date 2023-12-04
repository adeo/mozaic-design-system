<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M35 44H13a1.5 1.5 0 01-1.5-1.44l-1-26.5a1.5 1.5 0 113-.12L14.44 41h19.12l.94-25.06a1.5 1.5 0 013 .12l-1 26.5A1.5 1.5 0 0135 44z"/><path d="M24 37a1 1 0 01-1-1V20a1 1 0 012 0v16a1 1 0 01-1 1zM29 37a1 1 0 01-1-1l.5-16a1 1 0 011-1 1 1 0 011 1L30 36a1 1 0 01-1 1zM19 37a1 1 0 01-1-1l-.5-16a1 1 0 011-1 1 1 0 011 1l.5 16a1 1 0 01-1 1zM38.5 9h-7.82l-1.75-4.37A1 1 0 0028 4h-8a1 1 0 00-.93.63L17.32 9H9.5a1.5 1.5 0 000 3h29a1.5 1.5 0 000-3zM20.68 6h6.64l1.2 3h-9z"/></svg></template>
<script >
export default {
    name: 'PublishTrashbin48',
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
