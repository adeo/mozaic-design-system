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
    <path fill-rule="evenodd" d="M8 3a1 1 0 0 0-1 1v3H6a4 4 0 0 0-4 4v10h20V11a4 4 0 0 0-4-4h-1V4a1 1 0 0 0-1-1H8Zm7 4V5H9v2h6ZM8 9h10a2 2 0 0 1 2 2v2h-3.5v-1a.5.5 0 0 0-1 0v1h-7v-1a.5.5 0 0 0-1 0v1H4v-2a2 2 0 0 1 2-2h2Zm-4 5v5h16v-5h-3.5v1a.5.5 0 0 1-1 0v-1h-7v1a.5.5 0 0 1-1 0v-1H4Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
