<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M24 4.5C13.23 4.5 4.5 13.23 4.5 24S13.23 43.5 24 43.5 43.5 34.77 43.5 24 34.77 4.5 24 4.5Zm-7.06 12.44a1.5 1.5 0 0 1 2.12 0L24 21.878l4.94-4.94a1.5 1.5 0 0 1 2.12 2.122L26.122 24l4.94 4.94a1.5 1.5 0 0 1-2.122 2.12L24 26.122l-4.94 4.94a1.5 1.5 0 0 1-2.12-2.122L21.878 24l-4.94-4.94a1.5 1.5 0 0 1 0-2.12Z"/>
</svg>
