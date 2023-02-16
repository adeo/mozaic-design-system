<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M3.25 10a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0ZM10 1.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Zm.75 4.917a.75.75 0 0 0-1.5 0V9.25H6.667a.75.75 0 1 0 0 1.5H9.25v2.583a.75.75 0 0 0 1.5 0V10.75h2.583a.75.75 0 0 0 0-1.5H10.75V6.667Z"/>
</svg>
