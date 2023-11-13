<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h12c3.23 0 6.185 1.178 8.458 3.128l1.168-1.168a1 1 0 1 1 1.414 1.414l-1.168 1.168A12.949 12.949 0 0 1 29 16a1 1 0 0 1-1 1h-.338a11.635 11.635 0 0 1-.827 4.667H28a1 1 0 1 1 0 2h-2.2A11.657 11.657 0 0 1 16 29a11.657 11.657 0 0 1-9.8-5.333H4a1 1 0 1 1 0-2h1.165A11.635 11.635 0 0 1 4.338 17H4a1 1 0 0 1-1-1V4Zm2.43 11h-.385C5.55 9.393 10.262 5 16 5s10.45 4.393 10.955 10h-3.353a7.668 7.668 0 0 0-15.204 0H5.429Zm.909 2a9.667 9.667 0 0 0 16.964 6.667H11.667v-2h12.976A9.626 9.626 0 0 0 25.661 17h-2.994a1 1 0 0 1-1-1 5.667 5.667 0 0 0-11.334 0 1 1 0 0 1-1 1H6.34Zm2.73-12A13.068 13.068 0 0 0 5 9.069V5h4.069ZM16 16.5a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667Zm-1.833.833a1.833 1.833 0 1 1 3.666 0 1.833 1.833 0 0 1-3.666 0Z"/>
</svg>
