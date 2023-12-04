<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path fill="#006902" d="M16 3c-5.918.011-10.71 4.812-10.71 10.73 0 5 7.64 12.88 10 15.2a1 1 0 001.4 0c2.37-2.32 10-10.19 10-15.2C26.69 7.82 21.91 3.022 16 3z"/><path fill="#fff" d="M20.47 14.74h-8.92a.72.72 0 01-.55-1.23l.94-.95 3.51-3.51a.72.72 0 011 0l1.34 1.34L20 12.56l.95.95a.72.72 0 01-.48 1.23z"/></g></svg></template>
<script >
export default {
    name: 'ColorsStoreLocation32',
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
