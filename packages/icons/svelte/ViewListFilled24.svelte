<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm0 7.25a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1H3Zm0 7.25a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1H3Z"/>
</svg>
