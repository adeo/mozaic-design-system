<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M17.5 11a6.5 6.5 0 1 1 13 0v12a6.5 6.5 0 1 1-13 0V11ZM24 7.5a3.5 3.5 0 0 0-3.5 3.5v12a3.5 3.5 0 1 0 7 0V11A3.5 3.5 0 0 0 24 7.5Zm-1.5 28.918c-6.75-.747-12-6.47-12-13.418v-6a1.5 1.5 0 0 1 3 0v6c0 5.799 4.701 10.5 10.5 10.5S34.5 28.799 34.5 23v-6a1.5 1.5 0 0 1 3 0v6c0 6.949-5.25 12.671-12 13.418V40.5H30a1.5 1.5 0 0 1 0 3H18a1.5 1.5 0 0 1 0-3h4.5v-4.082Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
