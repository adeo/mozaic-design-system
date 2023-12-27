<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4.854 2.146a.5.5 0 0 1 0 .708l-.647.646 1.084 1.084A9.963 9.963 0 0 1 12 2c2.582 0 4.935.978 6.709 2.584L19.293 4l-.147-.146a.5.5 0 0 1 .708-.708l.5.5.5.5a.5.5 0 0 1-.708.708L20 4.707l-.584.584A9.963 9.963 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-2.582.978-4.935 2.584-6.709L3.5 4.207l-.646.647a.5.5 0 1 1-.708-.708l1-1 1-1a.5.5 0 0 1 .708 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm1.5 7.5a1.5 1.5 0 1 1-.853-1.354l2.5-2.5a.5.5 0 0 1 .707.708l-2.5 2.5c.094.195.146.414.146.646Z"/>
</svg>
