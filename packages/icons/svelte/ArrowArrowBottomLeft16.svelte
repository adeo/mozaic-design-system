<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  
  <path fill-rule="evenodd" d="M13.707 2.293a1 1 0 0 1 0 1.414L5.414 12H10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v4.586l8.293-8.293a1 1 0 0 1 1.414 0Z"/>
</svg>
