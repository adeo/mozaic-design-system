<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0V6Zm6 0a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0V6Z"/>
</svg>
