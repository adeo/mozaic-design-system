<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M7 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v15h2a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h2V5a1 1 0 0 1 1-1h1V3Zm3.5 17h3v-4h-3v4Zm5 0v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5H7V6h10v14h-1.5Zm-7-11.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Zm5-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Zm-5 4a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Zm5-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z"/>
</svg>
