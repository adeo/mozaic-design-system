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
    <path fill-rule="evenodd" d="M10.53 1.97a.75.75 0 0 0-1.06 0L6.136 5.303a.75.75 0 0 0 1.06 1.06L9.25 4.312V12.5a.75.75 0 0 0 1.5 0V4.31l2.053 2.054a.75.75 0 0 0 1.06-1.061L10.53 1.97ZM4.167 8a.75.75 0 0 0-.75.75v7.083c0 .414.335.75.75.75h11.666a.75.75 0 0 0 .75-.75V8.75a.75.75 0 0 0-.75-.75h-2.5v1.5h1.75v5.583H4.917V9.5h1.75V8h-2.5Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
