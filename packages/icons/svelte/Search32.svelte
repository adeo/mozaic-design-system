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
    <path fill-rule="evenodd" d="M10.333 14.666a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-9a9 9 0 0 0-7.032 14.618L5.96 24.626a1 1 0 1 0 1.414 1.414l4.342-4.342a9 9 0 1 0 5.618-16.032Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
