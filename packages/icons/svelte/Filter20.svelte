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
    <path fill-rule="evenodd" d="M4.167 3.417a.75.75 0 0 1 .75.75v1.035a2.418 2.418 0 0 1 0 4.596v6.035a.75.75 0 0 1-1.5 0V9.798a2.418 2.418 0 0 1 0-4.596V4.167a.75.75 0 0 1 .75-.75Zm0 3.166a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834Zm11.666-3.166a.75.75 0 0 1 .75.75v1.035a2.418 2.418 0 0 1 0 4.596v6.035a.75.75 0 0 1-1.5 0V9.798a2.418 2.418 0 0 1 0-4.596V4.167a.75.75 0 0 1 .75-.75Zm0 3.166a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834ZM10.75 4.167a.75.75 0 0 0-1.5 0v6.035a2.418 2.418 0 0 0 0 4.596v1.035a.75.75 0 0 0 1.5 0v-1.035a2.418 2.418 0 0 0 0-4.596V4.167ZM9.083 12.5a.917.917 0 1 1 1.834 0 .917.917 0 0 1-1.834 0Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
