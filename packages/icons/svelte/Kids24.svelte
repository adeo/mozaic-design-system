<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M6.5 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8H21a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3.5V3Zm2 8h7V4h-7v7ZM20 13h-7v7h7v-7Zm-9 0H4v7h7v-7Zm.55-7.72L9.553 9.277a.5.5 0 1 0 .894.447L11.06 8.5h1.882l.612 1.223a.5.5 0 1 0 .894-.447L12.45 5.281a.5.5 0 0 0-.9 0ZM12 6.619l.441.882h-.882L12 6.618Zm3.5 9.882a1.5 1.5 0 0 1 2.492-1.125.5.5 0 0 0 .662-.75 2.5 2.5 0 1 0 0 3.75.5.5 0 0 0-.662-.75A1.5 1.5 0 0 1 15.5 16.5Zm-9.5-2a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.307 2.236A1.499 1.499 0 0 1 8 19H6.5a.5.5 0 0 1-.5-.5v-4ZM7 18h1a.5.5 0 0 0 0-1H7v1Zm.5-3H7v1h.5a.5.5 0 0 0 0-1Z"/>
</svg>
