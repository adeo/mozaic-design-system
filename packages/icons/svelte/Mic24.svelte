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
    <path fill-rule="evenodd" d="M8.5 5.5a3.5 3.5 0 1 1 7 0v6a3.5 3.5 0 1 1-7 0v-6ZM12 4a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 12 4Zm0 12.5a5 5 0 0 0 5-5v-3a1 1 0 1 1 2 0v3a7.001 7.001 0 0 1-6 6.93V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.57a7.001 7.001 0 0 1-6-6.93v-3a1 1 0 0 1 2 0v3a5 5 0 0 0 5 5Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
