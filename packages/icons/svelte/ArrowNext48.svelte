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
    <path fill-rule="evenodd" d="M30.94 12.94a1.5 1.5 0 0 1 2.12 0l10 10a1.5 1.5 0 0 1 0 2.12l-10 10a1.5 1.5 0 0 1-2.12-2.12l7.439-7.44H6a1.5 1.5 0 0 1 0-3h32.379l-7.44-7.44a1.5 1.5 0 0 1 0-2.12Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
