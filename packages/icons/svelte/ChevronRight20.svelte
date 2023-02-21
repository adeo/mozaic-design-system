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
    <path fill-rule="evenodd" d="M7.386 5.303a.75.75 0 0 1 1.061 0l4.167 4.167a.75.75 0 0 1 0 1.06l-4.167 4.167a.75.75 0 1 1-1.06-1.06L11.022 10 7.386 6.364a.75.75 0 0 1 0-1.06Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
