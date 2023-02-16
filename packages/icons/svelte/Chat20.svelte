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
    <path fill-rule="evenodd" d="M2.5 1.75a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h3.417V15a.75.75 0 0 0 1.238.57l2.706-2.32h.056v3.417a.5.5 0 0 0 .5.5h3.166l1.534 1.15a.5.5 0 0 0 .8-.4v-.75h2a.5.5 0 0 0 .5-.5v-6.25a.5.5 0 0 0-.5-.5H15.75V2.5a.75.75 0 0 0-.75-.75H2.5Zm13.25 9.167V12.5a.75.75 0 0 1-.75.75h-4.083v2.917h2.833a.5.5 0 0 1 .3.1l.867.65v-.25a.5.5 0 0 1 .5-.5h2v-5.25H15.75Zm-12.5.833v-8.5h11v8.5H9.583a.75.75 0 0 0-.488.18l-1.678 1.44v-.87a.75.75 0 0 0-.75-.75H3.25Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
