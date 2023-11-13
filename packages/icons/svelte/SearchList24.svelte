<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M3 3a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H3Zm11 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.477l2.817 2.816a1 1 0 0 1-1.414 1.414l-2.816-2.816A6 6 0 0 1 8 14ZM2 9a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2H3Z"/>
</svg>
