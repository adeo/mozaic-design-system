<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M5.362 7.583a6.753 6.753 0 0 1 10.054-3.197.75.75 0 0 0 .834-1.246A8.254 8.254 0 0 0 3.776 7.584H2.5a.75.75 0 0 0 0 1.5h.967a8.341 8.341 0 0 0 0 1.833H2.5a.75.75 0 0 0 0 1.5h1.276A8.254 8.254 0 0 0 16.25 16.86a.75.75 0 1 0-.834-1.246 6.753 6.753 0 0 1-10.054-3.197H12.5a.75.75 0 0 0 0-1.5H4.978a6.813 6.813 0 0 1 0-1.834H12.5a.75.75 0 0 0 0-1.5H5.362Z"/>
</svg>
