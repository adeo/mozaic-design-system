<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1h2.5a1 1 0 0 1 .97.757L20.28 8H21a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1.67a3.001 3.001 0 0 1-5.66 0h-2.34a3.001 3.001 0 0 1-5.66 0H3a1 1 0 0 1-1-1V3Zm18 11h-.67a3.001 3.001 0 0 0-5.66 0h-2.34a3.001 3.001 0 0 0-5.66 0H4V4h10v5a1 1 0 1 0 2 0V6h1.72l.81 3.243.19.757H20v4Zm-3.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-7 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"/>
</svg>
