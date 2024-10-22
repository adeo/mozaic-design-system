<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 2a1 1 0 00-1 1v3a1 1 0 001 1v10H3a1 1 0 00-1 1v3.5a1 1 0 001 1h18a1 1 0 001-1V18a1 1 0 00-1-1h-1V7a1 1 0 001-1V3a1 1 0 00-1-1H4zm14 5h-5.5v4.5H18V7zm-6.5 0H6v4.5h5.5V7zM5 5V4h14v1H5zm1 7.5h5.5V17H6v-4.5zm6.5 0V17H18v-4.5h-5.5zM4 19v1.5h16V19H4z"/></svg>