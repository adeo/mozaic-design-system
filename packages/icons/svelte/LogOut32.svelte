<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h13.333a1 1 0 0 0 1-1v-5.333a1 1 0 1 0-2 0V27H5V5h11.333v4.333a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1H4Zm20.707 8.293a1 1 0 0 0-1.414 1.414L25.586 15H12a1 1 0 1 0 0 2h13.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4Z"/>
</svg>
