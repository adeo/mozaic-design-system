<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 2a1 1 0 0 1 1 1v2.07A7.004 7.004 0 0 1 18.93 11H21a1 1 0 1 1 0 2h-2.07A7.004 7.004 0 0 1 13 18.93V21a1 1 0 1 1-2 0v-2.07A7.004 7.004 0 0 1 5.07 13H3a1 1 0 1 1 0-2h2.07A7.005 7.005 0 0 1 11 5.07V3a1 1 0 0 1 1-1Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/>
</svg>
