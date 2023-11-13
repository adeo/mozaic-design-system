<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M2.833 4.667c0-1.013.821-1.834 1.834-1.834h22.666a1.833 1.833 0 0 1 .334 3.637V20a1 1 0 0 1-1 1H17v3.049l6.114 3.057a1 1 0 0 1-.895 1.788L17 26.285v1.05a1 1 0 1 1-2 0v-1.05l-5.219 2.61a1 1 0 0 1-.894-1.788L15 24.049V21H5.333a1 1 0 0 1-1-1V6.47a1.834 1.834 0 0 1-1.5-1.803ZM16 19h9.667V6.5H6.333V19H16ZM4.667 3.833a.833.833 0 0 0 0 1.667h22.666a.833.833 0 0 0 0-1.667H4.667Zm10.277 5.751a.5.5 0 0 0-.777.416v5.333a.5.5 0 0 0 .777.416l4-2.666a.5.5 0 0 0 0-.832l-4-2.667Zm2.821 3.083-2.598 1.732v-3.465l2.598 1.733Z"/>
</svg>
