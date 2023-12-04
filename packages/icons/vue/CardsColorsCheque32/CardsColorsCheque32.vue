<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="url(#a)" d="M3 9a2 2 0 012-2h22a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path fill="#B7EEF5" fill-rule="evenodd" d="M5 7h22a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2zm23 2a1 1 0 00-1-1H5a1 1 0 00-1 1v14a1 1 0 001 1h22a1 1 0 001-1V9z"/><path fill="#84DBEB" d="M24.5 14h-8.79l2-2h6.79a.5.5 0 000-1h-5.79l.64-.65a.495.495 0 00-.7-.7L17.29 11H7.5a.5.5 0 000 1h8.79l-2 2H7.5a.5.5 0 000 1h5.79l-.64.65a.48.48 0 000 .7.48.48 0 00.7 0L14.71 15h9.79a.5.5 0 000-1z"/><path fill="#B7EEF5" d="M7 18.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5V22a.5.5 0 01-.5.5h-6A.5.5 0 017 22v-3.5z"/><path fill="#25A8D0" d="M16.5 22.5h-.14a.5.5 0 01-.34-.62C16.43 20.42 17.3 18 18.5 18c.89 0 1.59 1.33 2.07 2.6C21.35 19 21.79 19 22 19c.21 0 .79 0 1.84 2.5H25a.5.5 0 010 1h-1.5a.49.49 0 01-.46-.31 11.442 11.442 0 00-1-2.07 11.442 11.442 0 00-1 2.07.48.48 0 01-.49.31.5.5 0 01-.45-.36c-.45-1.56-1.18-3.06-1.53-3.14-.33.08-1.06 1.58-1.51 3.14a.49.49 0 01-.56.36z"/><defs><linearGradient id="a" x1="14.173" x2="30.011" y1="37.922" y2="14.797" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset=".53" stop-color="#F1FDFE"/><stop offset="1" stop-color="#ECFCFD"/></linearGradient></defs></svg></template>
<script >
export default {
    name: 'CardsColorsCheque32',
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
