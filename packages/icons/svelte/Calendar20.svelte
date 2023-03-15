<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M7 2.5a.75.75 0 0 0-1.5 0v.917h-3a.75.75 0 0 0-.75.75V17.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V4.167a.75.75 0 0 0-.75-.75h-3V2.5a.75.75 0 0 0-1.5 0v.917h-2.25V2.5a.75.75 0 0 0-1.5 0v.917H7V2.5Zm6 2.417h-2.25v.916a.75.75 0 0 1-1.5 0v-.916H7v.916a.75.75 0 1 1-1.5 0v-.916H3.25V8h13.5V4.917H14.5v.916a.75.75 0 0 1-1.5 0v-.916ZM3.25 9.5v7.25h13.5V9.5H3.25Z"/>
</svg>
