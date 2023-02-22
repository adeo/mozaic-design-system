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
    <path fill-rule="evenodd" d="M5 16C5 9.925 9.925 5 16 5s11 4.925 11 11v2a2.333 2.333 0 1 1-4.667 0v-2a6.333 6.333 0 1 0-1.477 4.066A4.333 4.333 0 0 0 29 18v-2c0-7.18-5.82-13-13-13S3 8.82 3 16s5.82 13 13 13h6.667a1 1 0 1 0 0-2H16C9.925 27 5 22.075 5 16Zm11-4.333a4.333 4.333 0 1 0 0 8.666 4.333 4.333 0 0 0 0-8.666Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
