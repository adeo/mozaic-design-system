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
    <path fill-rule="evenodd" d="M5 16C5 9.925 9.925 5 16 5c3.716 0 7.003 1.842 8.995 4.667H20.8a1 1 0 0 0 0 2h6.667a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v4.288A12.982 12.982 0 0 0 16 3C8.82 3 3 8.82 3 16s5.82 13 13 13c6.692 0 12.202-5.056 12.92-11.557a1 1 0 1 0-1.987-.22C26.325 22.724 21.66 27 16 27 9.925 27 5 22.075 5 16Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
