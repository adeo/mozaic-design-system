<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M11.333 9.333a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Zm0 18.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333ZM14 16a2.667 2.667 0 1 1-5.333 0A2.667 2.667 0 0 1 14 16Zm6.667-6.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Zm2.666 16a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Zm-2.666-6.666a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
