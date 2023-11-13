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
    <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v9.333a1 1 0 0 0 1 1h9.333a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm14.667 1.333a1 1 0 1 0 0 2H28a1 1 0 1 0 0-2h-9.333Zm0 6.667a1 1 0 1 0 0 2H28a1 1 0 1 0 0-2h-9.333ZM4 17.667a1 1 0 0 0-1 1V28a1 1 0 0 0 1 1h9.333a1 1 0 0 0 1-1v-9.333a1 1 0 0 0-1-1H4ZM18.667 19a1 1 0 1 0 0 2H28a1 1 0 1 0 0-2h-9.333Zm0 6.667a1 1 0 1 0 0 2H28a1 1 0 1 0 0-2h-9.333Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
