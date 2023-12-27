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
    <path fill-rule="evenodd" d="M5 4a1 1 0 0 1 1 1v1.17a3.001 3.001 0 0 1 0 5.66V19a1 1 0 1 1-2 0v-7.17a3.001 3.001 0 0 1 0-5.66V5a1 1 0 0 1 1-1Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm14-4a1 1 0 0 1 1 1v1.17a3.001 3.001 0 0 1 0 5.66V19a1 1 0 1 1-2 0v-7.17a3.001 3.001 0 0 1 0-5.66V5a1 1 0 0 1 1-1Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-6-3a1 1 0 1 0-2 0v7.17a3.001 3.001 0 0 0 0 5.66V19a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V5Zm-2 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
