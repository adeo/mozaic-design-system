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
    <path fill-rule="evenodd" d="M19.333 3a1 1 0 0 0-.707.293L3.293 18.626a1 1 0 0 0 0 1.414l8.667 8.667a1 1 0 0 0 1.414 0l15.333-15.333a1 1 0 0 0 .293-.707V4a1 1 0 0 0-1-1h-8.667ZM5.414 19.333 19.747 5H27v7.252L12.667 26.587l-7.253-7.253Zm14.42-8.666a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
