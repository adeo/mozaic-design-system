<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M5.333 3a1 1 0 00-1 1v4a1 1 0 001 1h.334v14H4a1 1 0 00-1 1v4.667a1 1 0 001 1h24a1 1 0 001-1V24a1 1 0 00-1-1h-1.667V9h.334a1 1 0 001-1V4a1 1 0 00-1-1H5.333zm19 6H16.5v6.5h7.833V9zM15.5 9H7.667v6.5H15.5V9zM6.333 7V5h19.334v2H6.333zm1.334 9.5H15.5V23H7.667v-6.5zm8.833 0V23h7.833v-6.5H16.5zM5 25v2.667h22V25H5z"/></svg>