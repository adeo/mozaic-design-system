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
    <path fill-rule="evenodd" d="M11.667 7.333a4.333 4.333 0 1 1 8.666 0v8a4.333 4.333 0 1 1-8.666 0v-8ZM16 5a2.333 2.333 0 0 0-2.333 2.333v8a2.333 2.333 0 1 0 4.666 0v-8A2.333 2.333 0 0 0 16 5Zm.002 17.333H16a7 7 0 0 1-7-7v-4a1 1 0 1 0-2 0v4a9 9 0 0 0 8 8.945V27h-3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.722a9 9 0 0 0 8-8.945v-4a1 1 0 1 0-2 0v4a7 7 0 0 1-6.998 7Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
