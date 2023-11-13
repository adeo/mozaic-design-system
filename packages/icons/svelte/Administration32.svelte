<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M15.335 3.253a1 1 0 0 1 1.33 0l12 10.666A1 1 0 0 1 28 15.667h-3V23h1a1 1 0 0 1 1 1v3h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-3a1 1 0 0 1 1-1h1v-7.333H4a1 1 0 0 1-.664-1.748l12-10.666ZM23 23v-7.333h-3.333V23H23Zm-5.333 0v-7.333h-3.334V23h3.334Zm-5.334 0v-7.333H9V23h3.333Zm6.334-9.333H6.63L16 5.338l9.37 8.329h-6.703ZM24 25H7v2h18v-2h-1Zm-8.833-15a.833.833 0 1 1 1.666 0 .833.833 0 0 1-1.666 0ZM16 8.167a1.833 1.833 0 1 0 0 3.666 1.833 1.833 0 0 0 0-3.666Z"/>
</svg>
