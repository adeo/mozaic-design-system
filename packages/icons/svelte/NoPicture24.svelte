<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 12a8 8 0 0 1 12.906-6.32l-2.01 2.01-.542-.544A.5.5 0 0 0 14 7h-4a.5.5 0 0 0-.354.146L8.793 8H7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .192.394L5.68 16.906A7.965 7.965 0 0 1 4 12Zm5.414 4-2.32 2.32A8 8 0 0 0 18.32 7.094l-1.012 1.012a.5.5 0 0 1 .192.394v7a.5.5 0 0 1-.5.5H9.414ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM9.354 8.854 10.207 8h3.586l.853.854A.5.5 0 0 0 15 9h1.5v6h-9V9H9a.5.5 0 0 0 .354-.146ZM8.5 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM9.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"/>
</svg>
