<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M10.136 4.137a.75.75 0 0 1 1.061 0L14.53 7.47a.75.75 0 0 1 0 1.06l-3.333 3.334a.75.75 0 0 1-1.06-1.06l2.052-2.054H2a.75.75 0 0 1 0-1.5h10.19l-2.054-2.053a.75.75 0 0 1 0-1.06Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="16" height="16" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
