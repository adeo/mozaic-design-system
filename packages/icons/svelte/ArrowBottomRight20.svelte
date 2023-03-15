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
    <path fill-rule="evenodd" d="M2.47 2.47a.75.75 0 0 1 1.06 0l8.72 8.72V6a.75.75 0 1 1 1.5 0v7a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h5.19L2.47 3.53a.75.75 0 0 1 0-1.06Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="16" height="16" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
