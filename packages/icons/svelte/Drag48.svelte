<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M17 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm4-18a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm10-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm4 24a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
