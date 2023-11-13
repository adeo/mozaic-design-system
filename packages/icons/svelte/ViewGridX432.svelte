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
    <path fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h9.333a1 1 0 0 1 1 1v9.333a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm2 1v7.333h7.333V5H5Zm12.667-1a1 1 0 0 1 1-1H28a1 1 0 0 1 1 1v9.333a1 1 0 0 1-1 1h-9.333a1 1 0 0 1-1-1V4Zm2 1v7.333H27V5h-7.333ZM3 18.667a1 1 0 0 1 1-1h9.333a1 1 0 0 1 1 1V28a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.333Zm2 1V27h7.333v-7.333H5Zm12.667-1a1 1 0 0 1 1-1H28a1 1 0 0 1 1 1V28a1 1 0 0 1-1 1h-9.333a1 1 0 0 1-1-1v-9.333Zm2 1V27H27v-7.333h-7.333Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
