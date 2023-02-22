<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0v-3h7.5v3.5a.5.5 0 0 0 1 0V9H16v1.063A2 2 0 0 0 14.5 12a.5.5 0 0 0 1 0 1 1 0 1 1 2 0 .5.5 0 0 0 1 0 2 2 0 0 0-1.5-1.937V9h3v12a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1H3Zm17 6h-7.5V4H20v4Zm-8.5 9H4v-3h7.5v3Zm0-4V9H4v4h7.5Zm0-5H4V4h7.5v4ZM7 15a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1H7Z"/>
</svg>
