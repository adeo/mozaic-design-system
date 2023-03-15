<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M10 3.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM1.75 10a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0ZM10 8.417a.75.75 0 0 1 .75.75v4.166a.75.75 0 0 1-1.5 0V9.167a.75.75 0 0 1 .75-.75Zm0-.917a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"/>
</svg>
