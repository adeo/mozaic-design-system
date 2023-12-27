<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm2 1v1.5h16V4H4Zm-2 6.25a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3.5Zm2 1v1.5h16v-1.5H4ZM2 17.5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3.5Zm2 1V20h16v-1.5H4Z"/>
</svg>
