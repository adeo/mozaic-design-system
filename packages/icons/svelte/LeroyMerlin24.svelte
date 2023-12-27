<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.293 6.293a1 1 0 0 1 1.414 0l9 9A1 1 0 0 1 21 17H3a1 1 0 0 1-.707-1.707l9-9ZM5.414 15h13.172L12 8.414 5.414 15Z"/>
</svg>
