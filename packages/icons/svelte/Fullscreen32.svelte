<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h5.333a1 1 0 0 1 0 2H5v4.333a1 1 0 0 1-2 0V4Zm24 18.667a1 1 0 1 1 2 0V28a1 1 0 0 1-1 1h-5.333a1 1 0 1 1 0-2H27v-4.333ZM22.667 3a1 1 0 1 0 0 2H27v4.333a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5.333ZM4 21.667a1 1 0 0 1 1 1V27h4.333a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-5.333a1 1 0 0 1 1-1ZM9.333 8.333a1 1 0 0 0-1 1v13.334a1 1 0 0 0 1 1h13.334a1 1 0 0 0 1-1V9.333a1 1 0 0 0-1-1H9.333Zm1 13.334V10.333h11.334v11.334H10.333Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
