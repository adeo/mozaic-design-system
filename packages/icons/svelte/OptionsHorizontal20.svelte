<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M5.833 10A1.667 1.667 0 1 1 2.5 10a1.667 1.667 0 0 1 3.333 0ZM17.5 10a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0ZM10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/>
</svg>
