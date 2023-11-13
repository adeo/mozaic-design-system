<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M23.833 14.667a8.167 8.167 0 1 1 16.334 0v16a8.167 8.167 0 0 1-16.334 0v-16ZM32 9.5a5.167 5.167 0 0 0-5.167 5.167v16a5.167 5.167 0 0 0 10.334 0v-16A5.167 5.167 0 0 0 32 9.5Zm.003 35.667H32c-8.008 0-14.5-6.492-14.5-14.5v-8a1.5 1.5 0 1 0-3 0v8c0 9.16 7.037 16.675 16 17.436V54.5H24a1.5 1.5 0 0 0 0 3h16a1.5 1.5 0 0 0 0-3h-6.5v-6.397c8.963-.76 16-8.277 16-17.436v-8a1.5 1.5 0 1 0-3 0v8c0 8.007-6.49 14.498-14.497 14.5Z"/>
</svg>
