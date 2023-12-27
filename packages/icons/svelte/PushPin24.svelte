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
    <path fill-rule="evenodd" d="M14.707 2.293a1 1 0 1 0-1.414 1.414l.293.293-5 5H6a1 1 0 0 0-.707.293l-1 1a1 1 0 0 0 0 1.414L7.586 15l-3.293 3.293a1 1 0 1 0 1.414 1.414L9 16.414l3.293 3.293a1 1 0 0 0 1.414 0l1-1A1 1 0 0 0 15 18v-2.586l5-5 .293.293a1 1 0 0 0 1.414-1.414l-1-1-5-5-1-1Zm-5 12L13 17.586V15a1 1 0 0 1 .293-.707L18.586 9 15 5.414l-5.293 5.293A1 1 0 0 1 9 11H6.414l3.293 3.293Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
