<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.51 9.72L25 5.66A2 2 0 0023.55 5H8.45a2 2 0 00-1.51.68l-3.44 4a2 2 0 000 2.57l11 14.1a2 2 0 003.13 0l11-14.07a2 2 0 00-.12-2.56zM8.45 7h2.61l-1.2 3h-4zm-2.66 5h4.07l4.22 10.66zm9.7 11.5L10.93 12h4.56zm0-13.5h-4.55l1.2-3h3.35zm8-3l2.54 3h-3.89l-1.21-3zm-7 0h3.37l1.2 3h-4.57zm0 16.43V12h4.57zm1.32-.6L22.14 12h4.08z"/></svg></template>
<script >
export default {
    name: 'Premium32',
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
