<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M4 4.333a1 1 0 1 0 0 2h18.667a1 1 0 1 0 0-2H4ZM18.667 13a5.667 5.667 0 1 0 0 11.334 5.667 5.667 0 0 0 0-11.334ZM11 18.667a7.667 7.667 0 1 1 13.749 4.668l3.958 3.958a1 1 0 0 1-1.414 1.414l-3.958-3.958A7.667 7.667 0 0 1 11 18.667ZM3 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 5.667a1 1 0 1 0 0 2h3.333a1 1 0 1 0 0-2H4Z"/>
</svg>
