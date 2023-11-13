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
    <path fill-rule="evenodd" d="M6 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8h-2V7h-3.5v4h-1V7H8v4H6V3Zm6.5 3H16V4h-3.5v2Zm-1-2v2H8V4h3.5ZM2 13a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-1v6h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-6H3a1 1 0 0 1-1-1Zm15.5 1H19v6h-1.5v-6Zm-1 6v-6H15v6h1.5Zm-4-6H14v6h-1.5v-6Zm-1 6v-6H10v6h1.5Zm-4-6H9v6H7.5v-6Zm-1 6v-6H5v6h1.5ZM15 10h-1.5v1H15v-1Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
