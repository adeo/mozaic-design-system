<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M5 4a1 1 0 0 0-2 0v24a1 1 0 1 0 2 0V4Zm24 0a1 1 0 1 0-2 0v24a1 1 0 1 0 2 0V4Zm-16.96 9.374a1 1 0 1 0-1.414-1.414l-3.333 3.333a1 1 0 0 0 0 1.414l3.333 3.333a1 1 0 1 0 1.414-1.414L10.414 17h11.172l-1.626 1.626a1 1 0 1 0 1.414 1.414l3.333-3.333a1 1 0 0 0 0-1.414l-3.333-3.333a1 1 0 1 0-1.414 1.414L21.586 15H10.414l1.626-1.626Z"/>
</svg>
