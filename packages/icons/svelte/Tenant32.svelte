<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M16.614 3.21a1 1 0 0 0-1.228 0l-12 9.334a1 1 0 1 0 1.228 1.579l1.053-.82V28a1 1 0 0 0 1 1h18.666a1 1 0 0 0 1-1V13.304l1.053.819a1 1 0 0 0 1.228-1.579l-12-9.333Zm7.72 8.538L16 5.267l-8.333 6.481V27h16.666V11.748ZM16 12.333a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334ZM12.333 14a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0Zm-.666 10a4.333 4.333 0 0 1 8.666 0h2a6.333 6.333 0 1 0-12.666 0h2Z"/>
</svg>
