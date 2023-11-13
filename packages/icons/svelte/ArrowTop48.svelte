<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M22.94 4.94a1.5 1.5 0 0 1 2.12 0l10 10a1.5 1.5 0 0 1-2.12 2.12L25.5 9.622V42a1.5 1.5 0 0 1-3 0V9.621l-7.44 7.44a1.5 1.5 0 0 1-2.12-2.122l10-10Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
