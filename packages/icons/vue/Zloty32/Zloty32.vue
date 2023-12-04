<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4 25.428l8.118-11.257H4.153v-4.01H16.88v3.341l-8.088 11.54h8.454v4.01H4.031L4 25.428zm22.643 3.905c-2.014 0-3.59-.586-4.73-1.759-1.14-1.196-1.71-2.85-1.71-4.96V17.9l-1.953.774v-3.94l1.954-.774V2.667h3.906v9.78l2.564-.985v3.94l-2.564.985v5.418c0 1.102.244 1.97.733 2.603.488.633 1.16.95 2.014.95l-.213 3.975z"/></svg></template>
<script >
export default {
    name: 'Zloty32',
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
