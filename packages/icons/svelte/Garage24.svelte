<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.293 2.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1-1.414 1.414L20 12.414V20h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-7.586l-.293.293a1 1 0 0 1-1.414-1.414l9-9ZM18 20v-9.586l-6-6-6.003 6.004c.002.027.003.054.003.082V20h1v-8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V20h1ZM11 8.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4 5.5v2H8v-2h8Zm0 5v-2H8v2h8Zm0 1v2H8v-2h8Z"/>
</svg>
