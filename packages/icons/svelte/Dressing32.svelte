<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0v-4.167h10.5v4.834a.5.5 0 0 0 1 0V11.833h5v1.717a2.5 2.5 0 0 0-2 2.45.5.5 0 0 0 1 0 1.5 1.5 0 0 1 3 0 .5.5 0 0 0 1 0 2.5 2.5 0 0 0-2-2.45v-1.717H27V28a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1H4Zm23 7.833H16.5V5H27v5.833Zm-11.5 12H5V18.5h10.5v4.333Zm0-5.333v-5.667H5V17.5h10.5Zm0-6.667H5V5h10.5v5.833Zm-6.167 9.334a.5.5 0 1 0 0 1h2a.5.5 0 1 0 0-1h-2Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
