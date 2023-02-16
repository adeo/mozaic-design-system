<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M4.667 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a1 1 0 0 1 1-1H28a1 1 0 1 1 0 2H10.667a1 1 0 0 1-1-1Zm-5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a1 1 0 0 1 1-1H28a1 1 0 1 1 0 2H10.667a1 1 0 0 1-1-1Zm-5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-3a1 1 0 1 0 0 2H28a1 1 0 1 0 0-2H10.667Z"/>
</svg>
