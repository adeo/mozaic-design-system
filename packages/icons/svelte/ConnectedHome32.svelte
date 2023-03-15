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
    <path fill-rule="evenodd" d="M16.614 3.21a1 1 0 0 0-1.228 0l-12 9.334a1 1 0 1 0 1.228 1.579l1.053-.82V28a1 1 0 0 0 1 1h18.666a1 1 0 0 0 1-1V13.304l1.053.819a1 1 0 0 0 1.228-1.579l-12-9.333Zm7.72 8.538L16 5.267l-8.333 6.481V27h16.666V11.748Zm-7 10.919a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.666 0ZM13.29 19.29a.5.5 0 1 0 .707.707 2.833 2.833 0 0 1 4.007 0 .5.5 0 0 0 .707-.707 3.833 3.833 0 0 0-5.421 0Zm-1.886-1.18a.5.5 0 0 1 0-.706 6.5 6.5 0 0 1 9.193 0 .5.5 0 1 1-.707.707 5.5 5.5 0 0 0-7.779 0 .5.5 0 0 1-.707 0ZM9.52 15.519a.5.5 0 1 0 .707.707 8.167 8.167 0 0 1 11.55 0 .5.5 0 0 0 .707-.707 9.167 9.167 0 0 0-12.964 0Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
