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
    <path fill-rule="evenodd" d="M8 1.25a.75.75 0 0 1 .75.75v10.19l2.053-2.054a.75.75 0 0 1 1.06 1.061L8.53 14.53a.75.75 0 0 1-1.06 0l-3.334-3.333a.75.75 0 0 1 1.061-1.06l2.053 2.052V2A.75.75 0 0 1 8 1.25Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="16" height="16" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
