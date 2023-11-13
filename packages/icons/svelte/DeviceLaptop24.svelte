<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.5h1a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1h1V6Zm2 8.5h12V6H6v8.5Zm-2 2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2H4ZM10.5 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"/>
</svg>
