<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.5 3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3.5V3a1 1 0 1 0-2 0v1H13V3a1 1 0 1 0-2 0v1H8.5V3Zm7 3H13v1a1 1 0 1 1-2 0V6H8.5v1a1 1 0 0 1-2 0V6H4v3.5h16V6h-2.5v1a1 1 0 1 1-2 0V6ZM4 11.5V20h16v-8.5H4Z"/>
</svg>
