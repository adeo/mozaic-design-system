<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M36 4H12a2 2 0 00-2 2v36a2 2 0 002 2h24a2 2 0 002-2V6a2 2 0 00-2-2zm-1 37H13V7h22z"/><path d="M18.5 18.4a1 1 0 001 1h.66a5.78 5.78 0 009 2 1 1 0 10-1.3-1.52 3.76 3.76 0 01-5.33-.45h2.6a1 1 0 000-2h-3.46a2.57 2.57 0 01-.05-.4 2.57 2.57 0 01.05-.4h3.45a1 1 0 000-2h-2.6a3.76 3.76 0 012.88-1.35 3.69 3.69 0 012.28.77 1 1 0 001.21-1.6 5.78 5.78 0 00-8.73 2.18h-.66a1 1 0 100 2h.15v.8h-.15a1 1 0 00-1 .97zM30 34h-8.58a1 1 0 000 2H30a1 1 0 000-2z"/><circle cx="18" cy="35" r="1"/><path d="M20.42 30a1 1 0 001 1H30a1 1 0 000-2h-8.58a1 1 0 00-1 1z"/><circle cx="18" cy="30" r="1"/></svg></template>
<script >
export default {
    name: 'Bill48',
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
