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
    <path fill-rule="evenodd" d="M8.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
