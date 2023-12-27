<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M3.25 10a6.75 6.75 0 0 1 13.5 0v1.25a1.333 1.333 0 0 1-2.667 0V10a4.083 4.083 0 1 0-1.068 2.754 2.833 2.833 0 0 0 5.235-1.504V10A8.25 8.25 0 1 0 10 18.25h4.167a.75.75 0 0 0 0-1.5H10A6.75 6.75 0 0 1 3.25 10ZM10 7.417a2.583 2.583 0 1 0 0 5.166 2.583 2.583 0 0 0 0-5.166Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
