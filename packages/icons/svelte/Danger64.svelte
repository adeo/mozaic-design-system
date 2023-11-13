<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M32 9.166a1.5 1.5 0 0 1 1.305.761l22.667 40a1.5 1.5 0 0 1-1.305 2.24H9.334a1.5 1.5 0 0 1-1.305-2.24l22.666-40A1.5 1.5 0 0 1 32 9.167Zm20.093 40L32 13.71 11.908 49.166h40.185ZM32 25.166a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0v-8a1.5 1.5 0 0 1 1.5-1.5Zm0 20.167A2.667 2.667 0 1 0 32 40a2.667 2.667 0 0 0 0 5.333Z"/>
</svg>
