<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M57.5 56H51V13.5a2 2 0 00-2-2h-3V7a2 2 0 00-2-2H20a2 2 0 00-2 2v4.5h-3a2 2 0 00-2 2V56H6.5a1.5 1.5 0 000 3h51a1.5 1.5 0 000-3zM21 8h22v3.5H21zm6 48V44.5h10V56zm11-14.5H26a2 2 0 00-2 2V56h-8V14.5h32V56h-8V43.5a2 2 0 00-2-2z"/><path d="M27.5 19.5h-5a1.5 1.5 0 000 3h5a1.5 1.5 0 000-3zM36.3 22.5h5a1.5 1.5 0 000-3h-5a1.5 1.5 0 000 3zM27.5 26.5h-5a1.5 1.5 0 000 3h5a1.5 1.5 0 000-3zM36.3 29.5h5a1.5 1.5 0 000-3h-5a1.5 1.5 0 000 3zM27.5 33.5h-5a1.5 1.5 0 000 3h5a1.5 1.5 0 000-3zM42.8 35a1.5 1.5 0 00-1.5-1.5h-5a1.5 1.5 0 000 3h5a1.5 1.5 0 001.5-1.5z"/></svg></template>
<script >
export default {
    name: 'Apartment64',
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
