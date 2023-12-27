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
    <path fill-rule="evenodd" d="M4 7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H4Zm1 16V9h22v14h-4.745A6.335 6.335 0 0 0 16 17.667a3.667 3.667 0 1 0 0-7.334 3.667 3.667 0 0 0 0 7.334A6.335 6.335 0 0 0 9.745 23H5Zm6.783 0h8.434a4.335 4.335 0 0 0-8.434 0ZM16 12.333a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
