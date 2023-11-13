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
    <path fill-rule="evenodd" d="M6.5 3a1 1 0 0 1 1-1H21a1 1 0 0 1 1 1v14a5 5 0 0 1-5 5H5.25A3.25 3.25 0 0 1 2 18.75v-6a1 1 0 0 1 1-1h3.5V3ZM4 18.75a1.25 1.25 0 1 0 2.5 0v-5H4v5Zm4.5 0c0 .443-.089.865-.25 1.25H17a3 3 0 0 0 3-3V4H8.5v14.75ZM9.625 5.625a.5.5 0 0 1 .5-.5h8.25a.5.5 0 0 1 .5.5v3.75a.5.5 0 0 1-.5.5h-8.25a.5.5 0 0 1-.5-.5v-3.75Zm1 .5v2.75h7.25v-2.75h-7.25Zm-1 6.25a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 0 1h-7.875a.5.5 0 0 1-.5-.5Zm.5 2.125a.5.5 0 0 0 0 1H18a.5.5 0 0 0 0-1h-7.875Zm4.125 3.625h-4.125a.5.5 0 0 1 0-1h4.125a.5.5 0 0 1 0 1Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
