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
    <path fill-rule="evenodd" d="M5.667 6.667a1 1 0 0 1 1-1h18.666a1 1 0 0 1 1 1v18.666a1 1 0 0 1-1 1H6.667a1 1 0 0 1-1-1V6.667Zm2 1v16.666h16.666V7.667H7.667ZM15.5 16a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5-4.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 8.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5ZM12 13.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM13.333 16a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0ZM12 21.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
