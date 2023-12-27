<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M3.5 1.75A1.75 1.75 0 0 0 1.75 3.5v13c0 .966.784 1.75 1.75 1.75h13a1.75 1.75 0 0 0 1.75-1.75v-13a1.75 1.75 0 0 0-1.75-1.75h-13ZM3.25 3.5a.25.25 0 0 1 .25-.25h13a.25.25 0 0 1 .25.25v13a.25.25 0 0 1-.25.25h-13a.25.25 0 0 1-.25-.25v-13Zm3.354 1.437a.5.5 0 1 0-.708-.707L4.23 5.896a.5.5 0 1 0 .707.708l1.667-1.667Zm2.5 1.793a.5.5 0 0 1 0 .707L7.437 9.104a.5.5 0 1 1-.707-.708L8.396 6.73a.5.5 0 0 1 .708 0Zm0-1.793a.5.5 0 1 0-.708-.707L4.23 8.396a.5.5 0 1 0 .707.708l4.167-4.167Z"/>
</svg>
