<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M2.5 1.75a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 1.5 0v-2.417H9.5v2.834a.5.5 0 0 0 1 0V7.583h2.75v.74A1.75 1.75 0 0 0 12 10a.5.5 0 0 0 1 0 .75.75 0 0 1 1.5 0 .5.5 0 0 0 1 0 1.75 1.75 0 0 0-1.25-1.678v-.739h2.5V17.5a.75.75 0 0 0 1.5 0v-15a.75.75 0 0 0-.75-.75h-15Zm14.25 4.833H10.5V3.25h6.25v3.333Zm-7.25 7.5H3.25V11.75H9.5v2.333Zm0-3.333V7.583H3.25v3.167H9.5Zm0-4.167H3.25V3.25H9.5v3.333Zm-3.667 5.834a.5.5 0 1 0 0 1h1.25a.5.5 0 0 0 0-1h-1.25Z"/>
</svg>
