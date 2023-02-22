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
    <path fill-rule="evenodd" d="M1.75 2.5a.75.75 0 0 1 .75-.75h3.333a.75.75 0 1 1 0 1.5H3.25v2.583a.75.75 0 1 1-1.5 0V2.5Zm15 11.667a.75.75 0 0 1 1.5 0V17.5a.75.75 0 0 1-.75.75h-3.333a.75.75 0 0 1 0-1.5h2.583v-2.583ZM14.167 1.75a.75.75 0 0 0 0 1.5h2.583v2.583a.75.75 0 0 0 1.5 0V2.5a.75.75 0 0 0-.75-.75h-3.333ZM2.5 13.417a.75.75 0 0 1 .75.75v2.583h2.583a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1-.75-.75v-3.333a.75.75 0 0 1 .75-.75Zm3.333-8.334a.75.75 0 0 0-.75.75v8.334c0 .414.336.75.75.75h8.334a.75.75 0 0 0 .75-.75V5.833a.75.75 0 0 0-.75-.75H5.833Zm.75 8.334V6.583h6.834v6.834H6.583Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
