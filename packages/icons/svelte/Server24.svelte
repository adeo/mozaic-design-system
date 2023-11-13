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
    <path fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8v2H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-4v-2h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm9 14h8v-5H4v5h8Zm8-7H4V4h16v5ZM6.5 5.5a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm0 7a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
