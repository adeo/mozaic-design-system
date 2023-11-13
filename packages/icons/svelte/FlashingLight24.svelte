<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V3ZM9.207 9.207a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414Zm10-4.414a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0ZM4.793 19.207a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0Zm11.414-4.414a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414-1.414l-3-3ZM13 17a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm3-5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm-9 1a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2h4Zm6.5-1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
</svg>
