<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M53.55 13l-13.5-3.9a2 2 0 00-1.06 0l-14.48 3.84-13-3.7A2 2 0 009 11.16v38a2 2 0 001.45 1.93L24 54.9a2 2 0 00.55.08 1.86 1.86 0 00.52-.07l14.47-3.85 13 3.7A2 2 0 0055 52.84v-38A2 2 0 0053.55 13zm-28 2.84l13-3.47v35.84l-13 3.47zM12 12.49l11.5 3.28v35.88L12 48.37zm40 39l-11.5-3.26V12.35L52 15.63z"/></svg></template>
<script >
export default {
    name: 'Map64',
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
