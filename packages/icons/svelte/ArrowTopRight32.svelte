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
    <path fill-rule="evenodd" d="M11 6.667a1 1 0 0 1 1-1h13.333a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0V9.081l-16.96 16.96a1 1 0 0 1-1.413-1.414l16.96-16.96H12a1 1 0 0 1-1-1Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
