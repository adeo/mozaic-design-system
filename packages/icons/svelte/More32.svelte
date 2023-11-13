<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M17 6.667a1 1 0 0 0-2 0V15H6.667a1 1 0 1 0 0 2H15v8.333a1 1 0 0 0 2 0V17h8.333a1 1 0 1 0 0-2H17V6.667Z"/>
</svg>
