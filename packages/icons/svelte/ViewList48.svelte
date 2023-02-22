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
    <path fill-rule="evenodd" d="M4.5 6A1.5 1.5 0 0 1 6 4.5h36A1.5 1.5 0 0 1 43.5 6v7a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 13V6Zm3 1.5v4h33v-4h-33Zm-3 13A1.5 1.5 0 0 1 6 19h36a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 42 29H6a1.5 1.5 0 0 1-1.5-1.5v-7Zm3 1.5v4h33v-4h-33Zm-3 13A1.5 1.5 0 0 1 6 33.5h36a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 42v-7Zm3 1.5v4h33v-4h-33Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
