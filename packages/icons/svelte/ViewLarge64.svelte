<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M6.5 8A1.5 1.5 0 0 1 8 6.5h48A1.5 1.5 0 0 1 57.5 8v37.333a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5V8Zm3 1.5v34.333h45V9.5h-45ZM6.5 56A1.5 1.5 0 0 1 8 54.5h48a1.5 1.5 0 0 1 0 3H8A1.5 1.5 0 0 1 6.5 56Z"/>
</svg>
