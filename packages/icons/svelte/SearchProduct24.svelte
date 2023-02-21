<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-.707.293l-12 12a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0l1.816-1.816A5.98 5.98 0 0 0 15 21c1.296 0 2.496-.41 3.477-1.11l1.816 1.817a1 1 0 0 0 1.414-1.414l-1.816-1.816A5.972 5.972 0 0 0 21 15c0-1.296-.41-2.496-1.11-3.476l1.817-1.817A1 1 0 0 0 22 9V3a1 1 0 0 0-1-1h-6Zm3.477 8.11L20 8.585V4h-4.586l-11 11L9 19.586l1.11-1.11a6 6 0 0 1 8.367-8.367ZM11 15a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6.5-7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
