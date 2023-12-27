<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm0 2h22v22H5V5Zm5.354 2.687a.5.5 0 0 0-.708-.707L6.98 9.646a.5.5 0 0 0 .707.708l2.667-2.667Zm4 3.293a.5.5 0 0 1 0 .707l-2.667 2.667a.5.5 0 0 1-.707-.708l2.666-2.666a.5.5 0 0 1 .708 0Zm0-3.293a.5.5 0 0 0-.708-.707L6.98 13.646a.5.5 0 0 0 .707.708l6.667-6.667Z"/>
</svg>
