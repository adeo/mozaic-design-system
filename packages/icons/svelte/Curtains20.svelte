<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M2.5 1.75a.75.75 0 0 0 0 1.5h.917V17.5c0 .414.335.75.75.75H7.5a.75.75 0 0 0 .721-.956L8.137 17h3.726l-.084.294a.75.75 0 0 0 .721.956h3.333a.75.75 0 0 0 .75-.75V3.25h.917a.75.75 0 0 0 0-1.5h-15Zm9.791 13.75.715-2.5H10.5v2.5h1.791Zm-2.791 0V13H6.994l.715 2.5H9.5Zm0-3.5H7.246c.385-.208.81-.517 1.226-.975A6.572 6.572 0 0 0 9.5 9.48V12Zm3.254 0H10.5V9.479a6.57 6.57 0 0 0 1.028 1.546c.416.458.84.767 1.226.975Zm-7.837-1.083V3.25H9.24c-.107 3.97-1.06 5.867-1.878 6.766-.434.477-.85.698-1.136.803a1.782 1.782 0 0 1-.4.097h-.909ZM15.083 3.25H10.76c.107 3.97 1.06 5.867 1.878 6.766.434.477.85.698 1.136.803a1.781 1.781 0 0 0 .4.097h.909V3.25Zm-1.589 13.5 1.238-4.333h.351v4.333h-1.589Zm-8.577-4.333h.35l1.239 4.333h-1.59v-4.333Z"/>
</svg>
