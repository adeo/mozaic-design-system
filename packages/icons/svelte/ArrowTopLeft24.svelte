<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M4.293 4.293A1 1 0 0 1 5 4h10a1 1 0 1 1 0 2H7.414l12.293 12.293a1 1 0 0 1-1.414 1.414L6 7.414V15a1 1 0 1 1-2 0V5a1 1 0 0 1 .293-.707Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
