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
    <path fill-rule="evenodd" d="M6.667 5.667a1 1 0 0 0-1 1V12a1 1 0 1 0 2 0V9.08L15 16.415v8.92a1 1 0 1 0 2 0V16a1 1 0 0 0-.293-.707L9.081 7.667H12a1 1 0 1 0 0-2H6.667ZM24.333 9.08V12a1 1 0 1 0 2 0V6.667a1 1 0 0 0-1-1H20a1 1 0 1 0 0 2h2.92l-4.294 4.292a1 1 0 0 0 1.414 1.415l4.293-4.293Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
