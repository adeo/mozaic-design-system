<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M8.5 7H5.7a8 8 0 1 1-1.706 5.89 1 1 0 0 0-1.988.22c.553 5 4.791 8.89 9.94 8.89 5.522 0 10-4.477 10-10s-4.478-10-10-10A9.975 9.975 0 0 0 4.5 5.324V3a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2ZM13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414-1.414L13 11.586V8Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
