<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v4.667a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm0 9.667a1 1 0 0 0-1 1v4.666a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-4.666a1 1 0 0 0-1-1H4Zm0 9.666a1 1 0 0 0-1 1V28a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-4.667a1 1 0 0 0-1-1H4Z"/>
</svg>
