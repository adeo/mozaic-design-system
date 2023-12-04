<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 18V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a1 1 0 000 .17A3 3 0 0017 10h6a3 3 0 00-2-2.83A1 1 0 0021 7V5h4v13H5a2 2 0 00-2 2v1a6 6 0 003.63 5.51l-.52 1a1 1 0 00.44 1.34A.93.93 0 007 29a1 1 0 00.89-.55L8.63 27H23.37l.74 1.47A1 1 0 0025 29a.93.93 0 00.45-.11 1 1 0 00.44-1.34l-.52-1A6 6 0 0029 21v-1a2 2 0 00-2-2zM5 20h22v1H5zm18 5H9a4 4 0 01-3.86-3h21.72A4 4 0 0123 25z"/></svg></template>
<script >
export default {
    name: 'Bathroom32',
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
