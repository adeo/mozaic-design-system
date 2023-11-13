<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M12.273 12.272a1.5 1.5 0 0 1 1.06-.439H40a1.5 1.5 0 0 1 0 3H16.955l34.772 34.773a1.5 1.5 0 1 1-2.121 2.121L14.833 16.954V40a1.5 1.5 0 1 1-3 0V13.333c0-.398.158-.78.44-1.06Z"/>
</svg>
