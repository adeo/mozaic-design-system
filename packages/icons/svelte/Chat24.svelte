<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4v2a1 1 0 0 0 1.65.76L11.87 16H12v4a.5.5 0 0 0 .5.5h3.833l1.867 1.4a.5.5 0 0 0 .8-.4v-1h2.5a.5.5 0 0 0 .5-.5v-7.5a.5.5 0 0 0-.5-.5H19V3a1 1 0 0 0-1-1H3Zm16 11v2a1 1 0 0 1-1 1h-5v3.5h3.5a.5.5 0 0 1 .3.1l1.2.9V20a.5.5 0 0 1 .5-.5H21V13h-2ZM4 14V4h13v10h-5.5a1 1 0 0 0-.65.24L9 15.827V15a1 1 0 0 0-1-1H4Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
