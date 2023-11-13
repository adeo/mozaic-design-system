<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M9.5 32C9.5 19.574 19.574 9.5 32 9.5S54.5 19.574 54.5 32 44.426 54.5 32 54.5 9.5 44.426 9.5 32ZM32 6.5C17.917 6.5 6.5 17.917 6.5 32S17.917 57.5 32 57.5 57.5 46.083 57.5 32 46.083 6.5 32 6.5Zm13.06 19.894a1.5 1.5 0 0 0-2.12-2.121L29.332 37.879l-6.939-6.94a1.5 1.5 0 0 0-2.121 2.122l8 8a1.5 1.5 0 0 0 2.121 0L45.06 26.394Z"/>
</svg>
