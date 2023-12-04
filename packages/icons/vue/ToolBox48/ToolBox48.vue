<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M38 13h-4.5V9A3.5 3.5 0 0030 5.5H18A3.5 3.5 0 0014.5 9v4H10a6 6 0 00-6 6v20a2 2 0 002 2h36a2 2 0 002-2V19a6 6 0 00-6-6zM17.5 9a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v4h-13zM10 16h28a3 3 0 013 3v6.1h-8V23a1 1 0 00-2 0v2.1H17V23a1 1 0 00-2 0v2.1H7V19a3 3 0 013-3zM7 38V27.1h8V29a1 1 0 002 0v-1.9h14V29a1 1 0 002 0v-1.9h8V38z"/></svg></template>
<script >
export default {
    name: 'ToolBox48',
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
