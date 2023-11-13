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
    <path fill-rule="evenodd" d="M15.207 1.793a1 1 0 1 0-1.414 1.414l.793.793H5a1 1 0 0 0-1 1v9.586l-.793-.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l2.5-2.5a1 1 0 1 0-1.414-1.414L6 14.586V6h8.586l-.793.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5ZM20 9a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V9Zm0 4a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Zm0 4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1v-2ZM9 18a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H9Zm4 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
