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
    <path fill-rule="evenodd" d="M6 3.75a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0V4.81l-8.72 8.72a.75.75 0 0 1-1.06-1.06l8.72-8.72H6Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="16" height="16" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
