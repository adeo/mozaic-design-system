<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M58.07 18.78l-7.33-8.56A3.53 3.53 0 0048.08 9H15.92a3.53 3.53 0 00-2.66 1.22l-7.33 8.56a3.51 3.51 0 00-.09 4.44l23.41 29.71a3.49 3.49 0 005.5 0l23.41-29.71a3.51 3.51 0 00-.09-4.44zM19.49 22.5l9.45 25.19L9.09 22.5zM31 12v7.5h-9.51l2.25-7.5zm9.26 0l2.28 7.5H33V12zm2.06 10.5L33 47.46v-25zM31 22.5v25l-9.37-25zm13.46 0h10.45L35 47.72zm4-10.33l6.28 7.33H44.63L42.35 12h5.73a.5.5 0 01.38.17zm-32.92 0a.5.5 0 01.38-.17h5.74l-2.25 7.5H9.26z"/></svg></template>
<script >
export default {
    name: 'Premium64',
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
