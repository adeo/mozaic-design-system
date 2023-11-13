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
    <path fill-rule="evenodd" d="M10.626 5.96a1 1 0 0 1 .707-.293h9.334a1 1 0 0 1 .707.293l2.373 2.374H28a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h4.252l2.374-2.374Zm1.122 1.707-2.374 2.374a1 1 0 0 1-.707.293H5v14h22v-14h-3.667a1 1 0 0 1-.707-.293l-2.373-2.374h-8.505Zm-2.415 5.667a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Zm3 3.333a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0ZM16 11a5.667 5.667 0 1 0 0 11.334A5.667 5.667 0 0 0 16 11Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
