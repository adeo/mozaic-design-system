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
    <path fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5v2a1 1 0 0 0 1.6.8l3.733-2.8H21a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm1 15V4h16v13h-7.333l-.267.2L10 19v-2H4Zm7.25-2.29a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm.574-9.205L12 5.5a3 3 0 0 1 1.32 5.7.91.91 0 0 0-.57.81v.25a.75.75 0 0 1-1.5-.01V12a2.41 2.41 0 0 1 1.41-2.16 1.51 1.51 0 0 0-.525-2.83L12 7a1.5 1.5 0 0 0-1.5 1.5.75.75 0 0 1-1.5 0 3 3 0 0 1 2.824-2.995Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
