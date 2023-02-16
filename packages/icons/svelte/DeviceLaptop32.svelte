<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M5.667 7.667a2 2 0 0 1 2-2h16.666a2 2 0 0 1 2 2v12H28a1 1 0 0 1 1 1V23a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2.334a1 1 0 0 1 1-1h1.667v-12Zm2 12h16.666v-12H7.667v12Zm-2.667 2V23a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-1.334H5ZM14 9.5a.5.5 0 0 0 0 1h4a.5.5 0 1 0 0-1h-4Z"/>
</svg>
