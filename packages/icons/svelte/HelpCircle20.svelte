<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M10 3.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM1.75 10a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0ZM10 7.417a.917.917 0 0 0-.917.916.75.75 0 1 1-1.5 0 2.417 2.417 0 0 1 4.834 0c0 .46-.208.836-.407 1.107-.198.27-.452.517-.653.713l-.008.008c-.218.212-.38.37-.496.52a.629.629 0 0 0-.103.166.75.75 0 0 1-1.5-.014c0-.457.226-.825.418-1.072.182-.235.413-.46.601-.643l.041-.04c.215-.21.378-.373.492-.527.114-.155.115-.218.115-.218A.917.917 0 0 0 10 7.417Zm0 6.75a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"/>
</svg>
