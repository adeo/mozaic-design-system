<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M11 4a1 1 0 1 0-2 0v1.667H4a1 1 0 0 0-1 1V28a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V6.667a1 1 0 0 0-1-1h-5V4a1 1 0 1 0-2 0v1.667h-4V4a1 1 0 1 0-2 0v1.667h-4V4Zm10 3.667h-4v1.666a1 1 0 1 1-2 0V7.667h-4v1.666a1 1 0 1 1-2 0V7.667H5V13h22V7.667h-4v1.666a1 1 0 1 1-2 0V7.667ZM5 15v12h22V15H5Z"/>
</svg>
