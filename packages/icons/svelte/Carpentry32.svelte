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
    <path fill-rule="evenodd" d="M12 7a1 1 0 0 0-1 1v4.333H8a1 1 0 0 0-1 1v4.334H4a1 1 0 0 0-1 1V24a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-5.333a1 1 0 0 0-1-1h-3v-4.334a1 1 0 0 0-1-1h-3V8a1 1 0 0 0-1-1h-8Zm11 10.667v-3.334h-6v3.334h6Zm-4 2h-6V23h6v-3.333ZM21 23h6v-3.333h-6V23Zm-10-3.333V23H5v-3.333h6Zm4-2H9v-3.334h6v3.334Zm1-5.334h-3V9h6v3.333h-3Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
