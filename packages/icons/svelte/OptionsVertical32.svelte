<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M18.667 6.667a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0Zm0 18.666a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0ZM16 18.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z"/>
</svg>
