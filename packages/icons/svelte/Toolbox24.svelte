<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8 3a1 1 0 0 0-1 1v3H6a4 4 0 0 0-4 4v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9a4 4 0 0 0-4-4h-1V4a1 1 0 0 0-1-1H8Zm-4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2h-3.5v-1a.5.5 0 0 0-1 0v1h-7v-1a.5.5 0 0 0-1 0v1H4v-2Zm0 3v5h16v-5h-3.5v1a.5.5 0 0 1-1 0v-1h-7v1a.5.5 0 0 1-1 0v-1H4Zm11-7H9V5h6v2Z"/>
</svg>
