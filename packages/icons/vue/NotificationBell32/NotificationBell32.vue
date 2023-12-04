<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25.67 22.1l-1-2a4.55 4.55 0 01-.48-2v-4.95A8.17 8.17 0 0017 5.07V4a1 1 0 00-2 0v1.07a8.17 8.17 0 00-7.18 8.08v4.93a4.62 4.62 0 01-.48 2l-1 2A2 2 0 008.12 25h3a5 5 0 009.8 0h3a2 2 0 001.79-2.9zM16 27a3 3 0 01-2.81-2h5.63A3 3 0 0116 27zm-7.88-4l1-2a5.87 5.87 0 00.44-1.17h3.78a.5.5 0 00.5-.5.51.51 0 00-.5-.5H9.77a6.3 6.3 0 00.05-.75v-4.93a6.18 6.18 0 0112.36 0v4.93a6.44 6.44 0 00.7 2.92l1 2z"/></svg></template>
<script >
export default {
    name: 'NotificationBell32',
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
