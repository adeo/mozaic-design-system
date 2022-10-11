<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M8 2a3 3 0 0 0-3 3v1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1V5a3 3 0 0 0-3-3Zm1 4V5a1 1 0 1 0-2 0v1h2Zm-4 6V8h6v4H5Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="16" height="16" />
    </clipPath>
  </defs>
</svg>
