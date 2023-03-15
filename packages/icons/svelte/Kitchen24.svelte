<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm2 1v3h16V4H4Zm0 16V9h16v11H4Zm2-7.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-6Zm1 .5v5h10v-5H7Zm3.5-8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-4 5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11ZM18 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM9 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
</svg>
