<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M32 9.5C19.574 9.5 9.5 19.574 9.5 32S19.574 54.5 32 54.5 54.5 44.426 54.5 32 44.426 9.5 32 9.5ZM6.5 32C6.5 17.917 17.917 6.5 32 6.5S57.5 17.917 57.5 32 46.083 57.5 32 57.5 6.5 46.083 6.5 32ZM32 22.833a3.833 3.833 0 0 0-3.833 3.834 1.5 1.5 0 0 1-3 0 6.833 6.833 0 1 1 13.666 0c0 1.196-.54 2.21-1.125 3.006-.585.796-1.342 1.538-1.995 2.173l-.061.06c-.667.649-1.224 1.191-1.633 1.719-.429.553-.519.874-.519 1.042a1.5 1.5 0 0 1-3 0c0-1.166.577-2.144 1.148-2.88.542-.7 1.239-1.377 1.85-1.972l.122-.118c.681-.663 1.257-1.238 1.672-1.802.415-.564.541-.952.541-1.228A3.833 3.833 0 0 0 32 22.833Zm0 22.5A2.667 2.667 0 1 0 32 40a2.667 2.667 0 0 0 0 5.333Z"/>
</svg>
