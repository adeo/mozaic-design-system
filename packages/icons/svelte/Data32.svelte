<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M21.667 4a1 1 0 0 0 1 1h2.919L16 14.586 11.374 9.96a1 1 0 0 0-1.414 0l-6.667 6.666a1 1 0 1 0 1.414 1.414l5.96-5.96 4.626 4.627a1 1 0 0 0 1.414 0L27 6.414v2.92a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5.333a1 1 0 0 0-1 1ZM29 14.667a1 1 0 1 0-2 0V28a1 1 0 1 0 2 0V14.667ZM23 28V17.333a1 1 0 1 0-2 0V28a1 1 0 1 0 2 0Zm-12-9.333a1 1 0 1 0-2 0V28a1 1 0 1 0 2 0v-9.333Zm6 2.666a1 1 0 1 0-2 0V28a1 1 0 1 0 2 0v-6.667ZM5 22.667a1 1 0 1 0-2 0V28a1 1 0 1 0 2 0v-5.333Z"/>
</svg>
