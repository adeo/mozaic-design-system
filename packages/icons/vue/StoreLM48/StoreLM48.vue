<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M30.21 21.77l-3.35-3.34-2.07-2.06a1.13 1.13 0 00-1.58 0l-2.07 2.06-3.35 3.34-1.45 1.45a1.11 1.11 0 00.79 1.9h13.74a1.11 1.11 0 00.79-1.9z"/><path d="M42 16.09h-8l-8.59-8.51a2 2 0 00-2.82 0L14 16.09H6a2 2 0 00-2 2V39a2 2 0 002 2h36a2 2 0 002-2V18.08a2 2 0 00-2-1.99zM30 38h-5v-7h5zm-7 0h-5v-7h5zm18 0h-9v-7a2 2 0 00-2-2H18a2 2 0 00-2 2v7H7V19.08h8.26l.88-.88L24 10.4l7.86 7.8.88.88H41z"/></svg></template>
<script >
export default {
    name: 'StoreLM48',
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
