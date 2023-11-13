<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M16 4.333a1 1 0 0 1 .87.507l11.333 20a1 1 0 0 1-.87 1.494H4.667a1 1 0 0 1-.87-1.494l11.333-20a1 1 0 0 1 .87-.506Zm9.617 20L16 7.363l-9.617 16.97h19.234Zm-9.617-12a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm0 10.334A1.333 1.333 0 1 0 16 20a1.333 1.333 0 0 0 0 2.667Z"/>
</svg>
