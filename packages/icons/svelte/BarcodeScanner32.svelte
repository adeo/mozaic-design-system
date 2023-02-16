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
    <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V5h5a1 1 0 1 0 0-2H4Zm1 19a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5v-5Zm23-1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1ZM22 3a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-6Zm-10.667 7.667v10.666H8.667V10.667h2.666Zm10.667 0h-2.667v10.666H22V10.667Zm-8 0h2.667v10.666H14V10.667Zm-1 0h-.667v10.666H13V10.667Zm10 0h.667v10.666H23V10.667Zm-4.667 0h-.666v10.666h.666V10.667Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
