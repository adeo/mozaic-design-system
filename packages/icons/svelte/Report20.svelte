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
    <path fill-rule="evenodd" d="M5.427 1.87a.75.75 0 0 1 .717-.053l9.166 4.167a.75.75 0 0 1 0 1.365l-8.727 3.967V17.5a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .344-.63Zm1.157 7.799 6.604-3.002-6.605-3.002v6.004Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
