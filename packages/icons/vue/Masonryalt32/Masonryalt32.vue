<template><svg aria-hidden="true" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g clip-path="url(#a)"><path fill-rule="evenodd" d="M25.766 4.836a1 1 0 00-.695-1.721l-14.36.05a1 1 0 00-.924 1.374l1.81 4.482-1.893.764a3 3 0 00-3.68-1.21l-2.472 1a3 3 0 002.247 5.563l2.473-1a3 3 0 001.806-3.425l1.894-.765 1.81 4.481a1 1 0 001.62.347l10.364-9.94zm-11.94 4.362l1.258 3.112 7.494-7.187-10.384.036 1.258 3.112 1.545-.624a.5.5 0 01.374.927l-1.545.624zm-5.75 1.785a1 1 0 00-1.303-.553l-2.472 1a1 1 0 10.75 1.853l2.472-.998a1 1 0 00.552-1.302zm14.591.683a1 1 0 00-1 1V17H9.334a1 1 0 00-1 1v4.333H4a1 1 0 00-1 1v5.334a1 1 0 001 1h24a1 1 0 001-1V12.666a1 1 0 00-1-1h-5.333zM27 17h-3.333v-3.334H27V17zm-4.333 2H27v3.333h-7.333V19h3zm1 5.333H27v3.334h-3.333v-3.334zm-2 0v3.334h-7.333v-3.334h7.333zm-9.333 0v3.334H5v-3.334h7.334zM17.667 19v3.333h-7.333V19h7.333z"/></g><defs><clipPath id="a"><path d="M0 0h32v32H0z"/></clipPath></defs></svg></template>
<script >
export default {
    name: 'Masonryalt32',
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
