<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-3a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 6 0c0 .583-.263 1.055-.507 1.387-.244.332-.555.634-.795.869l-.005.004c-.266.259-.456.444-.59.617a.84.84 0 0 0-.104.16A1 1 0 0 1 11 13c0-.582.287-1.045.522-1.348.223-.288.506-.562.73-.78l.05-.05c.26-.252.45-.443.58-.62A.653.653 0 0 0 13 9.994 1 1 0 0 0 12 9Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
