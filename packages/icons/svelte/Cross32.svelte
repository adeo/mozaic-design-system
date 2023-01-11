<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M26.04 7.374a1 1 0 0 0-1.414-1.414L16 14.586 7.374 5.96A1 1 0 0 0 5.96 7.374L14.586 16 5.96 24.626a1 1 0 1 0 1.414 1.415L16 17.413l8.626 8.627a1 1 0 0 0 1.414-1.415L17.414 16l8.626-8.626Z"/>
</svg>
