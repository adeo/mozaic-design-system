<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M3.25 10a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0ZM10 1.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.518 6.028a.75.75 0 0 0-1.143.639v6.666a.75.75 0 0 0 1.143.64l5.417-3.334a.75.75 0 0 0 0-1.278L8.518 6.028ZM12.111 10l-3.236 1.991V8.01L12.111 10Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
