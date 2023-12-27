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
    <path fill-rule="evenodd" d="M14.06 12.94a1.5 1.5 0 0 0-2.12 2.12L20.878 24l-8.94 8.94a1.5 1.5 0 0 0 2.122 2.12l10-10a1.5 1.5 0 0 0 0-2.12l-10-10Zm12 0a1.5 1.5 0 0 0-2.12 2.12L32.878 24l-8.94 8.94a1.5 1.5 0 0 0 2.122 2.12l10-10a1.5 1.5 0 0 0 0-2.12l-10-10Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
