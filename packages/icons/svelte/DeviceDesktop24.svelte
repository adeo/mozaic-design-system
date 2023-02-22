<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M3 3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h5v1H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-1v-1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Zm12 16v-1H9v1h6ZM4 16v-2h16v2H4Zm16-3H4V5h16v8Z"/>
</svg>
