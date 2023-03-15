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
    <path fill-rule="evenodd" d="M5.96 5.96a1 1 0 0 1 1.414 0l16.96 16.96V12a1 1 0 1 1 2 0v13.334a1 1 0 0 1-1 1H12a1 1 0 0 1 0-2h10.92L5.96 7.374a1 1 0 0 1 0-1.414Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
