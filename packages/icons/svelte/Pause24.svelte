<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M10 6a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0V6Zm6 0a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0V6Z"/>
</svg>
