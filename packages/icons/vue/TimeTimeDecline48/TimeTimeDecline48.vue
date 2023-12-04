<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M38.82 10.6L40 9.41l.29.3a1 1 0 001.42 0 1 1 0 000-1.42l-2-2a1 1 0 00-1.42 1.42l.3.29-1.19 1.18a19.92 19.92 0 00-26.8 0L8.41 7l1.3-1.29a1 1 0 10-1.42-1.42l-4 4a1 1 0 000 1.42 1 1 0 001.42 0L7 8.41l2.18 2.19a20 20 0 1029.64 0zM24 41a17 17 0 1117-17 17 17 0 01-17 17z"/><path d="M31.29 15.29l-6.38 6.39a2.53 2.53 0 101.41 1.41l6.39-6.38a1 1 0 00-1.42-1.42z"/></svg></template>
<script >
export default {
    name: 'TimeTimeDecline48',
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
