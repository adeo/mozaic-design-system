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
    <path fill-rule="evenodd" d="M14.667 5a4.334 4.334 0 0 0-4.323 4.025 1.002 1.002 0 0 1-.667 1.422A4.333 4.333 0 1 0 15 14.667v-1.334a1 1 0 1 1 2 0V17.4a5 5 0 0 0 8.667-3.4c0-1.401-.569-2.81-1.542-3.786-.888-.89-2.12-1.429-3.63-1.272a1 1 0 0 1-1.6-.562A4.335 4.335 0 0 0 14.667 5ZM15 19.285A6.333 6.333 0 1 1 8.358 8.767a6.334 6.334 0 0 1 12.17-1.836 6.335 6.335 0 0 1 5.013 1.87c1.36 1.363 2.126 3.286 2.126 5.198a7 7 0 0 1-7.902 6.943L17 23.707V28a1 1 0 1 1-2 0v-8.715Zm2 3.008v-2.33a6.97 6.97 0 0 0 1.603.727L17 22.293Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
