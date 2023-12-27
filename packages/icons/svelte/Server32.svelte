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
    <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v18.667a1 1 0 0 0 1 1h11V27H9.333a1 1 0 1 0 0 2h13.334a1 1 0 1 0 0-2H17v-3.333h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm12 18.667h11v-7.334H5v7.334h11Zm11-9.334H5V5h22v7.333ZM8.667 7.667a1 1 0 1 0 0 2h2.666a1 1 0 1 0 0-2H8.667Zm0 9.333a1 1 0 1 0 0 2h2.666a1 1 0 1 0 0-2H8.667Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
