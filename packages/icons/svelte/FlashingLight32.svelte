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
    <path fill-rule="evenodd" d="M17 4a1 1 0 1 0-2 0v5.333a1 1 0 1 0 2 0V4Zm-4.96 8.04a1 1 0 0 1-1.414 0l-4-4A1 1 0 1 1 8.04 6.626l4 4a1 1 0 0 1 0 1.414Zm13.334-5.414a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0ZM6.626 25.374a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0Zm14.748-5.414a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414-1.414l-4-4ZM17 22.667a1 1 0 1 0-2 0V28a1 1 0 1 0 2 0v-5.333ZM21.667 16a1 1 0 0 1 1-1H28a1 1 0 1 1 0 2h-5.333a1 1 0 0 1-1-1ZM9.333 17a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2h5.333ZM18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
