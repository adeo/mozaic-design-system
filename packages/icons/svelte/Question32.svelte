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
    <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1.6.8l5.067-3.8H28a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm1 20V5h22v18H17l-.267.2L13 26v-3H5Zm10-3.387a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm.765-12.273L16 7.333a4 4 0 0 1 1.76 7.6 1.213 1.213 0 0 0-.76 1.08v.334a1 1 0 0 1-2-.014V16a3.213 3.213 0 0 1 1.88-2.88 2.013 2.013 0 0 0-.7-3.772L16 9.333a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 0 1 3.765-3.993Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
