<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm0 2h16v16H4V4Zm3.854 1.854a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 1 0 .708.708l2-2Zm3 2.292a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0Zm0-2.292a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 .708.708l5-5Z"/>
</svg>
