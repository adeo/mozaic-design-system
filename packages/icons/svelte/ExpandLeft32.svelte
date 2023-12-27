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
    <path fill-rule="evenodd" d="M9.374 8.626a1 1 0 1 0-1.414 1.415L13.92 16l-5.96 5.96a1 1 0 1 0 1.414 1.414l6.666-6.667a1 1 0 0 0 0-1.414L9.374 8.626Zm8 0a1 1 0 0 0-1.414 1.415L21.92 16l-5.96 5.959a1 1 0 0 0 1.414 1.414l6.666-6.667a1 1 0 0 0 0-1.414l-6.666-6.667Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
