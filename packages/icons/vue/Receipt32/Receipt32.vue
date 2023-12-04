<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M9 5v16H5a2 2 0 00-2 2v2a4 4 0 004 4h14a4 4 0 004-4V5a2 2 0 00-2-2H11a2 2 0 00-2 2zM7 27a2 2 0 01-2-2v-2h12v2a4 4 0 00.54 2zm16-2a2 2 0 01-2.34 2A2.08 2.08 0 0119 24.89V23a2 2 0 00-2-2h-6V5h12z"/><path d="M20.7 14.34a.5.5 0 00-.71-.06A3 3 0 0118 15a3 3 0 01-2.58-1.47h2.38a.5.5 0 000-1h-2.73A3.07 3.07 0 0115 12a3.07 3.07 0 01.06-.53h2.76a.5.5 0 000-1h-2.37a3 3 0 014.41-.86.5.5 0 00.7-.09.51.51 0 00-.1-.7A3.94 3.94 0 0018 8a4 4 0 00-3.71 2.47h-.64a.5.5 0 000 1h.39A3.19 3.19 0 0014 12a3.19 3.19 0 00.06.53h-.39a.5.5 0 000 1h.64A4 4 0 0020.64 15a.49.49 0 00.06-.66z"/></svg></template>
<script >
export default {
    name: 'Receipt32',
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
